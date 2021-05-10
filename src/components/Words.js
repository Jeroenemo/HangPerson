export default async function RandomWord() {
  const url = "http://random-word-api.herokuapp.com/word?number=1";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({
    answer: data[0]
  })
}