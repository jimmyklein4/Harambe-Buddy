
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
      "welcome!!"
    ];
    var index = Math.floor(Math.random()*10) % 8;

    //Creating Elements
    var cincinnatiZoo = document.createElement("div");
    cincinnatiZoo.setAttribute("class", "dicks-out");
    var harambe = document.createElement("img")
    harambe.setAttribute("class", "harambe");
    harambe.style.width = "200px";
    harambe.style.height = "200px";
    harambe.style.top = "0px";
    harambe.style.position = "fixed";
    var imgURL = chrome.extension.getURL("res/" + harambeEmotions[index]);
    harambe.src = imgURL;

    var finalWords = document.createElement("p");
    finalWords.style.top = "0px";
    finalWords.style.position = "fixed";
    finalWords.style.fontFamily = "Comic Sans MS";
    finalWords.style.color = "magenta";
    finalWords.innerHTML = harambeAdvice[0];
    //Appending to DOM
    cincinnatiZoo.appendChild(harambe);
    cincinnatiZoo.appendChild(finalWords);
    document.body.appendChild(cincinnatiZoo);
