// creating sublist
var js = document.getElementById('js-theory');
var submenu = document.getElementById('submenu');

js.addEventListener('click', function() {
  if (submenu.style.display === 'none') {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
});




document.getElementById('header2').addEventListener('click', function() {
    var jsCode = `
    document.getElementById('header2').addEventListener('click', function() {
        var textFrame = document.getElementById('textFrame');
        var button = document.createElement('button');
        button.textContent = 'Click me!';
        textFrame.innerHTML = '';
        textFrame.appendChild(button);
    
        button.addEventListener('click', function() {
              alert('Button clicked!');
        });
    });
    `
    var textFrame = document.getElementById('textFrame');
    var button = document.createElement('button');
    button.textContent = 'Click me!';
    textFrame.innerHTML = '';


    var jsElement = document.createElement('pre');
    jsElement.style.color = 'blue';
    jsElement.textContent = jsCode;
    textFrame.appendChild(jsElement);



    textFrame.appendChild(button);
    button.addEventListener('click', function() {
          alert('Button clicked!');
    });
});