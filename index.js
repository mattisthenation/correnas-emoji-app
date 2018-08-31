const emoji = process.argv[2];
const emojiSet = {
    crown: "👑",
    girl: "👩",
    boy: "👨🏼‍🎤",
    crazyGirl: "👩‍🎤",
    family: "👩‍👩‍👧‍👧",
    unicorn: "🦄",
    butterfly: "🦋"
}

console.log(emojiSet[emoji]);