
    var harambeEmotions = [
      'harambe-angry.png',
      'harambe-transparent.png',
      'harambe2-transparent.png',
      'harambe3-transparent.png'
    ];
    var index = Math.floor(Math.random()*10) % 4;
    //Creating Elements
    var harambe = document.createElement("img")
    harambe.setAttribute("class", "dicks-out");
    harambe.style.width = "200px";
    harambe.style.height = "200px";
    harambe.style.top = "0px";
    harambe.style.position = "fixed";
    var imgURL = chrome.extension.getURL("res/" + harambeEmotions[index]);
    console.log(imgURL);
    harambe.src = imgURL;

    //Appending to DOM
    document.body.appendChild(harambe);
