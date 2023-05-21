var selectorLi = document.getElementById('selector-li');
var submenu = document.getElementById('submenu');

selectorLi.addEventListener('click', function() {
  if (submenu.style.display === 'none') {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
});

document.getElementById('header1').addEventListener('click', function() {
  var htmlCode = `<!DOCTYPE html>    `
  htmlCode.color = '#2C81B7';
  var cssCode = `p{
    background-color: #58c93a;
      text-align: end;
  }`;
     cssCode.color = 'blue';
      
      document.getElementById('textFrame').innerText = htmlCode;
      document.getElementById('textFrame').appendChild(cssCode);
  });
