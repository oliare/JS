// 1
// let random = () => Math.floor(Math.random() * 100);

// let task1 = document.querySelector('#task1 button');
// let div = document.getElementById('task1');
// div.style.textAlign = 'center';
// div.style.float = 'left';
// document.querySelector('#task1 span').style.fontSize = '2em';

// let res = document.getElementById('number')
// task1.addEventListener('click', () => {
//     let n = random();
//     res.innerText = n;
// });


// 2
// let task2 = document.createElement('div');
// task2.id = 'task2';
// task2.style.width = '100vw';
// task2.style.height = '100vh';
// document.body.append(task2);
// task2.addEventListener('mousemove', (e) => console.log(`X = ${e.clientX}\nY = ${e.clientY}`));

// task2.addEventListener("mousedown", (e) => {
//     let btn = e.button == 0? 'left' : e.button == 2 ? 'right' : '';
//     alert(`Clicked with the *${btn}* mouse button`);
// })


// 3
// let task3 = document.getElementById('task3');
// task3.style.width = '500px';
// let btn = document.getElementById('button');
// btn.style.width = '80px';
// btn.style.height = '20px';
// let p = document.querySelector('#task3 p');

// btn.addEventListener('click', () => {
//     p.style.display = btn.innerText == 'Hide' ? 'none' : 'block';
//     p.innerText = btn.innerText == 'Hide' ? p.textContent : p.textContent;
//     btn.innerText = btn.innerText == 'Hide' ? 'Show' : 'Hide';
// });


// 4
// let tabs = [
//     { id: 'html', name: 'HTML', src: 'index.html' },
//     { id: 'css', name: 'CSS', src: 'style.css' },
//     { id: 'js', name: 'JS', src: 'main.js' }
// ];

// let arr = document.getElementById('obj');
// let iframe = document.getElementById('page');

// tabs.forEach(tab => {
//     let i = document.createElement('div');
//     i.textContent = tab.name;
//     i.addEventListener('click', () => {
//         iframe.src = tab.src;
//     });
//     arr.appendChild(i);
// })


// 5
// let news = (title, content) => {
//     let task5 = document.createElement('div');
//     task5.style.padding = '15px';
//     document.body.appendChild(task5);

//     let h = document.createElement('h4');
//     h.innerText = title;
//     h.style.display = 'inline-block';
//     h.style.margin = '0';
//     task5.appendChild(h);

//     let button = document.createElement('button');
//     button.innerText = 'Remove';
//     button.style.float = 'right';
//     task5.appendChild(button);

//     let info = document.createElement('p');
//     info.style.textAlign = 'justify';
//     info.innerText = content;
//     task5.appendChild(info);

//     let hr = document.createElement('hr');
//     hr.style.margin = '25px 0 15px';
//     task5.appendChild(hr);

//     button.addEventListener('click', () => task5.remove());
// }

// news('What is Lorem Ipsum?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
// news('Why do we use it?', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).');
// news('Where does it come from?', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.');


// 6
// let task6 = document.createElement('div');
// task6.style.width = '300px';
// task6.style.textAlign = 'center';
// document.body.appendChild(task6);

// let barContainer = document.createElement('div');
// barContainer.style.border = '1px solid black';
// barContainer.style.width = '220px';
// barContainer.style.margin = '0 auto';
// task6.appendChild(barContainer);

// let progressBar = document.createElement('div');
// progressBar.style.backgroundColor = '#008A8A';
// progressBar.style.width = '0%';
// barContainer.style.height = progressBar.style.height = '25px';
// barContainer.appendChild(progressBar);

// let percentBtn = document.createElement('button');
// percentBtn.textContent = 'Add 5 percent'
// percentBtn.style.marginTop = '15px';
// task6.appendChild(percentBtn);

// percentBtn.addEventListener('click', () => {
//     let progress = parseInt(progressBar.style.width);
//     if (progress < 100) {
//         progressBar.style.width = progress + 5 + '%'; return;
//     }
//     alert('The limimt is reached !')
// })


// 7
// let cells = document.querySelectorAll('td');
// for (let i of cells) {
//     i.addEventListener('mouseover', () => { i.style.backgroundColor = '#FFA984'; })
//     i.addEventListener('mouseleave', () => { i.style.backgroundColor = '#fff'; })
// }


// 8
// let task8 = document.getElementById('task8')
// task8.addEventListener('contextmenu', (e) => { e.preventDefault(); })
// task8.addEventListener('copy', (e) => { e.preventDefault(); })


// 9
// let task9 = document.createElement('div');
// task9.style.backgroundColor = '#2F99FF';
// task9.style.width = '15%';
// task9.style.height = '40px';
// task9.style.display = 'flex';
// task9.style.alignItems = 'center';
// task9.style.fontFamily = 'segoe ui';
// task9.style.borderRadius = '10px';
// task9.style.padding = '3px';
// document.body.append(task9);

// let img = document.createElement('img');
// img.src = "https://cdn-icons-png.flaticon.com/128/126/126473.png";
// img.style.filter = 'invert(1)';
// img.style.width = img.style.height = '23px';
// img.style.marginLeft = '15px';
// task9.appendChild(img);

// let txt = document.createElement('h4');
// txt.textContent = 'Like';
// txt.style.color = '#fff';
// txt.style.margin = '0px 10px';
// task9.appendChild(txt);

// let count = document.createElement('h3');
// count.innerText = 99;
// count.style.marginLeft = '10px';
// count.style.color = '#fff';
// task9.addEventListener('click', () => { count.textContent++; })
// task9.appendChild(count);



// 10
// document.querySelectorAll('#task10 li').forEach(item => {
//     item.addEventListener('click', e => {
//         e.stopPropagation();
//         let i = item.querySelector('ul');
//         if (i.style.display == 'block') {
//             i.style.display = 'none';
//         } else {
//             document.querySelectorAll('#task10 ul').forEach(ul => ul.style.display = 'none');
//             i.style.display = 'block';
//         }
//     });
// });

// document.addEventListener('click', () => {
//     document.querySelectorAll('#task10 ul').forEach(ul => ul.style.display = 'none');
// });