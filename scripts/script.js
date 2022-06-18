const form = document.querySelector(".form");
const sendButton = form.querySelector(".form__button");
const pageWidth = document.documentElement.scrollWidth;
const { log } = console;
const mobileWidth = 767;


form.addEventListener("submit", (evt) => {
	evt.preventDefault();
	//log(typeof pageWidth);
	pageWidth > mobileWidth ? sendButton.textContent = "Круто, спасибо за доверие!" : sendButton.textContent = "✌️";
	//form.reset();

});

