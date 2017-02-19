var save_btn = document.getElementById('save');
var editor = document.getElementById('editable');
var result = document.getElementById('result');

save_btn.addEventListener('click', save);

function save () {
  var new_text = '';
  var text = editor.innerHTML;

  new_text = '<p>' + text + '</p>';
  console.log(new_text);
  result.textContent = new_text;
}


function command (name, argument) {
  var execute = true;
  if (typeof argument === 'undefined') argument = '';
  // Execute the command
  switch(name) {
    case 'createLink':
      argument = prompt("Adresse du lien ?");
    break;

    case 'insertImage':
      argument = prompt("Adresse de l'image ?");
    break;
  }
  if (argument === '') execute = false;
  if (execute) document.execCommand(name, false, argument);
}
