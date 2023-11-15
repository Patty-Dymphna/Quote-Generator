const QuoteText = document.querySelector(".quote");
let Authorname = document.querySelector(".author .name");
let QuoteBtn = document.querySelector("button");
let SoundBtn = document.querySelector(".sound");
let CopyBtn = document.querySelector(".copy");
let Twitter = document.querySelector(".twitter");


function GeneratorQuote(){
    QuoteBtn.classList.add("Loading......");
    QuoteBtn.innerText = "Loading Quote......"
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        QuoteText.innerText = result.content;
        Authorname.innerText = result.author;
        QuoteBtn.innerText = "New Quote";
        QuoteBtn.classList.remove("Loading.....");
    });
};

SoundBtn.addEventListener("click", ()=>{
    let utterance = new  SpeechSynthesisUtterance(`${QuoteText.innerText} by ${Authorname.innerText}`);
    speechSynthesis.speak(utterance);
});


CopyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(QuoteText.innerText);
});

Twitter.addEventListener("click", ()=>{
    let TweetURL = `https://twitter.com/intent/tweet?url=${QuoteText.innerText}`;
    window.open(TweetURL, "_blank");
})


QuoteBtn.addEventListener("click", GeneratorQuote);
