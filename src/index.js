const messages = [
    "Oscar",
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "Carolina",
    "Paulina"
]

const randomName = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
}

// randomName();

module.exports = {
    randomName
}