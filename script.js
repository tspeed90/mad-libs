let initDisplay = document.querySelector('.init-display');
let input = document.querySelector('.input');
let addButton = document.querySelector('.button');
let display = document.querySelector('.display');
let createButton = document.querySelector('.create-button');
let showMadLib = document.querySelector('.show-mad-lib');
let inputMode = document.querySelector('.input-mode');
let fields = document.querySelector('.word-fields');
let submitInputBtn;

//TODO: currently doesn't handle any replacement of user input into templates
function renderMadLibs() {
  showMadLib.style.display = "flex";
  showMadLib.textContent = selectTemplate();
}

function selectTemplate() {
  let randomTemplate = templates[Math.floor(Math.random() * templates.length)].template;
  return randomTemplate;
}

function createInput(word) {
  let inputLabels = document.createElement('label');
  inputLabels.innerText = word;
  let templateInput = document.createElement('input');
  inputLabels.appendChild(templateInput);
  templateInput.type = 'text';
  templateInput.name = 'word';
  templateInput.required = true;
  return inputLabels;
}

function createInputElements(template) {
  let placeholders = template.match(/{+([^}]+)}+/g);
  for (let word of placeholders) {
    let label = word.substring(2, word.length - 2);
    fields.appendChild(createInput(label));
  }
  renderInputFields();
}
  
function collectUserInput() {
  let inputList = document.querySelectorAll('input');
  let words = [];
  for (let i = 0; i < inputList.length; i++) {
    words.push(inputList[i].value);
  }
  return words;
}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  collectUserInput();
});

//TODO: need to add descriptor/parts of speech to input fields
function renderInputFields() {
  initDisplay.style.display = "none";
  inputMode.style.display = "flex";
}

createButton.addEventListener('click', function() {
  createInputElements(selectTemplate());
});

