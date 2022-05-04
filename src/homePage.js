function homePage() {
    //home div--parent
    const home = document.createElement("div");
    home.classList.add("home");
    //headline--1st child
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "The Great Restaurant";
    
   //about--2nd child
    const about = document.createElement("div");
    about.classList.add("about");
    about.textContent = `*********** is the story of the ***** family, and it is based on love and collaboration within the family.
    The restaurant is a gourmet's dream come true.
    Its origins may be traced back to the year ****, when ******** ***** returned to ******* after 5 years abroad and obtained great knowledge.
    *** Restaurant was the first ******* restaurant to be named to the World's 50 Best Restaurants, thanks to its chef ***********. `;
    
    //background--3rd child
    const backgroundImage=document.createElement("div");
    backgroundImage.classList.add("backgroundImage");

    home.appendChild(headline);
    home.appendChild(about);
    home.appendChild(backgroundImage);
  
    return home;
}
export default homePage;