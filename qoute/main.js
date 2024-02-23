let quote = document.querySelector('.quote');
        let btn = document.querySelector('.btn');
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
  ];
  function generator(){
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random];

  };

  btn.addEventListener('click',generator);
  generator();
