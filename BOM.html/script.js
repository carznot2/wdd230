const btn = document.querySelector('.btn');
console.log(btn);
const ul = document.querySelector('#list');

btn.addEventListener('click', () => {
    const value = document.querySelector('#favchap').value;
    console.log(value);
    const list = document.createElement('li');
    list.innerHTML = value;
    console.log(list);
    ul.appendChild(list);
    console.log(ul);
})