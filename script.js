const yes = document.getElementById("yes");
const no = document.getElementById("no");
const emoji = document.getElementById("emoji");
const msg = document.getElementById("msg");

let count = 0;

/* Mood stages */
const moods = [
    { emoji: "😟", text: "Oh… really? 😔" },
    { emoji: "😢", text: "That hurts a little… 💔" },
    { emoji: "😭", text: "Why are you doing this… 😭" },
    { emoji: "🥺💔", text: "Please… I like you so much… 🥺" },
    { emoji: "🫠❤️", text: "I’ll wait for you forever… 😞💘" }
];

/* Floating Hearts */
function createHeart() {

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 500);

/* NO Click */
no.onclick = () => {

    emoji.classList.add("shake");

    setTimeout(() => {
        emoji.classList.remove("shake");
    }, 400);

    if (count < moods.length) {

        emoji.textContent = moods[count].emoji;
        msg.textContent = moods[count].text;

        count++;

        if (count === 5) {

            setTimeout(() => {
                no.style.display = "none";
                msg.textContent = "No more NO 😏💖 Only YES now...";
                emoji.textContent = "🥹👉👈";
            }, 600);

        }
    }
};

/* YES Click */
yes.onclick = () => {

    emoji.textContent = "😍💖💍";
    msg.textContent = "Yay!!! You made me the happiest 😘💕";

    yes.classList.add("celebrate");
};
