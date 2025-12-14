const messages = [
    "Every act of kindness creates a ripple with no logical end.",
    "Volunteers don’t get paid, not because they’re worthless, but because they’re priceless.",
    "Helping one person might not change the whole world, but it could change the world for one person.",
    "Together, we build a caring and supportive community.",
    "A small act of help can bring a huge smile to someone’s face."
];

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

window.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.dynamic-content');
    if (section) {
        section.querySelector('h2').textContent = "Inspiration of the Day";
        section.querySelector('p').textContent = getRandomMessage();
    }
});
