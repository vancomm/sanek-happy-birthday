/** @type {HTMLTemplateElement} */
const balloonsTemplate = document.querySelector("template#balloons");

[...Array(10).keys()]
    .map((_, i) => {
        const left = `${i * 10}%`
        const delay = `${Math.random() * 2.5}s`
        const zIndex = Math.random() > .75 ? "100" : "0"
        /** @type {HTMLImageElement} */
        const balloonsElem = balloonsTemplate.content.cloneNode(true).querySelector('img')
        balloonsElem.style.cssText += `--left: ${left}; --delay: ${delay}; --z-index: ${zIndex}`
        return balloonsElem
    })
    .forEach((el) => {
        document.body.appendChild(el)
    })