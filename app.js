
const form = document.querySelector('#form');

const input = document.querySelector('#input');

const uList = document.querySelector('.ulist');

form.onsubmit = () => {

    const li = document.createElement('li');
    li.innerHTML = input.value;

    li.style.listStyle = "none";

    uList.appendChild(li);

    input.value = '';

    return false;

}