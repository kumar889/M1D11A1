const myInput = document.querySelector('input');
myInput.placeholder = 'Text here';

const myButton = document.querySelector('button');
myButton.innerHTML = 'Add';

const unList = document.querySelector('ul');

myButton.addEventListener('click',  () => {
    const text = document.createTextNode(myInput.value);
    const list = document.createElement('li');
    unList.appendChild(list);
    list.appendChild(text);
    document.querySelector('input').value = ' ';
    }
);