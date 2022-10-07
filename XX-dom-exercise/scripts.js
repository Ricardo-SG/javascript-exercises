// your JavaScript file
const container = document.querySelector('#container');
/*
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


// Exercise to add <p>
const parrafo = document.createElement('p');
parrafo.classList.add('parrafo');

parrafo.style.color = 'red';
parrafo.textContent = 'Hey! I\'m red!';
container.appendChild(parrafo);


// Exercise to add <h3>

const h3text = document.createElement('h3');
h3text.classList.add('h3text');
h3text.style.color = 'blue';
h3text.textContent = 'I\'m a blue h3';
container.appendChild(h3text);


const div2 = document.createElement('div');
div2.classList.add('div2');
div2.style.backgroundColor = 'pink';
div2.style.border = 'solid';
//div2.textContent = 'bórrame';
container.appendChild(div2);

const h1div = document.createElement('h1');
h1div.textContent = 'I\'m in a div';

const pdiv = document.createElement('p');
pdiv.textContent = 'ME TOO!';

div2.appendChild(h1div);
div2.appendChild(pdiv);
*/
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    alert('it worked');
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});


