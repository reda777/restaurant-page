function homePage() {
    //home div--parent
    const home = document.createElement("div");
    home.classList.add("home");

    //headline
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Contact";

    //content div--2nd parent
    const contactContent = document.createElement("div");
    contactContent.classList.add("contactContent");
    //contact--title
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("contactTitle");
    contactTitle.textContent = "Contact us";


    //contact--text
    const contactText = document.createElement("div");
    contactText.classList.add("contactText");
    contactText.textContent = `
    Phone: \r\t ***-658-68487\r\n\r\n
    Email: \r\t cane@gmail.com\r\n\r\n
    Post: \r\t Dropbox 2584 NY City\r\n\r\n
    `;

    //background--3rd child
    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("backgroundImageContact");

    home.appendChild(headline);
    home.appendChild(contactContent);
    contactContent.appendChild(contactTitle);
    contactContent.appendChild(contactText);
    home.appendChild(backgroundImage);

    return home;
}
export default homePage;