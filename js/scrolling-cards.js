const projectCards = document.querySelectorAll(".project-card");
const handleScroll = () => {
  projectCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardHeight = card.offsetHeight;
    const windowHeight = window.innerHeight;

    if (cardTop <= windowHeight - cardHeight / 2) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", handleScroll);
if (window.location.pathname === "/projects") {
  window.addEventListener("scroll", handleScroll);
}
