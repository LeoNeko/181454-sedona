 var link = document.querySelector(".trip-screen button");
 var popup = document.querySelector(".popup-form");

 link.addEventListener("click", function (evt) {
 	evt.preventDefault();
 	popup.classList.toggle("popup-form-hidden");
	popup.classList.toggle("popup-form");
 });
