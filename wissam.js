// grid js
const projectCard = document.querySelectorAll(".project-card")
projectCard.forEach(cardLoop => {
    cardLoop.addEventListener("click", () => {
        const expanded = cardLoop.getAttribute('aria-expanded')

        if (expanded === "false") {
            cardLoop.setAttribute("aria-expanded", true)

            // making the other cards disapear
            projectCard.forEach(element => {
                const otherExpansion = element.getAttribute('aria-expanded')
                if (otherExpansion === "false") {
                    element.classList.add("none-card")
                }
            });
        } else if (expanded === "true") {
            cardLoop.setAttribute("aria-expanded", false)
            
            // making the other cards reappear
            projectCard.forEach(element => {
                const otherExpansion = element.getAttribute('aria-expanded')
                if (otherExpansion === "false") {
                    element.classList.remove("none-card")
                }
            });
        };
    })
});
