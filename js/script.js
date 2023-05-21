document.getElementById('header1').addEventListener('click', function() {
    document.getElementById('textFrame').innerText = 'Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.\n' +
    '\n Мета: придбати практичні навички роботи з HTML-документом, таблицями,\n' +
    'зображеннями, посиланнями, списками, формами.\n' +
    'Створити шаблон звітного HTML-документом для відображення\n' +
    'результатів роботи всіх лабораторних робіт.';
});
document.getElementById('header2').addEventListener('click', function() {
    document.getElementById('textFrame').innerText = 'Опис предметного середовища:\n\n' +
    'Наш майбутній веб-додаток - це фронтенд сайт блогу. Він призначений для публікації та відображення інформації у вигляді статей, новин або записів блогу. Користувачі зможуть переглядати вміст блогу, читати статті, переглядати коментарі та взаємодіяти з інтерфейсом сайту.\n\n' +
    'Функціональні вимоги:\n\n' +
    '- Відображення статей: Сайт повинен дозволяти відображати список статей з заголовками та короткими описами на головній сторінці.\n' +
    '- Перегляд повної статті: Користувачі повинні мати можливість відкривати статті повністю для читання, переглядати вміст, включаючи текст, зображення та інші мультимедійні елементи.\n' +
    '- Пошук: Користувачі повинні мати можливість здійснювати пошук статей за ключовими словами або категоріями.\n\n' +
    'Нефункціональні вимоги:\n\n' +
    '- Зовнішній вигляд та користувацький інтерфейс: Сайт повинен мати привабливий дизайн, легку навігацію та зручний користувацький інтерфейс.\n' +
    '- Адаптивність: Веб-додаток повинен бути реактивним і коректно відображатися на різних пристроях і екранах, включаючи мобільні пристрої та планшети.\n' +
    '- Продуктивність: Сайт повинен швидко завантажуватися і забезпечувати швидку навігацію між сторінками та статтями.';
});
document.getElementById('header3').addEventListener('click', function() {
    var codeText = `<!DOCTYPE html>
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
                <a href="#"><img src="img/logo.png" class="h_logo" title=""></a>
                <nav>
                    <ul class="main_nav">
                        <li class="current"><a href="#">Journal</a></li>
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
    </html>`;
        document.getElementById('textFrame').innerText = codeText;
    });

    document.getElementById('header4').addEventListener('click', function() {
        var imageElement = document.createElement('img');
        imageElement.src = 'img/main-page.png';
        imageElement.style.position = 'relative';
        imageElement.style.width = '100%';
    
        var textFrameElement = document.getElementById('textFrame');
        textFrameElement.innerHTML = ''; // Clear the existing content
        textFrameElement.appendChild(imageElement);
    });
    
    
    
document.getElementById('header5').addEventListener('click', function() {
    document.getElementById('textFrame').innerText = `Висновки, виходячи з даної лабораторної роботи:
    
1. HTML-структура: Навчившись роботі з HTML-документами, ми зрозуміли, як правильно структурувати документи за допомогою різних елементів. Знання про заголовки, абзаци, списки та таблиці дозволяють організовувати контент і робити його більш зрозумілим для користувачі.

2. Посилання: Ми дослідили роботу з посиланнями і зрозуміли, як створювати навігаційні елементи, які дозволяють користувачам переходити до інших сторінок, документів або ресурсів. Це важливий елемент веб-додатків, який забезпечує зручну навігацію.

3. Таблиці: Вивчивши таблиці в HTML, ми можемо легко створювати та форматувати дані в табличному вигляді. Це корисний інструмент для представлення структурованих даних і розташування їх в зручний спосіб для перегляду.

4. Зображення: Ми набули навичок роботи з зображеннями в HTML, що дозволяє вставляти зображення у веб-документи та керувати їх розміром і вирівнюванням. Це важливий елемент для візуального вдосконалення веб-сторінок.

5. Списки: Навчившись роботі зі списками, ми можемо створювати впорядковані та неупорядковані списки, що допомагають наглядно організувати і відображати інформацію.

6. Форми: Вивчивши роботу з формами, ми можемо збирати дані від користувачів, включаючи текстові поля, кнопки, вибір елементів тощо. Форми є важливим елементом для взаємодії з користувачами на веб-сайтах.

В результаті лабораторної роботи ми отримали практичні навички роботи з HTML-документами, таблицями, зображеннями, посиланнями та списками. Нашим головним завданням було створити шаблон звітного HTML-документу для відображення результатів усіх лабораторних робіт. Цей шаблон допоможе нам організувати та відображати інформацію зрозумілим способом, забезпечуючи зручну навігацію та зв'язок між сторінками. Набуті навички дозволять нам створювати професійні та ефективні веб-додатки, використовуючи HTML як основу для створення контенту та взаємодії з користувачами.`
});
document.getElementById('header6').addEventListener('click', function() {
    document.getElementById('textFrame').innerText = `Виконавці: Кашталян Є.С та Ходнєв М.Ю. з групи ІТ-03`;
});
