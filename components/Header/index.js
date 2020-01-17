// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  //creating elements
  const header = document.createElement("div");
  const headerSpan = document.createElement("span");
  const headerText = document.createElement("h1");
  const headerSpanLast = document.createElement("span");

  //adding classes
  header.classList.add("header");
  headerSpan.classList.add("date");
  headerText.classList.add("h1");
  headerSpanLast.classList.add("temp");

  //adding content
  headerSpan.textContent = "MARCH 28, 2019";
  headerText.textContent = "Lambda Times";
  headerSpanLast.textContent = "98 \u00B0";

  //appending elements
  header.append(headerSpan);
  header.append(headerText);
  header.append(headerSpanLast);

  return header;
}

const headerContainer = document.querySelector(".header-container");

headerContainer.append(Header());
