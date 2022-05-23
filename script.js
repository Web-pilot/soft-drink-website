const toggleBtn = document.querySelector(".btn-toggle").addEventListener("click", () => {
    const listItem = document.querySelector(".list-item-container")
    listItem.classList.toggle("hide-and-show")
})