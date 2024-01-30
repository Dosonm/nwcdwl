const cs = document.querySelector('#to-do-list');
console.log(cs)
const csc = cs.firstElementChild;
console.log(csc)
console.log(csc.outerHTML)

const el = document.createElement('a');
el.setAttribute('href', 'https://www.codeit.kr/');
el.textContent = csc.textContent;
console.log(el)
console.log(el.outerHTML)
console.log(csc.innerHTML)
console.log(csc.outerHTML)
csc.innerHTML = el.outerHTML;

console.log(csc)