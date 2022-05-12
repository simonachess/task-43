import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  function changeTitle(){
	  document.querySelector("title").innerHTML = "One new message"
  }
 
  setTimeout(changeTitle, 3000);

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
