var save_btn = document.getElementById('save');
var textarea = document.getElementById('textarea');
var result = document.getElementById('result');

save_btn.addEventListener('click', save);

function save () {
  var new_text = '';
  var text = textarea.value;

  new_text = '<p>' + text + '</p>';
  console.log(new_text);
  result.innerHTML = new_text;
}
