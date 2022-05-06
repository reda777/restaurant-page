function homePage() {
    //home div--parent
    const home = document.createElement("div");
    home.classList.add("home");

    //headline
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Menu";

    //content div--2nd parent
    const menuContent = document.createElement("div");
    menuContent.classList.add("menuContent");
    //menu--title
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = "The Steuben";


    //menu--text
    const menuText = document.createElement("div");
    menuText.classList.add("menuText");
    menuText.textContent = `
    massaged bison pie    $14\r\n
    farm-to-table fig extract with hazelnuts    $15\r\n
    invigorated shell bean, booze & locally-sourced ham frittata    $12\r\n
    rye pate    $16\r\n
    sea-salt artichoke bombs, chorizo & lamb    $18\r\n
    rubbed anchovy surprise    $13\r\n
    awakened orecchiette with burnt ramp    $17\r\n
    pepper    $11\r\n
    crafted fennel reduction & kale salad    $14\r\n
    quickened marrow    $14\r\n
    `;

    //background--3rd child
    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("backgroundImageMenu");

    home.appendChild(headline);
    home.appendChild(menuContent);
    menuContent.appendChild(menuTitle);
    menuContent.appendChild(menuText);
    home.appendChild(backgroundImage);

    return home;
}
export default homePage;