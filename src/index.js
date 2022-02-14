const messages = [
    "Oscar",
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "Carolina",
    "Paulina"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
}

// randomMsg();

module.exports = {
    randomMsg
}