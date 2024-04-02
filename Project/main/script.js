let card_btn_elements = document.querySelectorAll(".card-btn");
let card_elements = document.querySelectorAll(".cards");
/**/

/*Добавяне на ефект - бутони*/
card_btn_elements.forEach((btn) => {
	btn.addEventListener("mouseover", () => {
		document.querySelector(".hovered_btn")?.classList.remove("hovered");
		btn.classList.add("hovered_btn");
	});
});
/*Премахване на ефект - карти*/
card_btn_elements.forEach((btn) => {
	btn.addEventListener("mouseout", () => {
		btn.classList.remove("hovered_btn");
	});
});

/*Добавяне на ефект - карти*/
card_elements.forEach((card) => {
	card.addEventListener("mouseover", () => {
		document.querySelector(".hovered_card")?.classList.remove("hovered");
		card.classList.add("hovered_card");
	});
});
card_elements.forEach((card) => {
	card.addEventListener("mouseout", () => {
		card.classList.remove("hovered_card");
	});
});
