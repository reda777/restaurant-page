import './style.css';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
//tab object 
const tabObject = {
    home: homePage(),
    menu : menuPage(),
    contact : contactPage()
};
//content div
const contentDiv=document.createElement("div");
contentDiv.setAttribute("id","content");
document.body.appendChild(contentDiv);

//home tab
const homeTab=document.createElement("div");
homeTab.classList.add("tab");
homeTab.textContent="Home";
document.body.appendChild(homeTab);

//menu tab
const menuTab=document.createElement("div");
menuTab.classList.add("tab");
menuTab.textContent="Menu";
document.body.appendChild(menuTab);

//contact tab
const contactTab=document.createElement("div");
contactTab.classList.add("tab");
contactTab.textContent="Contact";
document.body.appendChild(contactTab);

//navigation listeners
document.querySelectorAll(".tab").forEach((tab)=>{
    tab.addEventListener("click",()=>{
        contentDiv.removeChild(contentDiv.firstChild);
        contentDiv.appendChild(tabObject[tab.textContent.toLowerCase()]);
    });
});
contentDiv.appendChild(tabObject.home);