let card_elements = document.querySelectorAll(".cardsM");
let home_button = document.querySelector(".home-page-btn");
console.log(card_elements);
/*Добавяне на ефект - бутони*/
home_button.addEventListener("mouseover", () => {
	home_button.classList.add("hovered_btn");
});

home_button.addEventListener("mouseout", () => {
	home_button.classList.remove("hovered_btn");
});

/*Добавяне на ефект - карти*/
card_elements.forEach((card) => {
	card.addEventListener("mouseover", () => {
		document.querySelector(".hovered_card")?.classList.remove("hovered_card");
		card.classList.add("hovered_card");
	});
});
card_elements.forEach((card) => {
	card.addEventListener("mouseout", () => {
		card.classList.remove("hovered_card");
	});
});
