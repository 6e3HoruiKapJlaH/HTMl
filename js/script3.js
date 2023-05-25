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


document.getElementById('lab3-theme').addEventListener('click', function() {
  document.getElementById('textFrame').innerText = 'Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА\n' +
      'ЗАСОБАМИ CSS та FLEXBOX.\n' +
      '\nМета:\n' +
      '⎯ придбати практичні навички роботи верстки сторінок засобами CSS, верстки на\n' +
      'основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-\n' +
      'сторінок\n' +
      '⎯ придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX';
});


document.getElementById('header1').addEventListener('click', function() {
  var htmlCode = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin-left: 20px;
          margin-right: 20px;
          margin-top: 0;
          margin-bottom: 0;
        }

        table {
          width: 1879px;
          height: 937px;
          border-collapse: collapse;
        }

        td {
          padding: 10px;
          border: 1px solid black;
        }

        #block1 {
          width: 100%;
          height: 62px;
          text-align: left;
          vertical-align: bottom;
          background-color: blue;
          color: white;
        }

        #block2 {
          width: 120px;
          height: 740px;
          background-color: yellow;
          padding: 15px;
          text-align: center;
        }

        #block3 {
          background-color: blue;
          width: 100%;
          text-align: left;
          vertical-align: bottom;
          height: 61px;
          color: white;
        }

        #block4 {
          width: 500px;
          padding: 120px;
          text-align: center;
          vertical-align: text-top;
          background-color: white;
        }

        #block5 {
          background-color: yellow;
          width: 120px;
          padding: 15px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <table cellpadding="0" cellspacing="0" width="860" align="center">
        <tr>
          <td id="block1" colspan="3">Header (Block 1)</td>
        </tr>
        <tr>
          <td id="block2">Block 2</td>
          <td id="block4">Block 4</td>
          <td id="block5">Block 5</td>
        </tr>
        <tr>
          <td id="block3" colspan="3">Footer (Block 3)</td>
        </tr>
      </table>
    </body>
    </html>
  `;

  var textFrame = document.getElementById('textFrame');
  textFrame.innerHTML = ''; 
  var imageUrl1 = 'img/table1.png';
  var imageUrl2 = 'img/table1.1.png'


  var htmlElement = document.createElement('pre');
  htmlElement.style.color = '#2C81B7';
  htmlElement.textContent = htmlCode;
  textFrame.appendChild(htmlElement);

  var imageElement1 = document.createElement('img');
  imageElement1.src = imageUrl1;
  imageElement1.style.display = 'block';
  textFrame.appendChild(imageElement1);

  var imageElement2 = document.createElement('img');
  imageElement2.src = imageUrl2;
  imageElement2.style.display = 'block';
  textFrame.appendChild(imageElement2);
});


document.getElementById('header2').addEventListener('click', function() {
  var htmlCode = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin-left: 20px;
          margin-right: 20px;
          margin-top: 0;
          margin-bottom: 0;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          height: 100%;
        }

        td {
          padding: 10px;
          border: 1px solid black;
        }

        #block1 {
          height: 62px;
          text-align: left;
          vertical-align: bottom;
          background-color: blue;
          color: white;
        }

        #block2 {
          height: 740px;
          background-color: yellow;
          padding: 15px;
          text-align: center;

        }

        #block3 {
          height: 61px;
          text-align: left;
          background-color: blue;
          vertical-align: bottom;
          color: white;
        }

        #block4 {
          padding: 150px;
          text-align: center;
          vertical-align: text-top;
          background-color: white;
        }

        #block5 {
          background-color: yellow;
          padding: 15px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td id="block1" colspan="3">Header (Block 1)</td>
        </tr>
        <tr>
          <td id="block2">Block 2</td>
          <td id="block4">Block 4</td>
          <td id="block5">Block 5</td>
        </tr>
        <tr>
          <td id="block3" colspan="3">Footer (Block 3)</td>
        </tr>
      </table>
    </body>
    </html>
  `;
  
  var textFrame = document.getElementById('textFrame');
  textFrame.innerHTML = ''; 
  var imageUrl1 = 'img/table2.png';
  var imageUrl2 = 'img/tabel2.1.png'

  var htmlElement = document.createElement('pre');
  htmlElement.style.color = '#2C81B7';
  htmlElement.textContent = htmlCode;
  textFrame.appendChild(htmlElement);

  var imageElement1 = document.createElement('img');
  imageElement1.src = imageUrl1;
  imageElement1.style.display = 'block';
  textFrame.appendChild(imageElement1);

  var imageElement2 = document.createElement('img');
  imageElement2.src = imageUrl2;
  imageElement2.style.display = 'block';
  textFrame.appendChild(imageElement2);
});
