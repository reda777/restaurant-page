function homePage() {
    //home div--parent
    const home = document.createElement("div");
    home.classList.add("home");

    //headline
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "La Cane Pastry";
    
    //content div--2ndparent
    const homeContent = document.createElement("div");
    homeContent.classList.add("homeContent");
    //about--title
    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("aboutTitle");
    aboutTitle.textContent="About us";


    //about--text
    const aboutText = document.createElement("div");
    aboutText.classList.add("aboutText");
    aboutText.textContent = `*********** is the story of the ***** family, and it is based on love and collaboration within the family.
    The restaurant is a gourmet's dream come true.
    Its origins may be traced back to the year ****, when ******** ***** returned to ******* after 5 years abroad and obtained great knowledge.
    *** Restaurant was the first ******* restaurant to be named to the World's 50 Best Restaurants, thanks to its chef ***********. `;

    //location--title
    const locationTitle = document.createElement("div");
    locationTitle.classList.add("locationTitle");
    locationTitle.textContent="Location";
    
    //location--text
    const locationText = document.createElement("div");
    locationText.classList.add("locationText");
    locationText.textContent = `123 Lake Drive, Lakeville, Amongus`;
    
    //hours--title
    const hoursTitle = document.createElement("div");
    hoursTitle.classList.add("hoursTitle");
    hoursTitle.textContent="Hours";


    //hours--text
    const hoursText = document.createElement("div");
    hoursText.classList.add("hoursText");
    hoursText.textContent = `
    Sunday: 8am - 8pm\r\n
    Monday: 6am - 6pm\r\n
    Tuesday: 6am - 6pm\r\n
    Wednesday: 6am - 6pm\r\n
    Thursday: 6am - 10pm\r\n
    Friday: 6am - 10pm\r\n
    Saturday: 8am - 10pm`;
    
    //background--3rd child
    const backgroundImage=document.createElement("div");
    backgroundImage.classList.add("backgroundImage");

    home.appendChild(headline);
    home.appendChild(homeContent);
    homeContent.appendChild(aboutTitle);
    homeContent.appendChild(aboutText);
    homeContent.appendChild(hoursTitle);
    homeContent.appendChild(hoursText);
    homeContent.appendChild(locationTitle);
    homeContent.appendChild(locationText);
    home.appendChild(backgroundImage);
  
    return home;
}
export default homePage;