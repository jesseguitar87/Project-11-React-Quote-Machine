class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '"Fall seven times and stand up eight."',
      author: "- Japanese Proverb"
    };
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
    let quotes = [
        '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        '"The way to get started is to quit talking and begin doing."',
        '"You will face many defeats in life, but never let yourself be defeated."',
        '"If life were predictable it would cease to be life, and be without flavor."',
        "\"In the end, it's not the years in your life that count. It's the life in your years.\"",
        "\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\"",
        '"Life is what happens when you\'re busy making other plans."',
        '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
        '"When you reach the end of your rope, tie a knot in it and hang on."',
        '"Always remember that you are absolutely unique. Just like everyone else."'
      ],
      authors = [
        "- Nelson Mandela",
        "- Walt Disney",
        "- Maya Angelou",
        "- Eleanor Roosevelt",
        "- Abraham Lincoln",
        "- James Cameron",
        "- John Lennon",
        "- Mother Teresa",
        "- Franklin D. Roosevelt",
        "- Margaret Mead"
      ],
      num = Math.floor(Math.random() * 10);
    let newQuote = quotes[num],
      newAuthor = authors[num];
    this.setState({
      quote: newQuote,
      author: newAuthor
    });
  }
  render() {
    return (
      <div>
        <div class="container" id="quote-machine">
          <wrapper id="quote-box">
            <h3 id="text">{this.state.quote}</h3>
            <p id="author">{this.state.author}</p>
            <a href="twitter.com/intent/tweet" id="tweet-quote">
              <i class="fa fa-twitter" id="tweet"></i>
            </a>
            <a href="twitter.com/intent/tweet" id="tumblr-quote">
              <i class="fa fa-tumblr" id="tumblr"></i>
            </a>
            <button onClick={this.newQuote} id="new-quote">
              New quote
            </button>
          </wrapper>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Machine />, document.getElementById("app"));
