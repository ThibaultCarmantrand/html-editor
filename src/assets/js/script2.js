var editable = document.getElementById('editable');
var section_editable = editable.textContent;


// attribute an action of buttons with class "command"
var btn = document.querySelectorAll('button'), i;

for (i=0; i<btn.length; ++i) {
  btn[i].addEventListener("click", function(){
    var effect = this.getAttribute('data-command');
    if (document.getSelection) {
      var selectedText = document.getSelection();
      var style_effect = document.execCommand(effect);
      var res = section_editable.replace(selectedText,style_effect);
    }
  });
  //btn[i].style.color="green";
}

function updateInput(id_button,evt) {
  if (document.getSelection) {
    this.value = evt;
    this.id = document.getElementById(id_button);
    var color_type = this.id.getAttribute('data-command');
    var selectedText = document.getSelection();
    var style_effect = document.execCommand(color_type,'','#'+evt+"'");
    var res = section_editable.replace(selectedText,style_effect);
  }
}
