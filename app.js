var menuLinks = [
  { text: "Homes", href: "/homes" },
  {
    text: "renters",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "profiles",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "sign up ",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEl = document.querySelector("main");
mainEl.style.background = "var( --main-bg)";
mainEl.innerHTML = "<h1> Dom Manipulation</h1>";
mainEl.classList.add("flex-ctr");
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

for (let i = 0; i < menuLinks.length; i++) {
  let link = document.createElement("a");
  link.setAttribute("href", menuLinks[i].href);
  link.textContent = menuLinks[i].text;
  topMenuEl.append(link);
}

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

const topMenulinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", (event) => {
    const clickedLink = event.target;
    console.log(event.target.textContent);

    const LinkText = clickedLink.textContent.toLowerCase();
    const linkObject = menuLinks.find((link) => link.text === LinkText);

   event.preventDefault();

  
   if (clickedLink.tagName !== "A") return;

  if (clickedLink.classList.contains("active")) {
    clickedLink.classList.remove("active");
    subMenuEl.style.top = "0";
  } else {
    document
      .querySelectorAll("#top-menu a")
      .forEach((a) => a.classList.remove("active"));
    clickedLink.classList.add("active");
    if (linkObject.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubmenu(linkObject.subLinks);
    } else {
      subMenuEl.style.top = "0";
    }
  }
});

function buildSubmenu(sublinks) {
  subMenuEl.innerHTML = "";

  sublinks.forEach((link) => {
    const aElement = document.createElement("a");
    aElement.href = link.ref;
    aElement.textContent = link.text;
    subMenuEl.appendChild(aElement);
  });
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.targetName !== "A") return;

  console.log("submenu link clicked", event.target.textContent);
});