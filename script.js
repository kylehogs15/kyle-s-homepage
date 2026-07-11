document.addEventListener("DOMContentLoaded", () => {
    const effectsLink = document.querySelector(".effects-link");

    if (effectsLink) {
        effectsLink.addEventListener("click", () => {
            effectsLink.classList.add("is-clicked");

            window.setTimeout(() => {
                effectsLink.classList.remove("is-clicked");
            }, 180);
        });
    }
});
