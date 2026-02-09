document.addEventListener("mousemove", (e) => {
    const card = document.querySelector(".card");
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;

    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});