const jumpButtons = document.querySelectorAll("[data-jump]");

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.jump);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const cards = document.querySelectorAll(".file-card, .meme-grid article, .video-slot");

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--hover-x", `${x * 6}deg`);
    card.style.setProperty("--hover-y", `${y * -6}deg`);
    card.style.transform = `perspective(900px) rotateX(var(--hover-y)) rotateY(var(--hover-x))`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--hover-x");
    card.style.removeProperty("--hover-y");
    card.style.transform = "";
  });
});
