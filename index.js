const button=document.querySelector('.input-cotainer button');
const list=document.querySelector('.todolist');
const input=document.querySelector('.input-cotainer input');
button.addEventListener("click", () => {
	const li=document.createElement('li');
	li.className= 'todolist-item'
	const deletebutton=document.createElement('button');
	li.innerText = input.value;
	list.appendChild(li);
	li.appendChild(deletebutton);
	deletebutton.innerText= 'Delite';
	input.value ='';

	deletebutton.addEventListener('click',() => {
		list.removeChild(li)
	} )
});