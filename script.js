let initDisplay = document.querySelector('.init-display');
let input = document.querySelector('.input');
let addButton = document.querySelector('.button');
let display = document.querySelector('.display');
let createButton = document.querySelector('.create-button');

function renderMadLibs() {
  initDisplay.style.display = "none";
  document.querySelector('.no-class').classList.add('render');
  let renderArea = document.querySelector('.render');
  renderArea.textContent = selectTemplate();
}

function selectTemplate() {
  console.log(templates)
  let randomTemplate = templates[Math.floor(Math.random() * templates.length)].template;
  console.log(randomTemplate);
  return randomTemplate;
}

createButton.addEventListener('click', renderMadLibs);