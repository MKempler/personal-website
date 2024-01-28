window.onload = () => {
  console.log("Welcome to Max Kempler's Personal Website!");

  const form = document.querySelector('.contact__form');

  if (form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the default form submission

          var formData = new URLSearchParams();
          for (const pair of new FormData(this)) {
              formData.append(pair[0], pair[1]);
          }

          var xhr = new XMLHttpRequest();
          xhr.open('POST', '/send', true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Send as URL-encoded data

          xhr.onload = function () {
              if (xhr.status === 200) {
                  console.log('Message sent successfully');
                  alert('Message sent successfully!');
              } else {
                  console.log('Error sending message');
                  alert('Error sending message.');
              }
          };

          xhr.send(formData);
          console.log('Form submission intercepted');
      });
  } else {
      console.log('Form not found');
  }
};
