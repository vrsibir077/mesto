const aboutButtonElement = document.querySelector('.profile__about');
const closeButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');

function handleClick(e) {
	popupElement.classList.toggle('popup__opened');
}

aboutButtonElement.addEventListener('click', handleClick);
closeButtonElement.addEventListener('click', handleClick);

popupElement.addEventListener('click', (e) => {
	if (e.target === e.currentTarget) {
		popupElement.classList.toggle('popup__opened');
	}
});
let formElement = document.querySelector('.popup__button');


const popupButtonElement = document.querySelector('.popup__button');
console.log(popupButtonElement);
document.querySelector('.popup__button').onclick = clickPopupButton;

function clickPopupButton(evt) {
	evt.preventDefault();
	//получаем два inputa
	let nameInput = document.querySelector('.popup__input_name').value;
	let jobInput = document.querySelector('.popup__input_job').value;

	//получаем объект Куда будут вноситься изменения
	document.querySelector('.profile__title').textContent = nameInput;
	document.querySelector('.profile__subtitle').textContent = jobInput;
}
formElement.addEventListener('submit', clickPopupButton);

formElement.addEventListener('click', handleClick);