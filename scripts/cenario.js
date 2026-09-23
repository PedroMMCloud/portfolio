const ceu = document.querySelector("#ceu");
for (let i = 0; i < 200; i++) {

    const estrela = document.createElement("div");
    estrela.classList.add("estrela");
    estrela.style.left = Math.random() * 100 + "%";
    estrela.style.top = Math.random() * 100 + "%";
    estrela.style.width = Math.random() * 3 + "px";
    estrela.style.height = Math.random() * 3 + "px";
    estrela.style.opacity = Math.random();
    ceu.appendChild(estrela);
}