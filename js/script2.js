// creating sublist
var selectorLi = document.getElementById('selector-li');
var submenu = document.getElementById('submenu');

selectorLi.addEventListener('click', function() {
  if (submenu.style.display === 'none') {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
});

//adding text to the headers


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

  var imageUrl = 'img/tag_p.png';

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

  var imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.style.display = 'block';
  textFrame.appendChild(imageElement);
});


document.getElementById('header2').addEventListener('click', function() {
  var htmlCode = `
  <div class="wrapper">
			<nav>
				<ul class="main_nav">
					<li class="current"><a href="#" target="_current">Journal</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Work</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		</div>
  `;

  var cssCode = `
  .wrapper{
    width: 978px;
    height: auto;
    margin: 0 auto;
  }
  `;

  var imageUrl = 'img/class_selector.png';

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

  var imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.style.display = 'block';
  textFrame.appendChild(imageElement);
});

document.getElementById('header3').addEventListener('click', function() {
  var htmlCode = `
  <form class="search_widget">
					<input type="text" id="search-field" class="search-field" placeholder="What are you looking for?"/>
	</form>
  `;

  var cssCode = `
  #search-field{
    background-color: #482a6e;
    font-size: 25px;
    text-align: end;
  }
  `;

  var imageUrl = 'img/id_selector.png';

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

  var imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.style.display = 'block';
  textFrame.appendChild(imageElement);
});

document.getElementById('header4').addEventListener('click', function() {

  var cssCode = `
  *{
    margin:0;
    padding:0;
    border:0;
    outline:0;  
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    }
  h1 + p {
    border: #1e1e1e solid;
    }
    section> h3{
      text-align: center;
    }
    a[target="_current"] {
      color: #58c93a;
      box-shadow: 0 4px 0 #58c93a; 
    }
  `;

  var imageUrl = 'img/other_selectors.png';

  var textFrame = document.getElementById('textFrame');
  textFrame.innerHTML = ''; 

  var cssElement = document.createElement('pre');
  cssElement.style.color = 'blue';
  cssElement.textContent = cssCode;
  textFrame.appendChild(cssElement);

  var imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.style.display = 'block';
  textFrame.appendChild(imageElement);
});


var textAdded = false;
document.getElementById('css-tasks').addEventListener('click', function(){

  if (!textAdded) {
    var textContainer = document.createElement('div');
    textContainer.id = 'textContainer';

    var textFrame = document.getElementById('textFrame');
    textFrame.innerText = '';

    var paragraph1 = document.createElement('p');
    paragraph1.id = 'text1';
    paragraph1.textContent = 'Текст1: 123';
    textContainer.appendChild(paragraph1);

    var paragraph2 = document.createElement('p');
    paragraph2.id = 'text2';
    paragraph2.textContent = 'Текст2: 123';
    textContainer.appendChild(paragraph2);

    var paragraph3 = document.createElement('p');
    paragraph3.id = 'text3';
    paragraph3.textContent = 'Текст3: 123';
    textContainer.appendChild(paragraph3);

    var paragraph4 = document.createElement('p');
    paragraph4.id = 'text4';
    paragraph4.textContent = 'Текст4: 123';
    textContainer.appendChild(paragraph4);

    var paragraph5 = document.createElement('p');
    paragraph5.id = 'text5';
    paragraph5.textContent = 'Текст5: 123';
    textContainer.appendChild(paragraph5);

    textFrame.appendChild(textContainer);

    textAdded = true;
          }
        });

document.getElementById('lab2-theme').addEventListener('click', function() {
    document.getElementById('textFrame').innerText = 'Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ\n' +
            'ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.\n' +
            '\nМета: придбати практичні навички роботи з селекторами, ідентифікаторами,\n' +
            'списками, різноманітними властивостями кольору і фону, зовнішними та\n' +
            'внутрішними відступами, плаваючими елементами, оформленням текстових\n' +
            'елементів';
        });



var stylesConnect = document.getElementById("styles-connect");
var textFrame = document.getElementById("textFrame");
textFrame.innerHTML = '';
stylesConnect.addEventListener("click", function() {
              var text = `
                  <p>Для того, щоб застосувати стилі до HTML-документу, ми можемо обрати один з чотирьох способів, або ж комбінувати їх:</p>
                  <ul>
                      <li>застосувати зовнішні стилі за допомогою елемента link;</li>
                      <li>додати CSS-блок за допомогою елемента style;</li>
                      <li>вказати стиль конкретному HTML-елементу за допомогою HTML-атрибуту style (т.з. inline-стилі);</li>
                  </ul>
                  <p><strong>Зовнішні стилі</strong></p>
                  <p>Застосовуються за допомогою елемента link, який повинен розташовуватися всередині елемента head.</p>
                  <pre>
  &lt;head&gt;
      ...
      &lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;
      ...
  &lt;/head&gt;
                  </pre>
                  <p>Зустрівши в HTML-документі цей тег, браузер завантажить із сайту CSS-файл і застосує стилі, що містяться в ньому. Шлях до файлу вказують в атрибуті href (у нашому випадку це styles.css).</p>
                  <p>Такий підхід зручний тим, що спільні для декількох документів стилі можна винести в окремий файл і додавати їх тегом link, не дублюючи один і той же CSS-код в кожному з цих документів.</p>
                  <p><strong>Таблиці стилів документу</strong></p>
                  <p>Називаються так тому, що розташовуються безпосередньо в HTML-документі і застосовуються лише до нього.</p>
                  <p>CSS-стилі та коментарі розташовуються між тегами, що відкривають і закривають елемент style:</p>
                  <pre>
  &lt;style type="text/css"&gt;
      ...
      p {
          color: #333333;
          text-align: justify;
      }
      ...
  &lt;/style&gt;
                  </pre>
                  <p>Зазвичай тег style розміщують всередині елементу head, хоча він може знаходитися в будь-якій частині документу.</p>
                  <p><strong>Inline-стилі</strong></p>
                  <p>Якщо необхідно задати стиль певному елементу на сторінці, не застосовуючи зовнішніх стилів і елемента style, можна скористатись атрибутом style цього елементу:</p>
                  <pre>
  &lt;p style="color: red"&gt;Абзац з літерами червоного кольору&lt;/p&gt;
                  </pre>
                  <p>Всередині атрибуту style можна вказати декілька CSS-правил, які слід розділити крапкою з комою.</p>
                  <pre>
  &lt;p style="color: blue; font-weight: bold"&gt;...&lt;/p&gt;
                  </pre>
                  <p>Атрибут style є майже у всіх HTML-елементів, окрім тих, що розташовуються поза елементом body.</p>
              `;
              textFrame.innerHTML = text;
          });