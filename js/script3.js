// creating sublist
var task2 = document.getElementById('task2');
var submenu1 = document.getElementById('submenu1');

task2.addEventListener('click', function() {
  if (submenu1.style.display === 'none') {
    submenu1.style.display = 'block';
  } else {
    submenu1.style.display = 'none';
  }
});


var task3 = document.getElementById('task3');
var submenu2 = document.getElementById('submenu2');

task3.addEventListener('click', function() {
  if (submenu2.style.display === 'none') {
    submenu2.style.display = 'block';
  } else {
    submenu2.style.display = 'none';
  }
});
