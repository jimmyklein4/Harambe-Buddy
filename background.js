
    var harambeEmotions = [
      'harambe-amazed.png',
      'harambe-angry.png',
      'harambe-contemplative.png',
      'harambe-sleepy.png',
      'harambe-transparent.png',
      'harambe-why.png',
      'harambe2-transparent.png',
      'harambe3-transparent.png'
    ];

    var harambeAdvice = [
      "welcome!!",
      "you can judge a man's true character by the way he treats his fellow animal",
      "Trust is like a paper. Once it's crumbled it can't be perfect again...",
      "Not sure why they killed me. I was doing a better job of watching that kid than she was...",
      "When you do every right, people will think you did nothing at all.",
      "Heroes get remembered but legends never dies",
      "They didn't understand me and they had to kill me.... And I am labelled the animal.",
      "fffff"
    ];
    var index = Math.floor(Math.random()*10) % 8;
    var randomThought = Math.floor(Math.random()*10) % 8;
    //Creating Elements
    var cincinnatiZoo = document.createElement("div");
    cincinnatiZoo.setAttribute("class", "dicks-out");
    cincinnatiZoo.style.width = "200px";
    cincinnatiZoo.style.height = "200px";
    cincinnatiZoo.style.top = "-webkit-calc(100% - 200px)";
    cincinnatiZoo.style.left = "-webkit-calc(100% - 200px)";
    cincinnatiZoo.style.position = "fixed";

    var harambe = document.createElement("img")
    harambe.setAttribute("class", "harambe");
    harambe.style.width = "200px";
    harambe.style.height = "200px";
    var imgURL = chrome.extension.getURL("res/" + harambeEmotions[index]);
    harambe.src = imgURL;

    var finalWords = document.createElement("p");
    finalWords.style.fontFamily = "Comic Sans MS";
    finalWords.style.color = "magenta";
    finalWords.innerHTML = harambeAdvice[index];
    //Appending to DOM
    cincinnatiZoo.appendChild(finalWords);
    cincinnatiZoo.appendChild(harambe);
    document.body.appendChild(cincinnatiZoo);
