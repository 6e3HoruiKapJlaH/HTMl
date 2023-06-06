document.getElementById('lab4-theme').addEventListener('click', function() {
  var textFrame = document.getElementById('textFrame');
  textFrame.innerText = 'Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.\n' +
    'ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ\n' +
    'ЗАСОВАМИ МОВИ JAVASCRIPT\n' +
    '\nМета: придбати практичні навички роботи з масивами у js-сценаріях.\n' +
    'Реалізація програм засовами мови JAVASCRIPT';
});

document.getElementById('conclusions').addEventListener('click', function(){
  var textFrame = document.getElementById('textFrame');
  textFrame.innerText =
  'Тема "ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT" була зосереджена на вивченні функціональних можливостей JavaScript в контексті HTML-документів. Метою цієї теми було набути практичних навичок роботи з масивами у JavaScript-сценаріях та реалізації програм за допомогою мови JavaScript.\n\n' +
  'Під час вивчення цієї теми ми ознайомилися зі способами використання масивів у JavaScript, які є потужним інструментом для зберігання та обробки даних. Ми вивчали, як створювати, модифікувати та використовувати масиви для зберігання великої кількості елементів.\n\n' +
  'Крім того, ми досліджували реалізацію програм за допомогою мови JavaScript. Це означало, що ми могли створювати програми, які здатні взаємодіяти з користувачем, виконувати обчислення та змінювати структуру HTML-документів з використанням JavaScript.\n\n' +
  'Метою цієї теми було розвиток нашого розуміння масивів у JavaScript та їх функціональності, а також набуття навичок створення програм з використанням JavaScript для вирішення практичних завдань. Засвоєння цієї теми дозволило нам створювати більш складні інтерактивні веб-сторінки та додавати функціональність до нашого коду на основі масивів у JavaScript.\n\n' +
  'Отже, ми успішно ознайомилися з функціональним застосуванням JavaScript у HTML-документах, використанням масивів у JS-сценаріях та реалізацією програм засобами мови JavaScript.'
});




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

document.getElementById('header1').addEventListener('click', function() {
  var textFrame = document.getElementById('textFrame');
  var code = `<a href="JavaScript:alert('Увага!!!');">Натисність тут</a>`;
  var text = 'Основним завданням мови програмування гіпертекстової системи є програмування гіпертекстових переходів. Це означає, що при виборі тієї чи іншої гіпертекстового посилання викликається програма реалізації гіпертекстового переходу. У Web-технології стандартною програмою, що викликається при гіпертекстовому переході, є програма завантаження сторінки (тобто при кліці по посиланню завантажується сторінка з зазначеним URL). JavaScript дозволяє поміняти стандартну програму на програму користувача. Для того щоб відрізнити стандартний перехід по протоколу HTTP від переходу, програмованого на JavaScript, розробники мови ввели нову схему URL - JavaScript.';

  textFrame.innerText = '';

  var codeElement = document.createElement('pre');
  codeElement.style.color = '#2C81B7';
  codeElement.textContent = code;
  textFrame.insertBefore(codeElement, textFrame.firstChild); // Вставляем элемент codeElement перед первым дочерним элементом textFrame
  textFrame.innerHTML += '<br>'; // Добавляем перевод строки

  textFrame.innerHTML += code;

  var textElement = document.createElement('div');
  textElement.textContent = text;
  textFrame.appendChild(textElement);
});


document.getElementById('header2').addEventListener('click', function() {
  var textFrame = document.getElementById('textFrame');
  var code = `<form><input type="button" value="Кнопка" onClick="alert('Ви натиснули кнопку');"></form>`;
  var text = 'Такі програми, як обробники подій, вказуються в атрибутах контейнерів, з якими ці події пов\'язані. Наприклад, при натисненні на кнопку відбувається подія Click і відповідно викликається обробник цієї події onClick:';

  textFrame.innerText = '';

  var codeElement = document.createElement('pre');
  codeElement.style.color = '#2C81B7';
  codeElement.textContent = code;
  textFrame.insertBefore(codeElement, textFrame.firstChild); // Вставляем элемент codeElement перед первым дочерним элементом textFrame
  textFrame.innerHTML += '<br>'; // Добавляем перевод строки

  textFrame.innerHTML += code;

  var textElement = document.createElement('div');
  textElement.textContent = text;
  textFrame.appendChild(textElement);
});



document.getElementById('header3').addEventListener('click', function() {
  var textFrame = document.getElementById('textFrame');
  var code = `<input type="text" style="width: expression(10 * location.href.length + 'px')">`;
  var text = 'Підстановки (entity) підтримуються тільки браузером Netscape Navigator 4.0. Вони зустрічаються на Web-сторінках досить рідко. Тим не менш це досить потужний інструмент генерації HTML-сторінки на стороні браузера. Підстановки мають формат: & {код_программи}; і використовуються як значення атрибутів HTML-контейнерів. У наступному прикладі поле введення INPUT буде мати, як значення за замовчуванням, адреса поточної сторінки, а розмір поля буде рівним кількості символів в цю адресу.\n' + 'Наприклад, наступний фрагмент створить поле введення, ширина якого в пікселях (px) дорівнює кількості символів в адресі сторінки, помноженому на 10';
  textFrame.innerText = '';

  var codeElement = document.createElement('pre');
  codeElement.style.color = '#2C81B7';
  codeElement.textContent = code;
  textFrame.insertBefore(codeElement, textFrame.firstChild); // Вставляем элемент codeElement перед первым дочерним элементом textFrame
  textFrame.innerHTML += '<br>'; // Добавляем перевод строки

  textFrame.innerHTML += code;

  var textElement = document.createElement('div');
  textElement.textContent = text;
  textFrame.appendChild(textElement);
});


document.getElementById('header4').addEventListener('click', function() {
  var textFrame = document.getElementById('textFrame');
  var code = '<script>\n\na = 5;\n\n</script>';
  var text = 'Контейнер SCRIPT - це розвиток підстановок до можливості генерації тексту документа JavaScript-кодом. У цьому сенсі застосування SCRIPT аналогічно Server Side Includes, тобто генерації сторінок документів на стороні сервера. Однак тут ми забігли трохи вперед. При розборі документа HTML-парсер передає управління JavaScript-інтерпретатору після того, як зустріне тег початку контейнера SCRIPT. Інтерпретатор отримує на виконання весь фрагмент коду всередині контейнера SCRIPT і повертає управління HTML-парсер для обробки тексту сторінки після тега кінця контейнера SCRIPT.\n';

  textFrame.innerText = '';

  var codeElement = document.createElement('pre');
  codeElement.style.color = '#2C81B7';
  codeElement.textContent = code;
  textFrame.insertBefore(codeElement, textFrame.firstChild); // Вставляем элемент codeElement перед первым дочерним элементом textFrame
  textFrame.innerHTML += '<br>'; // Добавляем перевод строки

  textFrame.innerHTML += code;

  var textElement = document.createElement('div');
  textElement.textContent = text;
  textFrame.appendChild(textElement);
});
