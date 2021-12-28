console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 5  ┃
┗━━━━━━━━━━━━━━┛

1. Add a header with a menu-button
- Add a sidebar with a list of links
- Add a main section with a headline.
- THe headline should read "Hello User"

2. Add a CSS file to this folder and link it from your HTML
- Add a simple page styling with a static sidebar
- Make sure you can see the different sections (i.e. use green, blue, orange)
- Use 'display: grid' or 'display flex' for the layout 

A: Sidebar closed (default)
┏━━━━━━━━━━━━━━┓
┃    HEADER    ┃
┣━━━━━━━━━━━━━━┫
┃     MAIN     ┃
┃              ┃
┗━━━━━━━━━━━━━━┛

B: Sidebar open (toggle menu)
┏━━━┳━━━━━━━━━━┓
┃ S ┃  HEADER  ┃
┃ I ┣━━━━━━━━━━┫
┃ D ┃   MAIN   ┃
┃ E ┃          ┃
┗━━━┻━━━━━━━━━━┛

3. Toggle the sidebar when the button is clicked
- Store the toggle state in the browsers localStorage

- Add 'data-test-id="menu-button"' to the menu-button
- Add 'data-test-id="sidebar"' to the sidebar

Make sure that you implement the following features:

- .cypress/behaviors/features/ToggleSidebar.feature
- .cypress/behaviors/features/KeepSidebarState.feature

Run the tests via 'npm run cypress:open'
All tests should pass

`);

// Get the root element
const root = document.querySelector("#root");

// Create wrapping elements
const header = document.createElement("header");
const sidebar = document.createElement("aside");
const main = document.createElement("main");

//Create inner elements
const menuButton = document.createElement("button");
const linkList = document.createElement("nav");

// Set test id´s
sidebar.setAttribute("data-test-id", "sidebar");
menuButton.setAttribute("data-test-id", "menu-button");

// Initial local storage check
const wasOpen = window.localStorage.getItem("sidebar") === "open";

if (wasOpen) {
  document.documentElement.classList.toggle("sidebar--active");
}

// Append elements
root.append(header, main, sidebar);
header.append(menuButton);
sidebar.append(linkList);

// Store Links

const linkStore = {
  github: "https://github.com/doemser",
  codepen: "https://codepen.io/doemser",
  linkedin: "https://www.linkedin.com/in/dominik-hautau-152877223/",
  instagram: "https://instagram.com/doemser",
};

const { github, codepen, linkedin, instagram } = linkStore;

// Fill HTML

menuButton.innerHTML = `
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,7A5,5 0 0,1 17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
</svg>
`;

main.innerHTML = `
    <h1>Hallo Du da <span>!</span></h1>
`;

linkList.innerHTML = `
    <a href=${github} target="_blank">GitHub</a>
    <a href=${codepen} target="_blank">codepen</a>
    <a href=${linkedin} target="_blank">linkedIn</a> 
    <a href=${instagram} target="_blank">instagram</a>
`;

// Add click event

menuButton.addEventListener("click", event_ => {
  // class toggle
  document.documentElement.classList.toggle("sidebar--active");
  // save state local storage
  const isOpen = document.documentElement.classList.contains("sidebar--active");
  window.localStorage.setItem("sidebar", isOpen ? "open" : "closed");
});
