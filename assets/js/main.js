AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
function sendMail() {
  var params = {
    name: document.getElementById('conName').value,
    email: document.getElementById('conEmail').value,
    subject: document.getElementById('conSubject').value,
    message: document.getElementById('conMessage').value
  }

  const serviceID = "service_x444bfq"
  const templateID = "template_8f9yaai"

  emailjs.send(serviceID, templateID, params).then(
    (res) => {
      document.getElementById('conName').value = "";
      document.getElementById('conEmail').value = "";
      document.getElementById('conSubject').value = "";
      document.getElementById('conMessage').value = "";
      console.log(res);
      alert("Message sent successfully!");
    })
    .catch((err) => console.log(err));
}