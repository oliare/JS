// task 1
// let number = 10;
// let show = document.getElementById('number');
// document.getElementById('up').addEventListener('click', () => {
//     number++;
//     show.textContent = number;
// });

// document.getElementById('down').addEventListener('click', () => {
//     number--;
//     show.textContent = number;
// });


// task 2
// let getRandom = () => Math.floor(Math.random() * 280);
// let getRGB = () => `rgb(${getRandom()},${getRandom()},${getRandom()})`;

// function getElement() {
//     let div = document.createElement('div');
//     div.classList.add('block');
//     let rgb = getRGB();
//     div.style.backgroundColor = rgb;

//     let span = document.createElement('span');
//     span.textContent = rgb;
//     div.appendChild(span);

//     div.addEventListener('click', () => { div.remove(); });
//     document.querySelector('.task2').appendChild(div);
// }
// document.querySelector('.button').addEventListener('click', () => {
//     getElement();
// });


// task 3
// let getColor = () => Math.floor(Math.random() * 280);
// rndColor = () => {
//     return `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
// }

// function createPalette() {
//     let palette = document.querySelector('.palette');
//     for (let i = 0; i < 75; i++) {
//         let div = document.createElement('div');
//         div.style.width = div.style.height = '20px';
//         div.style.backgroundColor = rndColor();;
//         palette.appendChild(div);
//     }
// }

// textColor = () => {
//     let content = document.querySelector('.task3 p');
//     document.querySelector('.palette').addEventListener('click', (e) => {
//         content.style.color = e.target.style.backgroundColor;
//     })
// }
// createPalette();
// textColor();



// task 4
// class Comment {
//     constructor(user, content) {
//         this.user = user;
//         this.date = new Date();
//         this.content = content;
//     }
//     toString() {
//         return `
//         <p style="font-size:16px; font-weight:bold;">${this.user}</p>
//         <p style="font-size:12px;">${this.date.toLocaleDateString().replace(/\//g, '.')}</p>
//         <p style="font-size:14px;">${this.content}</p><hr>`;
//     }
// }

// let comments = document.getElementById('comments');
// let nameInput = document.getElementById('name');
// let commentInput = document.getElementById('commentTxt');
// let submit = document.getElementById('submit');

// submit.addEventListener('click', (event) => {
//     event.preventDefault();
//     let name = nameInput.value;
//     let comment = commentInput.value;

//     if (name && comment) {
//         const c = new Comment(name, comment);
//         comments.insertAdjacentHTML('beforeend', c.toString());
//         nameInput.value = '';
//         commentInput.value = '';
//     }
// });

// let form = document.getElementById('form');
// form.style.marginTop = '50px'
// submit.style.margin = '0 25% auto'

// let nameblock = document.getElementById('name-block');
// nameblock.style.display = 'flex'
// nameblock.style.height = '30px'
// nameblock.style.alignItems = 'center'
// nameblock.style.gap = '10px'

// let commentarea = document.getElementById('commentTxt');
// commentarea.style.width = '800px'
// commentarea.style.height = '100px'


// task 5
// let countryInput = document.getElementById('countryInput');
// const countries = [
//     "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
//     "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
//     "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
//     "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
//     "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
//     "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
//     "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
//     "China", "Colombia", "Comoros", "Congo", "Costa Rica",
//     "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark",
//     "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
//     "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
//     "Ethiopia", "Fiji", "Finland", "France", "Gabon",
//     "Gambia", "Georgia", "Germany", "Ghana", "Greece",
//     "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
//     "Haiti", "Honduras", "Hungary", "Iceland", "India",
//     "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
//     "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
//     "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
//     "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
//     "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
//     "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
//     "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
//     "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
//     "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
//     "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
//     "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
//     "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
//     "Peru", "Philippines", "Poland", "Portugal", "Qatar",
//     "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
//     "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
//     "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
//     "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
//     "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
//     "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
//     "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
//     "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
//     "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
//     "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
//     "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
// ];
// if (countryInput) {

// } else {

// }


// task 6
// let total = document.getElementById('total');
// document.getElementById('clear').addEventListener('click', () => {
//     total.value = '';
// });

// appendToInput = i => {
//     total.value += i;
// }

// document.querySelectorAll('.digit').forEach(button => {
//     button.addEventListener('click', () => {
//         appendToInput(button.innerText);
//     });
// });

// document.querySelectorAll('.operator').forEach(button => {
//     button.addEventListener('click', () => {
//         appendToInput(button.innerText);
//     });
// });

// document.getElementById('result').addEventListener('click', calculate);
// calculate = () => {
//     let expression = total.value;
//     let result = eval(expression);
//     total.value = result;
// }


// task 7
// let newsPage = document.getElementById('task7');
// for (let i = 0; i < 10; i++) {
//     let newsBlock = document.createElement('div');
//     newsBlock.classList.add('news');
//     let h = document.createElement('h4');
//     h.innerText = 'What is Lorem Ipsum?';

//     let txt = document.createElement('p');
//     txt.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit...Doloribus quas dolores animi quod ab unde molestiae similique dignissimos a labore, nesciunt asperiores cum nisi impedit possimus ducimus consectetur. Natus earum adipisci
//      facere nihil iure quibusdam quas, totam explicabo error eaque doloribus officia hic nobis quos exercitationem possimus cumque odit illo vero et, labore odio est autem. Molestias quod veniam nemo sunt accusantium sint necessitatibus,
//      eligendi facere laborum itaque, cum amet praesentium recusandae.`;

//     newsBlock.appendChild(h);
//     newsBlock.appendChild(txt);
//     newsPage.appendChild(newsBlock);
// }

// let up;
// addEventListener('scroll', () => {
//     if (window.scrollY >= 100) {
//         if (!up) {
//             up = document.createElement('div');
//             up.style.width = "40px";
//             up.style.height = "50px";
//             up.style.alignItems = "center";
//             up.style.justifyContent = "center";
//             up.style.display = "flex";
//             up.style.position = "fixed";
//             up.style.right = "0";
//             up.style.bottom = "0";
//             up.style.padding = "0";
//             up.style.margin = "20px";
//             up.innerHTML = "<h1>⬆</h1>";
//             up.style.cursor = "pointer";
//             up.style.backgroundColor = "gray";
//             up.style.borderRadius = "50px";
//             up.style.color = "white";
//             up.addEventListener('click', () => {
//                 window.scrollTo({ top: 0 });
//             });
//             document.body.appendChild(up);
//         }
//         up.style.display = 'flex';
//     } else up.style.display = 'none';
// });
