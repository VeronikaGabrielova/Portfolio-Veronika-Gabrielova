const section = document.querySelector('#about-me');

window.addEventListener('scroll', () => {
  const sectionPosition = section.getBoundingClientRect().top;
  section.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower');

  const screenPosition = window.innerHeight / 2;
  if (sectionPosition < screenPosition) {
    section.classList.add('animate__animated', 'animate__fadeIn');
  }
});





  