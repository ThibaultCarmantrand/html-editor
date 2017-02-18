var text_copy = document.getElementById('text_copy');

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

function updateInput(evt) {
  document.getElementById("control_txt-color").value=evt;
  if (document.getSelection) {
    var selectedText = document.getSelection();
    var style_effect = document.execCommand('foreColor','','#'+evt+"'");
    var res = section_editable.replace(selectedText,style_effect);
  }
}
