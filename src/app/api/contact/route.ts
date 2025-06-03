import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const MIN_RECAPTCHA_SCORE = 0.5; // Adjust this threshold as needed (0.0 to 1.0)

export async function POST(request: Request) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    // 1. Validate reCAPTCHA Secret Key environment variable
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error('Missing reCAPTCHA secret key in environment variables');
      return NextResponse.json({ message: 'Server configuration error for security validation.' }, { status: 500 });
    }

    // 2. Verify reCAPTCHA token with Google
    const recaptchaVerifyResponse = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaVerifyResponse.json();

    if (!recaptchaData.success) {
      console.warn('reCAPTCHA verification failed:', recaptchaData['error-codes'] || 'Unknown error');
      return NextResponse.json({ message: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // reCAPTCHA v3 provides a score. You can use this score to take appropriate action.
    if (recaptchaData.score < MIN_RECAPTCHA_SCORE) {
      console.warn(`Low reCAPTCHA score: ${recaptchaData.score}. Possible bot activity.`);
      // You might choose to silently drop the message or flag it, instead of an error to the user
      return NextResponse.json({ message: 'Activity flagged as suspicious. Please try again later.' }, { status: 400 });
    }

    // 3. Validate Gmail environment variables (only if reCAPTCHA passes)
    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail credentials in environment variables');
      // This error should ideally not be reached if server is configured correctly, but good to have
      return NextResponse.json({ message: 'Server configuration error for email sending.' }, { status: 500 });
    }

    // 4. Create and send email (as before)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_EMAIL, 
      replyTo: email, 
      subject: `[Portfolio Contact] New Message from ${name} (Score: ${recaptchaData.score.toFixed(2)})`,
      text: `Name: ${name}\nEmail: ${email}\nreCAPTCHA Score: ${recaptchaData.score.toFixed(2)}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>reCAPTCHA Score:</strong> ${recaptchaData.score.toFixed(2)}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Transmission successful. Standby for response.' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    let errorMessage = 'Error: Signal lost. Please re-initiate contact protocol.';
    if (error instanceof Error) {
      // Add more specific error handling if needed
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
} 