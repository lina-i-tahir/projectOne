document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "num0",
      img: "../images/num0.png",
    },
    {
      name: "num1",
      img: "../images/num1.png",
    },
    {
      name: "num2",
      img: "../images/num2.png",
    },
    {
      name: "num3",
      img: "../images/num3.png",
    },
    {
      name: "num4",
      img: "../images/num4.png",
    },
    {
      name: "num5",
      img: "../images/num5.png",
    },
    {
      name: "num0",
      img: "images/num0.png",
    },
    {
      name: "num1",
      img: "images/num1.png",
    },
    {
      name: "num2",
      img: "images/num2.png",
    },
    {
      name: "num3",
      img: "images/num3.png",
    },
    {
      name: "num4",
      img: "images/num4.png",
    },
    {
      name: "num5",
      img: "images/num5.png",
    },
    // Possibility to add more cards in the future
    //   {
    //     name: "num6",
    //     img: "images/num6.png",
    //   },
    //   {
    //     name: "num7",
    //     img: "images/num7.png",
    //   },
    //   {
    //     name: "num8",
    //     img: "images/num8.png",
    //   },
    //   {
    //     name: "num9",
    //     img: "images/num9.png",
    //   },
    //   {
    //     name: "Q1",
    //     img: "images/Q1.png",
    //   },
    //   {
    //     name: "Q2",
    //     img: "images/Q2.png",
    //   },
    //   {
    //     name: "num6",
    //     img: "images/num6.png",
    //   },
    //   {
    //     name: "num7",
    //     img: "images/num7.png",
    //   },
    //   {
    //     name: "num8",
    //     img: "images/num8.png",
    //   },
    //   {
    //     name: "num9",
    //     img: "images/num9.png",
    //   },
    //   {
    //     name: "Q1",
    //     img: "images/Q1.png",
    //   },
    //   {
    //     name: "Q2",
    //     img: "images/Q2.png",
    //   },
  ];
  // Intro pop up (popupContainer)
  const popupIntro = document.getElementById("popupContainer");
  const closeButton = document.getElementById("closeButton");

  window.onload = function () {
    setTimeout(function () {
      popupIntro.style.display = "block";
    }, 500);
  };

  closeButton.addEventListener("click", () => {
    popupIntro.style.display = "none";
  });

  // shuffle, random array using sort
  cardArray.sort(() => 0.5 - Math.random());

  // initialising gridBox
  const gridBox = document.getElementById("grid");
  // intialising with result ID
  const result = document.getElementById("result");
  // array for chosen card to be pushed to
  let chosenCard = [];
  // array for chosenCard id to be pushed to
  let chosenCardIds = [];
  // array of winning matches
  const cardsWon = [];

  // using forEach to create a loop
  const createGrid = () => {
    cardArray.forEach((i, index) => {
      if (index < cardArray.length) {
        // create img element for every card, store in card
        const card = document.createElement("img");
        // set source attribute to every card
        card.setAttribute("src", "../images/blank.png");
        card.setAttribute("data-id", index);
        // add event listener with callback
        card.addEventListener("click", flipCard);

        // append grid with card(show image)
        grid.appendChild(card);
      }
    });
  };
  // call back funct
  createGrid();

  // check for match func
  function checkCard() {
    // initialising cards
    const cards = document.querySelectorAll("#grid img");
    // create variable for chosen cards IDs
    const firstCardId = chosenCardIds[0];
    const secondCardId = chosenCardIds[1];
    console.log(cards);
    console.log("Matched?");

    // check if first card match second card
    if (chosenCard[0] == chosenCard[1]) {
      alert("Matched made!");
      // set blank_ png if a match
      cards[firstCardId].setAttribute("src", "../images/blank_.png");
      cards[secondCardId].setAttribute("src", "../images/blank_.png");
      // stop click event listener on card if already matched
      cards[firstCardId].removeEventListener("click", flipCard);
      cards[secondCardId].removeEventListener("click", flipCard);

      // record how many matches made
      cardsWon.push(chosenCard);
    } else {
      cards[firstCardId].setAttribute("src", "../images/blank.png");
      cards[secondCardId].setAttribute("src", "../images/blank.png");
      alert("Try again!");
    }

    // restart
    result.textContent = cardsWon.length;
    chosenCard = [];
    chosenCardIds = [];

    if (cardsWon.length == cardArray.length / 2) {
      result.textContent = "Congrats! You found them all!";
    }
  }
  // flip card func
  function flipCard() {
    // after shuffle, show array
    // console.log(cardArray);
    // store data id into cardId when clicked
    const cardId = this.getAttribute("data-id");
    // .push name of card into chosenCard array
    chosenCard.push(cardArray[cardId].name);
    // .push data id into chosenCardIds array
    chosenCardIds.push(cardId);
    console.log(chosenCard);
    console.log(chosenCardIds);
    // log "clicked", data Id
    // console.log("clicked", cardId);
    // console.log(chosenCard);
    // add src to card, to show image
    this.setAttribute("src", cardArray[cardId].img);
    // if clicked card is 2, wait 500ms then checkCard
    if (chosenCard.length === 2) {
      setTimeout(checkCard, 500);
    }
  }

  // cant use arrow function?
  // const flipCard = (cardId) => {
  //   this.getAttribute("data-id");
  //   console.log("clicked", cardId);
  // };
});