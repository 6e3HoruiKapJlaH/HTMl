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

  var textFrame = document.getElementById('textFrame');
  textFrame.innerHTML = ''; 

  var cssElement = document.createElement('pre');
  cssElement.style.color = 'blue';
  cssElement.textContent = cssCode;
  textFrame.appendChild(cssElement);
});
