// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCard(obj) {
  const mainCard = document.createElement("div");
  const headlineCard = document.createElement("div");
  const authorCard = document.createElement("div");
  const imageCard = document.createElement("div");
  const authorImage = document.createElement("img");
  const authorName = document.createElement("span");

  //appending elements

  mainCard.append(headlineCard);
  mainCard.append(authorCard);
  authorCard.append(imageCard);
  authorCard.append(imageCard);
  imageCard.append(authorImage);
  authorCard.append(authorName);

  //adding classes
  mainCard.classList.add("card");
  headlineCard.classList.add("headline");
  authorCard.classList.add("author");
  imageCard.classList.add("img-container");

  //text content
  headlineCard.textContent = `${obj.headline}`;
  authorImage.setAttribute("src", `${obj.authorPhoto}`);
  authorName.textContent = `By ${obj.authorName}`;

  return mainCard;
}

const articleContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
  let obj = res.data.articles; //storing the object in the variable
  console.log(obj);
  let solution = Object.values(obj); // storing the obj into array like variable
  solution.map(item => {
    //looping over the array
    item.forEach(el => {
      //looping over the array items
      console.log(el);
      articleContainer.append(articleCard(el));
    });
  });
});
