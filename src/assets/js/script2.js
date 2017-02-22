var editable = document.getElementById('editable');
var section_editable = editable.textContent;
var save_btn = document.getElementById('save');
var result = document.getElementById('result');

save_btn.addEventListener('click', save);

function save () {
  var new_text = '';
  var text = editable.innerHTML;

  new_text = '<p>' + text + '</p>';
  console.log(new_text);
  result.textContent = new_text;
}

// attribute an action of buttons with class "command"
var btn = document.querySelectorAll('button'), i;

for (i=0; i<btn.length; ++i) {
  btn[i].addEventListener("click", command);
}

function command() {
  var effect = this.getAttribute('data-command');
  if (typeof argument === 'undefined') argument = '';
  switch(effect) {
    case 'formatBlock':
      argument = this.value;
    break;
    case 'createLink':
      argument = prompt("Adresse du lien ?");
    break;

    case 'insertImage':
      argument = prompt("Adresse de l'image ?");
    break;
  }
  document.execCommand(effect,'',argument);
}

function command_argument(command_name,evt) {
  if (document.getSelection) {
    var selectedText = document.getSelection();
    var style_effect =document.execCommand(command_name,'',evt);
    var res = section_editable.replace(selectedText,style_effect);
  }
}
