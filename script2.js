var text_copy = document.getElementById('text_copy');

var editable = document.getElementById('editable');
var section_editable = editable.textContent;

/*save_btn.addEventListener('click', save);

function save () {
  var new_text = '';
  var text = textarea.value;
  new_text = '<p>' + text + '</p>';
  result.innerHTML = new_text;
}
*/
var btn = document.querySelectorAll('.command');
for (var i=0; i<btn.length; i++) {
  var effect = btn[i];
  btn[i].addEventListener("click", function(){
    if (document.getSelection) {
      selectedText = document.getSelection();
      var style_effect = document.execCommand(effect.getAttribute("id"));
      var res = section_editable.replace(selectedText,style_effect);
      selectedText.innerHTML = res;
    }
});
}

console.log(btn);
/*
// bold button
bold.addEventListener('click', bold_button);

function command_button() {
  if (document.getSelection) {
      selectedText = document.getSelection();
      var bold_effect = document.execCommand('bold');
      var res = section_editable.replace(selectedText,bold_effect);
      selectedText.innerHTML = res;
  }
}

// italic button
italic.addEventListener('click', italic_button);

function italic_button() {
  if (document.getSelection) {
      selectedText = document.getSelection();
      var italic_effect = document.execCommand('italic');
      var res = section_editable.replace(selectedText,italic_effect);
      selectedText.innerHTML = res;
  }
}
*/

// color text button
var foreColor = document.getElementById('control_txt-color');
foreColor.addEventListener('click', foreColor_button);

function foreColor_button() {
  if (document.getSelection) {
      selectedText = document.getSelection();
      var color_selected = document.getElementById("valueInput").value;
      var foreColor_effect = document.execCommand('foreColor','','#'+color_selected+"'");
      var res = section_editable.replace(selectedText,foreColor_effect);
      selectedText.innerHTML = res;
  }
}
