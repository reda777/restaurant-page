function menuPage(){
    const backgroundImage=document.createElement("div");
    backgroundImage.classList.add("backgroundImage");
    const headline=document.createElement("div");
    headline.classList.add("headline");
    headline.textContent="Menu",
    backgroundImage.appendChild(headline);
    const about=document.createElement("div");
    about.classList.add("about");
    about.textContent=`*********** is the story of the ***** family, and it is based on love and collaboration within the family.
    The restaurant is a gourmet's dream come true.
    Its origins may be traced back to the year ****, when ******** ***** returned to ******* after 5 years abroad and obtained great knowledge.
    *** Restaurant was the first ******* restaurant to be named to the World's 50 Best Restaurants, thanks to its chef ***********. `;
    backgroundImage.appendChild(about);
    return backgroundImage;
}
export default menuPage;