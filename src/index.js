import './style.css';
const contentDiv=document.createElement("div");
contentDiv.setAttribute("id","content");
document.body.appendChild(contentDiv);
const backgroundImage=document.createElement("div");
backgroundImage.classList.add("backgroundImage");
contentDiv.appendChild(backgroundImage);
const headline=document.createElement("div");
headline.classList.add("headline");
headline.textContent="The Great Restaurant",
backgroundImage.appendChild(headline);
const about=document.createElement("div");
about.classList.add("about");
about.textContent=`*********** is the story of the ***** family and is built on family love and cooperation.
The restaurant is a real gourmet's paradise. Its beginnings can be traced back to the year
**** when ******** *****, having gained invaluable experience abroad, returned home to *******
after 5 years. *** Restaurant with its chef *********** was the first ******* restaurant to
make the World's 50 Best Restaurants.`;
backgroundImage.appendChild(about);