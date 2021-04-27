//api call that returns a random word

const words = [
  "excellent",
  "tubular",
  "righteous",
  "bruh",
  "awesome",
  "linux",
  "VIM",
  "zynga"
]

export default function RandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}