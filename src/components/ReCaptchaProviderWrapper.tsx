'use client';

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface ReCaptchaProviderWrapperProps {
  children: React.ReactNode;
}

const ReCaptchaProviderWrapper: React.FC<ReCaptchaProviderWrapperProps> = ({ children }) => {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaSiteKey) {
    // This warning will appear in the browser console if the key is missing.
    console.warn(
      "reCAPTCHA Site Key (NEXT_PUBLIC_RECAPTCHA_SITE_KEY) is missing. " +
      "Contact form protection will be disabled. Ensure the key is set in your .env.local file."
    );
    // Render children directly if the site key is not available, so the app doesn't break.
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProviderWrapper; 