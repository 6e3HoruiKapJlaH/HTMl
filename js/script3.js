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

document.getElementById('header5').addEventListener('click', function(){
  var imageUrl = 'img/screen_page(flexbox).png';
  var textFrame = document.getElementById('textFrame');
  textFrame.innerHTML = '';

  var imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.style.display = 'block';
  textFrame.appendChild(imageElement);
});


document.getElementById('header6').addEventListener('click', function(){
  var htmlCode = `
  <!-- Сообщаем браузеру как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->

<head>
    <!-- Заголовок страницы в браузере -->

    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="styles.css" />
    <!-- Кодировка страницы -->
    <meta charset="UTF-8">
</head>
<!-- Отображаемое тело страницы -->

<body>
    <div class="wrapper">
        
    
        <div class="content">
            <div class="button-container">
                <button>Форми навчання</button>
                <button>Заходи</button>
                <button>Про Академію</button>
                <button>Контакти</button>
                <select>
                    <option>Київ</option>
                </select>
            </div>



            <div class="vertical">
                <div class='container'>
                    <div class="vertical__title title__main">
                        <p>
                            программа курсу </p>
                        <div class="vertical_title title__depend">
                            <p>
                                react </p>
                        </div>
                    </div>
                    <div class="vertical__body">
                        <div class="vertical__row">
                            <div class="vertical__column vertical__column_1">
                                <div class="vertical__item">
                                    <div class="vertical__40_m">40</div>
                                    <div class="vertical__40_d">40</div>
                                    <div class="vertical__hod">годин</div>
                                    <div class="vertical__op">опануй react за 20 занять</div>
                                </div>
                            </div>
                            <div class="vertical__column vertical__column_2">
                                <div class="vertical__item">
                                    <ul class="course__program list">
                                        <li>
                                            <div class="list__num">01</div> Встановлення react
                                        </li>
                                        <li>
                                            <div class="list__num">02</div> Класові компоненти
                                        </li>
                                        <li>
                                            <div class="list__num">03</div> state & props
                                        </li>
                                        <li>
                                            <div class="list__num">04</div> dataforwarding & props drilling
                                        </li>
                                        <li>
                                            <div class="list__num">05</div> lifecycle hooks
                                        </li>
                                        <li>
                                            <div class="list__num">06</div> Функціональні компоненти
                                        </li>
                                        <li>
                                            <div class="list__num">07</div> routing
                                        </li>
                                        <li>
                                            <div class="list__num">08</div> hooks
                                        </li>
                                        <li>
                                            <div class="list__num">09</div> redux
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="vertical__column vertical__column_3">
                                <div class="vertical__item">
                                    <div class="course__program button">
                                        <div class="course__program-button-owu">
                                            owu
                                        </div>
                                        <div class="course__program-button-rea">
                                            rea
                                        </div>
                                        <div class="course__program-button-text">
                                            Записатися на курс
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="stacionar">
                <div class='container'>
                    <div class="stacionar__title">
                        <p>
                            стаціонар
                        </p>

                    </div>
                    <div class="stacionar__body">
                        <div class="stacionar__row">
                            <div class="stacionar__column stacionar__column_1">
                                <div class="stacionar__item">
                                    <div class="stacionar__subtitle">minimal</div>
                                    <div class="stacionar__label">
                                        <form>
                                            <input type="radio" id="radio1" name="radios" checked>
                                            <label for="radio1"><span>&#10003;</span>40 годин</label><br>
                                        </form>
                                        <form>
                                            <input type="radio" id="radio2" name="radios" checked>
                                            <label for="radio2"><span>&#10003;</span>2 місяців</label><br>
                                        </form>
                                        <form>
                                            <input type="radio" id="radio3" name="radios" checked>
                                            <label for="radio3"><span>&#10003;</span>12 годин в тиждень</label><br>
                                        </form>
                                        <form>
                                            <input type="radio" id="radio4" name="radios" checked>
                                            <label for="radio4"><span>&#10003;</span>Розерміновування до 24
                                                міс.</label><br>
                                        </form>
                                        <form>
                                            <input type="radio" id="radio5" name="radios">
                                            <label for="radio1"><span>&#10003;</span>Безкоштовне повторне проходження
                                                курсу</label>
                                        </form>
                                        <form>
                                            <input type="radio" id="radio6" name="radios">
                                            <label for="radio1"><span>&#10003;</span>Особистий ментор</label>
                                        </form>

                                    </div>
                                    <div class="stacionar__bottom">
                                        <div class="stationar__prise">
                                            <div class="stationar__prise_old">
                                                17 000 грн
                                            </div>
                                            <div class="stationar__prise_new">
                                                8 500 грн
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="stacionar__free">
                                            3 вільних місць
                                        </div>
                                        <a href="#" class="stacionar__btn">
                                            Записатися на курс
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="stacionar__column stacionar__column_2">
                                <div class="stacionar__item">
                                    <div class="stacionar__subtitle">pro</div>
                                    <div class="stacionar__label">
                                        <div class="stacionar__label">
                                            <form>
                                                <input type="radio" id="radio1" name="radios" checked>
                                                <label for="radio1"><span>&#10003;</span>40 годин</label><br>
                                            </form>
                                            <form>
                                                <input type="radio" id="radio2" name="radios" checked>
                                                <label for="radio2"><span>&#10003;</span>2 місяців</label><br>
                                            </form>
                                            <form>
                                                <input type="radio" id="radio3" name="radios" checked>
                                                <label for="radio3"><span>&#10003;</span>12 годин в тиждень</label><br>
                                            </form>
                                            <form>
                                                <input type="radio" id="radio4" name="radios" checked>
                                                <label for="radio4"><span>&#10003;</span>Розерміновування до 24
                                                    міс.</label><br>
                                            </form>
                                            <form>
                                                <input type="radio" id="radio5" name="radios" checked>
                                                <label for="radio1"><span>&#10003;</span>Безкоштовне повторне
                                                    проходження
                                                    курсу</label>
                                            </form>
                                            <form>
                                                <input type="radio" id="radio6" name="radios" checked>
                                                <label for="radio1"><span>&#10003;</span>Особистий ментор</label>
                                            </form>

                                        </div>

                                        <div class="stacionar__bottom">
                                            <div class="stationar__prise">
                                                <div class="stationar__prise_old">
                                                    25 000 грн
                                                </div>
                                                <div class="stationar__prise_new">
                                                    12 500 грн
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="stacionar__free">
                                                3 вільних місць
                                            </div>
                                            <a href="#" class="stacionar__btn">
                                                Записатися на курс
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="stacionar__column stacionar__column_3">
                                <div class="stacionar__item">
                                    <div class="stacionar__subtitle">ідивідуально</div>
                                    <div class="stacionar__text">Об'єм, навантаження, тривалість визначаються
                                        ідндивідуально для кожного студента його персональним ментором</div>

                                    <div class="stacionar__bottom">
                                        <div class="stationar__prise">
                                            <div class="stationar__prise_old">
                                                100 000 грн
                                            </div>
                                            <div class="stationar__prise_new">
                                                51 000 грн
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="stacionar__free">
                                            3 вільних місць
                                        </div>
                                        <a href="#" class="stacionar__btn">
                                            Записатися на курс
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="pay">
                <div class="pay__title">
                    <div class="pay__now">
                        навчайся зараз
                    </div>
                    <div class="pay__next">
                        сплачуй потім
                    </div>
                </div>
                <div class="pay__button">
                    <div class="pay__button-text">
                        Дізнатись деталі
                    </div>
                </div>
                <div class="pay__end">
                    розтерmінування платежів до 24 місяців.
                </div>

            </div>

            <div class="test">
                <div class="test__logo">
                    QA/QC
                </div>
                <div class="test__main">
                    <div class="test__main-title">
                        комплексний курс тестування QA
                    </div>
                    <div class="test__main-subtitle">
                        Такого крутого курсу тестування ще не було!
                    </div>
                    <div class="test__main-text">
                        Найбільший та найкращий курс тестування в Україні. Гарантія
                        працевлаштування. Найбільший набір технологій.
                    </div>


                </div>
                <div class="test__main-button">
                    <div class="test__main-button__text">
                        Забронювати місце
                    </div>
                </div>
            </div>
        </div>

    </div>
</body>

</html>
  `;

  var textFrame = document.getElementById('textFrame');
  textFrame.innerHTML = ''; 


  var htmlElement = document.createElement('pre');
  htmlElement.style.color = '#2C81B7';
  htmlElement.textContent = htmlCode;
  textFrame.appendChild(htmlElement);
});



document.getElementById('header7').addEventListener('click', function(){
  var cssCode = `
  /*Обнуление*/
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

/*--------------------*/

body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}




.container {
    max-width: 1180px;
    margin: 0px auto;
}

.content {
    flex: 1 1 auto;
}

.button-container {
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
    
    
}

.button-container button {
    background-color: #000000;
    color: #f2f2f2;
    padding: 5px 1em 5px 1em;
    margin-right: 5px;
}

.button-container select {
    margin-left: 5px;
    background-color: #000000;
    color: #f2f2f2;
    padding: 5px 5em 5px 5em;
}


.school {
    color: white;
    font-weight: bold;
    font-size: 100px;
    text-shadow: 2px 2px 0 #96c9f5, -2px -2px 0 #96c9f5, 2px -2px 0 #96c9f5, -2px 2px 0 #96c9f5;
}

.prog {
    font-size: 60px;
    color: #212529;
    font-weight: bold;
}

.title {
    color: #445161;
    font-size: 30px;
}




.vertical {
    padding: 50px 0;
    background-color: #ffffff;
    display: flex;
    align-items: stretch;
}

.vertical__title {
    text-align: center;
    font-size: 25px;
    margin: 0px 0px 30px 0px;
    text-transform: uppercase;
    color: #eeeeee;
}

.title__main {
    color: #ff9a40;
}

.title__depend {
    font-size: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: #212529;
}

.vertical__body {
    max-width: 1200px;
    margin: 0px auto;
}

.vertical__row {
    display: flex;
    margin: 0px -22.5px;
}

.vertical__column {
    padding: 0px 22.5px;
    flex: 0 1 33.333%;


}

.vertical__column_1 {}

.vertical__column_2 {

    align-self: center;
}

.vertical__column_3 {
    align-self: self-end; 
}

.vertical__item {
    background-color: #ffffff;
    border-radius: 15px;
    color: #262626;
    display: flex;
    flex-direction: column;
}

.vertical__40_m {
    font-weight: bold;
    color: #ffffff;
    text-shadow: 2px 2px 0 #ffaf68, -2px -2px 0 #ffaf68, 2px -2px 0 #ffaf68, -2px 2px 0 #ffaf68;
    font-size: 200px;
}

.vertical__40_d {
    font-weight: bold;
    color: #ff9638;
    font-size: 100px;
    margin: -80px 0 0 60px;
}

.vertical__hod {
    font-weight: bold;
    color: #ffffff;
    text-shadow: 2px 2px 0 #525252, -2px -2px 0 #525252, 2px -2px 0 #525252, -2px 2px 0 #525252;
    font-size: 50px;
    margin: -40px 0 0 20px;

}

.vertical__op {
    color: #2a2a2a;
    font-size: 35px;
    text-transform: uppercase;
    margin-top: 20px;
}


.list__num {
    display: inline-block;
    writing-mode: vertical-rl;
    transform: scale(-1, -1);
}

li {
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
}

.list__num {
    color: #c4c4c4;
}

ul li:first-child * {
    color: #3f9ef2;
}

ul li:first-child {
    color: #3f9ef2;
}

.course__program-button-owu {
    font-weight: bold;
    color: #ffffff;
    text-shadow: 2px 2px 0 #f4f8fd, -2px -2px 0 #f4f8fd, 2px -2px 0 #f4f8fd, -2px 2px 0 #f4f8fd;
    font-size: 200px;

}
.course__program-button-rea{
    font-weight: bold;
    color: #edf4fb;
    font-size: 150px;
    text-transform: uppercase;
    margin: -40px 0 0 110px; 
}
.course__program-button-text {
    text-align: center;
    padding: 15px 80px 15px 80px;
    border-radius: 5px;
    background-color: #ffe200;
    color: #393726;
}





.stacionar{
    background-color: #3298f2;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 0px 20px 0px;
}

.stacionar__title{
    background-color: #ffd43d;
    color: #373530;
    font-size: 20px;
    width: 100px;
        text-transform: uppercase;
    font-weight: bold;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
    padding: 30px 30% 30px 10px;
}

.stacionar__body {
    max-width: 1300px;
    margin: 0px auto;
}

.stacionar__row {
    display: flex;
    margin: 1em ;
}

.stacionar__row::after {
    content: "";
    display: table;
    clear: both;
}

.stacionar__column {
    padding: 0px 22.5px;
    flex: 0 1 33.333%;
    display: flex;
    flex-direction: column;
}

.stacionar__item {
    background-color: #ffffff;
    border-radius: 15px;
    color: #fff;
    border: 3px solid #3a3a3a;
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.stacionar__subtitle {
    text-align: center;
    padding: 15px 0;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 20px;
    color: #252525;
}

.stacionar__label {
    padding: 12px 0 7px 15px;
    color: #626262;
    font-size: 20px;
}

input[type='radio'] {
    display: none;
}
label {
    display: inline-block;
    padding: 10px 10px 10px 50px;
    margin: 5px;
    position: relative;
}

label span {
    user-select: none; 
    -webkit-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none;
    pointer-events: none;
    width: 30px; 
    height: 30px; 
    border-radius: 50%;
    background-color: #ddd;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    line-height: 30px;
    text-align: center;
    color: #ddd; 
    font-weight: bold; 
    font-size: 30px; 
}

input[type='radio']:checked + label span {
    background-color: #edf4fb;
    color: #81d150; 
}

.stacionar__text {
    padding: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
}

.stacionar__text p {
    margin: 0px 0px 15px 0px;
}

.stacionar__text p:last-child {
    margin: 0;
}

.stacionar__bottom {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-top: auto;
}
.stationar__prise{
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    color: #3298f2;
}
.stationar__prise_old{
    text-decoration:line-through #e36b6b;
    margin-bottom: 10px;
}
hr {
    
    display:inline-block;
        height: 1px;
    width: 80% ;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    
}
.stacionar__free{
    color: #3b9df2;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
}
.stacionar__btn{
        display: block;
    text-align: center;
    line-height: 40px;
    background-color: #ffd43d;
    color: #2c250a;
    border-radius: 5px;
    font-size: 18px;
    margin: 5px 30px 20px 30px;
    font-weight: bold;
    margin-top: auto;
}

.pay {
    background-color: #3298f2;
    margin-top: 20px; /* distance to previous element */
    display: flex;
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    color: white;
}

.pay__title, .pay__end {
    align-self: flex-start;
}
.pay__now{
    color: #f8fbff;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 20px;
}
.pay__next{
    color: #212529;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 40px;
}
.pay__end {
    margin-top: 0;
    font-size: 10px;

}

.pay__button {
    background-color: #ffe200;
    align-self: center;
    border-radius: 5px;
    color: black;
    margin-top: 0;
    margin-right: -70%;
}

.pay__button-text {
    font-size: 15px;
    padding: 1em 5em 1em 5em;
}

.test{
    display: flex;
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    
}
.test__logo{
    font-weight: bold;
    color: #f9f9f9;
    font-size: 250px;
    text-transform: uppercase;
    margin: -20px 0 0 -50px; 
}
.test__main{
    margin: -60px 0 0 50px;
}
.test__main-title{
    margin-top: -40px;
    max-width: 30%;
    font-size: 25px;
    text-transform: uppercase;
    color: #ff9638;
    font-weight: 900;

}
.test__main-subtitle{
    margin-top: 50px;
    font-size: 18px;
    color: #2e2e2e;
    font-weight: 900;}
.test__main-text{
    margin-top: 10px;
    max-width: 66%;
    font-size: 20px;
    color: #4c4c4c;
}
.test__main-button{
    background-color: #3298f2;
    border-radius: 5px;
    color: black;
    margin-top: 15px;
    margin-left: 50px;
}
.test__main-button__text{
    
    font-size: 15px;
    padding: 1em 3em 1em 3em;
}
  `
  var textFrame = document.getElementById('textFrame');
  textFrame.innerHTML = ''; 

  var cssElement = document.createElement('pre');
  cssElement.style.color = 'blue';
  cssElement.textContent = cssCode;
  textFrame.appendChild(cssElement);

});


document.getElementById('conclusions').addEventListener('click', function() {
  document.getElementById('textFrame').innerText = `Під час лабораторної роботи на тему "ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА
  ЗАСОБАМИ CSS та FLEXBOX."
  
  Ми дійшли таких виснвків:

1. HTML-документ верстається за допомогою CSS, що дозволяє керувати зовнішнім виглядом елементів сторінки.

2. Блокова верстка використовується для створення розділів та блоків на сторінці, що дозволяє краще організувати контент.

3. Засоби CSS дозволяють задавати стилі для елементів, такі як кольори, шрифти, розміри, відступи та багато іншого, що дозволяє створювати привабливий дизайн сторінки.

4. Плаваючі елементи дозволяють контролювати розміщення елементів на сторінці, наприклад, вирівнювання по лівому або правому краю, розташування в рядок або стовпчик.

5. Макети веб-сторінок можуть бути різних типів і мати свої переваги та недоліки. Важливо враховувати потреби проекту та аудиторію, щоб обрати найкращий тип макету.

6. Flexbox є потужним інструментом для верстки, що дозволяє легко контролювати розміщення елементів у рядку або стовпчику, змінювати їх розміри та вирівнювання.

7. Практичні навички роботи з CSS та Flexbox допомагають створювати привабливий та функціональний дизайн сторінок, покращують роботу з веб-розробкою та сприяють досягненню бажаних результатів.

Вивчення цієї теми та досягнення поставленої мети дозволяють розвинути навички верстки сторінок засобами CSS та Flexbox, що є важливими для успішної веб-розробки.
      
  `
  });

  document.getElementById('header3').addEventListener('click', function() {
    var htmlCode = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <title>Розмітка з плаваючими блоками</title>
        <style>
            .orange {
                background-color: orange;
            }
    
            .blue {
                background-color: blue;
                color: white;
            }
        </style>
    </head>
    
    <body>
        <div style="width: 900px">
            <div class="block blue" style="width: 100%; height: 100px">1</div>
            <div style="width: 100%; height: 200px">
                <div class="block orange" style="width: 300px; height: 200px; float: left">2</div>
    
                <div>
                    <div class="block orange" style="width: 600px; height: 50px; float: left">5</div>
                    <div class="block" style="width: 300px; height: 200px; float: left">4</div>
                    
                    
                </div>
                
                
            </div>
            <div class="block blue" style="width: 100%; height: 100px">3</div>
        </div>
    </body>
    </html>`
    ;
  
    var textFrame = document.getElementById('textFrame');
    textFrame.innerHTML = ''; 
    var imageUrl1 = 'img/block1.png';
    var imageUrl2 = 'img/block1.1.png'
  
  
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




  document.getElementById('header4').addEventListener('click', function() {
    var htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <title>Розмітка з плаваючими блоками</title>
        <style>
            .orange {
                background-color: orange;
            }
    
            .blue {
                background-color: blue;
                color: white;
            }
        </style>
    </head>
    
    <body>
        <div style="width: 100%">
            <div class="blue" style="width: 100%; height: 100px">1</div>
            <div style="width: 100%; height: 200px">
                <div class="orange" style="width: 20%; height: 200px; float: left">2</div>
                <div>
                    <div class="orange" style="width: 80%; height: 50px; float: left">5</div>
                    <div style="width: 80%; height: 200px; float: left">4</div>
                 </div>
                
                
            </div>
            <div class="blue" style="width: 100%; height: 100px">3</div>
        </div>
    </body>
    
    </html>
    `;
  
    var textFrame = document.getElementById('textFrame');
    textFrame.innerHTML = ''; 
    var imageUrl1 = 'img/block2.png';
    var imageUrl2 = 'img/block2.2.png'
  
  
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





  document.getElementById('task1').addEventListener('click', function() {
    var htmlCode = `
    <!DOCTYPE html>
<html lang="en">
<head>
	<title>Blog</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>

	<header>
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
	</header><!-- Header End -->

	<section class="main2 wrapper">
		<section class="content">
			<article>
				<div class="article_image">
					<a href="#">
						<img src="img/pic4.jpg" alt="" title="">
					</a>
				</div>
				<div class="post">
					<h1 class="title">
						<a href="#">Duis aute irure dolor in henderit in voluptate.</a>
					</h1>
					
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>

					<a class="read_more" href="#">Continue Reading <i class="read_more_arrow"></i> </a>
				</div>
			</article>

			<article>
				<div class="article_image">
					<a href="#">
						<img src="img/pic5.jpg" alt="" title="">
					</a>
				</div>
				<div class="post">
					<h1 class="title">
						<a href="#">Duis aute irure dolor in henderit in voluptate.</a>
					</h1>
					
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>

					<a class="read_more" href="#">Continue Reading <i class="read_more_arrow"></i> </a>
				</div>
			</article>
		</section><!-- Content End -->

		<aside class="sidebar">
			<section class="widget">
				<h3 class="widget-title">About US.</h3>
				<div class="textwidget">
					<p>Duis aute irure dolor in rhenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
					<p>Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum.</p>	
				</div>
			</section>

			<section class="widget">
				<h3 class="widget-title">Search.</h3>
				<form class="search_widget">
					<input type="text" id="search-field" class="search-field" placeholder="What are you looking for?"/>
				</form>
			</section>
		</aside>

		<nav class="pagination">
			<a href="#" class="previous"><i></i>Previous</a>
			<a href="#" class="next">Next<i></i></a>
		</nav>
	</section>


</body>
</html>
    `;

    var cssCode = `
  


/*  Fonts  */
@font-face {
    font-family: 'LatoRegular';
    src: url('../fonts/Lato-Regular.eot');
    src: url('../fonts/Lato-Regular.eot?#iefix') format('embedded-opentype'),
         url('../fonts/Lato-Regular.woff') format('woff'),
         url('../fonts/Lato-Regular.ttf') format('truetype'),
         url('../fonts/Lato-Regular.svg#LatoRegular') format('svg');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'LatoBold';
    src: url('../fonts/Lato-Bold.eot');
    src: url('../fonts/Lato-Bold.eot?#iefix') format('embedded-opentype'),
         url('../fonts/Lato-Bold.woff') format('woff'),
         url('../fonts/Lato-Bold.ttf') format('truetype'),
         url('../fonts/Lato-Bold.svg#LatoBold') format('svg');
    font-weight: normal;
    font-style: normal;

}







header{
	width: 100%;
	height: 126px;
	background-color: #292929; 
	border-bottom: 4px #1e1e1e solid;
}

header img.h_logo{

	display: block;
	float: left;
	margin-top: 49px;
	
}

header nav{
	float: right;
}

ul.main_nav{	
	font-family: 'LatoBold', 'Helvetica', arial;
	margin-right: -1px;
	font-weight: bold;
}

ul.main_nav li{
	float: left;
	letter-spacing: 2px;
	font-size: 16px;
	padding: 0;
	margin: 0;
}

ul.main_nav li a{
	display: block;
	width: 130px;
	height: 71px;
	padding-top: 55px;
	border-right: 1px #1e1e1e solid;
	vertical-align: middle;
	text-decoration: none;
	text-shadow: 0px 1px 0 #1e1e1e;
	text-align: center;
}

ul.main_nav li:first-child a{
	border-left: 1px #1e1e1e solid; 
}



ul.main_nav li a:hover{
	background: #242424;
}

/*  Main section  */
.main{
	position: relative;
	border-left: 1px #e1e0e0 solid;
	border-right: 1px #e1e0e0 solid;
	height: auto;
	overflow: hidden;
}

.main article{
	margin: 80px 0;
	overflow: hidden;
}


.main .article_image,
.main .post{
	float: left; 
}

.main .article_image{
	width: 470px;
	margin-right: 40px;
}


.main .post{
	width: 430px;
	float: left;
}

.main .post h1.title,
.main2 .post h1.title{
	font-family: 'LatoBold', 'Helvetica', arial;
	font-weight: bold;
	font-size: 28px;
	text-transform: uppercase;
	line-height: 30px;
	margin-bottom: 50px;
}

.main .title a,
.main2 .title a{
	text-decoration: none;
	color: #4f4e4e;
}

.main .title a:hover,
.main2 .title a:hover{
	color: #58c93a;
}

.main .post p,	
.main2 .post p{	
	font-family: 'LatoRegular', 'Helvetica', arial;
	font-size: 16px;
	color: #606060;
	line-height: 20px;
	margin-bottom: 20px;
}

.main a.read_more,
.main2 a.read_more{
	font-family: 'LatoRegular', 'Helvetica', arial;
	display: inline-block;
	padding: 10px 30px 13px 30px;
	background: #ffffff;
	border: 2px #c2c2c2 solid;
	color: #c2c2c2;
	text-decoration: none;
	margin-top: 14px;

	border-radius: 100px;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	-o-border-radius: 100px;
	-ms-border-radius: 100px;
}

.main a.read_more:hover,
.main2 a.read_more:hover{
	border: 2px #58c93a solid;
	color: #58c93a;
}

.main a.read_more i.read_more_arrow,
.main2 a.read_more i.read_more_arrow{
	width: 15px;
	height: 7px;
	background: url('../img/read_more_arrow.png') no-repeat;
	display: inline-block;
	opacity: 0;
	margin-left: -5px;
}

.main a.read_more:hover i.read_more_arrow,
.main2 a.read_more:hover i.read_more_arrow{
	opacity: 1;
	margin-left: 5px;
}

.main2{
	padding-top: 80px;
	position: relative;
	border-left: 1px #e1e0e0 solid;
	border-right: 1px #e1e0e0 solid;
	height: auto;
	overflow: hidden;
}

.main2 .content{
	width: 620px;
	float: left;
}

.main2 .post{
	width: 580px;
	margin-left: 20px;
	margin-top: 20px;
	margin-bottom: 80px;
}



/*  Sidebar & widgets  */
aside{
	width: 280px;
	height: 1000px;
	float: right;
}

aside .widget{
	margin-bottom: 80px;
}

aside h3.widget-title{
	width: 240px;
	padding: 17px 20px;
	border-left: 3px #58c93a solid;
	background: #f8f8f8;
	margin-bottom: 20px;
	font-family: 'LatoBold', 'Helvetica', arial;
	font-weight: bold;
	font-size: 16px;
	color: #6c6969;
	text-transform: uppercase;
	letter-spacing: 1px;
}

aside .textwidget p{
	width: 240px;
	padding: 0 20px;
	font-family: 'LatoRegular', 'Helvetica', arial;
	font-size: 16px;
	color: #737373;
	margin-bottom: 10px;
	line-height: 20px;
}

.search_widget .search-field{
	width: 240px;
	height: 50px;
	padding: 0 20px;
	color: #828282;
	font-family: 'LatoRegular', 'Helvetica', arial;
	font-size: 12px;
	letter-spacing: .5px;
	outline: none;
	border: 1px #e1e0e0 solid;
}


.search_widget .search-field:focus{
	border: 1px #b9b9b9 solid;
}



::-webkit-input-placeholder {
   color: #b9b9b9;
}

:-moz-placeholder { /* Firefox 18- */
   color: #b9b9b9;  
}

::-moz-placeholder {  /* Firefox 19+ */
   color: #b9b9b9;  
}

:-ms-input-placeholder {  
   color: #b9b9b9;  
}

/*  pagination  */
.pagination{
	display: block;
	width: 100%;
	padding: 30px 0;
	border-top: 1px #e1e0e0 solid;
	border-bottom: 1px #e1e0e0 solid;
	overflow: hidden;
}

.pagination a{
	color: #818181;
}

.previous,
.next{
	text-decoration: none;
	margin: 0 30px;
	font-family: 'LatoBold', 'Helvetica', arial;
	font-weight: bold;
	font-size: 18px;
	text-transform: uppercase;
}

.previous{
	float: left;
}

.next{
	float: right;
}

.previous i,
.next i{
	width: 15px;
	height: 7px;
	display: inline-block;
	margin-bottom: 3px;
	background: url('../img/pagination.png') no-repeat;
}

.previous i{
	background-position: 0 0;
	margin-right: 10px;
}

.next i{
	background-position: -16px 0;
	margin-left: 10px;
}

.previous:hover,
.next:hover{
	color: #58c93a;
}
.previous:hover i,
.next:hover i{
	background: url('../img/pagination_hover.png') no-repeat; 
}

.previous:hover i{
	background-position: 0px 0;
}

.next:hover i{
	background-position: -16px 0;
}




ul.main_nav li a,
.main .title a,
.main2 .title a,
.main a.read_more,
.main2 a.read_more,
.main a.read_more i.read_more_arrow,
.main2 a.read_more i.read_more_arrow,
.previous,
.next,
.previous i,
.next i,
.search_widget .search-field{
	transition: .2s linear;
	-webkit-transition: .2s linear;
	-moz-transition: .2s linear;
	-o-transition: .2s linear;
}

/* task 2 */
p{
	background-color: #58c93a;
    text-align: end;
}
.wrapper{
	width: 978px;
	height: auto;
	margin: 0 auto;
}
#search-field{
	background-color: #482a6e;
	font-size: 25px;
	text-align: end;
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

  
  
    var textFrame = document.getElementById('textFrame');
    textFrame.innerHTML = ''; 
    var imageUrl = 'img/maket.png'
  
  
    var htmlElement = document.createElement('pre');
    htmlElement.style.color = '#2C81B7';
    htmlElement.textContent = htmlCode;
    textFrame.appendChild(htmlElement);

    var cssElement = document.createElement('pre');
    cssElement.style.color = 'blue';
    cssElement.textContent = cssCode;
    textFrame.appendChild(cssElement);
  
    var imageElement1 = document.createElement('img');
    imageElement1.src = imageUrl;
    imageElement1.style.display = 'block';
    textFrame.appendChild(imageElement1);
  });