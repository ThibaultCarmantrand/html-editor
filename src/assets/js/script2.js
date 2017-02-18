var text_copy = document.getElementById('text_copy');

var editable = document.getElementById('editable');
var section_editable = editable.textContent;


// attribute an action of buttons with class "command"
var btn = document.querySelectorAll('.command'), i;

for (i=0; i<btn.length; ++i) {
  btn[i].addEventListener("click", function(){
    var effect = this.id;
    if (document.getSelection) {
      var selectedText = document.getSelection();
      var style_effect = document.execCommand(effect);
      var res = section_editable.replace(selectedText,style_effect);
    }
  });
  //btn[i].style.color="green";
}

// color text button
//var foreColor = document.getElementById('control_txt-color');
//foreColor.addEventListener('click', updateInput);

/*function foreColor_button() {
  if (document.getSelection) {
      selectedText = document.getSelection();
    //  var color_selected = document.getElementById("valueInput").value;
      var foreColor_effect = document.execCommand('foreColor','','#'+color_selected+"'");
      var res = section_editable.replace(selectedText,foreColor_effect);
      selectedText.innerHTML = res;
  }
}
*/

function updateInput(evt) {
  document.getElementById("valueInput").value=evt;
  console.log(evt);
  if (document.getSelection) {
    var selectedText = document.getSelection();
    var style_effect = document.execCommand('foreColor','','#'+evt+"'");
    var res = section_editable.replace(selectedText,style_effect);
  }
}

