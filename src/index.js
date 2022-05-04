import './style.css';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
const mainPage = (() => {
    //tab object 
    const tabObject = {
        home: homePage(),
        menu: menuPage(),
        contact: contactPage()
    };
    //content div
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "content");

    //tab div
    const tabDiv = document.createElement("div");
    tabDiv.setAttribute("id", "tab");

    //home tab
    const homeTab = document.createElement("div");
    homeTab.classList.add("tab");
    homeTab.textContent = "Home";

    //menu tab
    const menuTab = document.createElement("div");
    menuTab.classList.add("tab");
    menuTab.textContent = "Menu";

    //contact tab
    const contactTab = document.createElement("div");
    contactTab.classList.add("tab");
    contactTab.textContent = "Contact";
    
    document.body.appendChild(contentDiv);
        contentDiv.appendChild(tabDiv);
            tabDiv.appendChild(homeTab);
            tabDiv.appendChild(menuTab);
            tabDiv.appendChild(contactTab);
        contentDiv.appendChild(tabObject.home);

    //navigation listeners
    document.querySelectorAll(".tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            contentDiv.removeChild(contentDiv.lastChild);
            contentDiv.appendChild(tabObject[tab.textContent.toLowerCase()]);
        });
    });
})();
