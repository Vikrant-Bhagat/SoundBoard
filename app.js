document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const audio = new Audio(`soundboards/${button.id}.mp3`);
        audio.play();
    });
});


