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
  var htmlCode = `
  <div class="post">
    <h1 class="title">
      <a href="#">Duis aute irure dolor in henderit in voluptate.</a>
    </h1>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>

    <a class="read_more" href="#">Continue Reading <i class="read_more_arrow"></i> </a>
  </div>`;

  var cssCode = `p {
    background-color: #58c93a;
    text-align: end;
    color: blue;
  }`;

  var textFrame = document.getElementById('textFrame');
  textFrame.innerHTML = ''; 

  var htmlElement = document.createElement('pre');
  htmlElement.style.color = '#2C81B7';
  htmlElement.textContent = htmlCode;
  textFrame.appendChild(htmlElement);

  var cssElement = document.createElement('pre');
  cssElement.style.color = 'blue';
  cssElement.textContent = cssCode;
  textFrame.appendChild(cssElement);
});

