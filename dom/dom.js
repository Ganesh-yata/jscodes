const playground = document.getElementById("playground");
playground.setAttribute('class','playground1');

const fruitBasket = document.createElement('div');
fruitBasket.innerHTML = `
<p>Apple</p>
<p>Banana</p>
<p>Cherry</p>
`;
playground.append(fruitBasket);

while(fruitBasket.firstChild){
  fruitBasket.removeChild(fruitBasket.firstChild);
}
// setting attributes like id class etc
const magic = document.createElement('div');
magic.setAttribute('id','magic');
magic.setAttribute('class','magic-class');
magic.textContent = "here from newly created div id-magic and class:magic-class";
playground.append(magic);
console.log(playground.getAttribute('class'));
console.log(playground.className);

