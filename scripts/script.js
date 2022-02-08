const form = document.querySelector(".form");
const sendButton = form.querySelector(".form__button");

form.addEventListener("submit", (evt) => {
	evt.preventDefault();
	sendButton.textContent = "Круто, спасибо за доверие!";
	form.reset();

	
});

