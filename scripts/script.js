const optionsButton = document.getElementById("options");

optionsButton.addEventListener("click", () => {
    const optionsContainer = document.getElementById('optionsContainer');

    if (optionsButton.classList.contains("opacity-50")) {
        optionsButton.classList.remove("opacity-50");
        optionsButton.classList.add("opacity-75");
        optionsContainer.classList.remove("d-none");
    } else {
        optionsButton.classList.add("opacity-50");
        optionsButton.classList.remove("opacity-75");
        optionsContainer.classList.add("d-none");
    }
})