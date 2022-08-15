const btn = document.getElementById('button');
const my_form = document.getElementById('form')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_t750on6';
   const templateID = 'contact_form';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Message';
      alert('Sent!');
      my_form.reset();
    }, (err) => {
      btn.value = 'Send Message';
      alert(JSON.stringify(err));
    });
});