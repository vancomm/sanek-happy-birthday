const ZERO_WIDTH_SPACE = "​";


/** @type {HTMLSpanElement} */
const congratulationSpan = document.querySelector('#congratulation');

congratulationSpan.addEventListener("click", () => {
    congratulationSpan.textContent += `1${ZERO_WIDTH_SPACE}`;
});


/** @type {HTMLTemplateElement} */
const balloonsTemplate = document.querySelector("template#balloons");

[...Array(10).keys()]
    .forEach((_, i) => {
        /** @type {HTMLImageElement} */
        const balloonsElem = balloonsTemplate.content.cloneNode(true).querySelector('img');
        const left = `${i * 10}%`;
        const delay = `${Math.random() * 2.5}s`;
        const zIndex = Math.random() > .75 ? "100" : "0";
        balloonsElem.style.cssText += `--left: ${left}; --delay: ${delay}; --z-index: ${zIndex}`;
        document.body.appendChild(balloonsElem);
    });


/** @type {HTMLTemplateElement} */
const nyanTemplate = document.querySelector("template#nyan");

[...Array(3).keys()]
    .forEach((_, i) => {
        /** @type {HTMLImageElement} */
        const nyanElem = nyanTemplate.content.cloneNode(true).querySelector('img');
        nyanElem.style.cssText += `--index: ${i}`;
        document.body.appendChild(nyanElem)
    })