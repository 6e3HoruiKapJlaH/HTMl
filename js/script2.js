var selectorLi = document.getElementById('selector-li');
var submenu = document.getElementById('submenu');

selectorLi.addEventListener('click', function() {
  if (submenu.style.display === 'none') {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
});
