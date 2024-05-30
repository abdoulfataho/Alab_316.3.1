// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  const mainEl = document.querySelector("main");
  // console.log(mainEl);
  mainEl.style.backgroundColor = "var(--main-bg)";
  const header = document.createElement("h1");
  header.innerHTML = "DOM MANIPULATION";
  mainEl.append(header);
  mainEl.classList.add("flex-ctr");
  const topMenuEl = document.querySelector("#top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  
  for(let i =0;i<menuLinks.length;i++){
    let link = document.createElement("a")
    link.setAttribute("href", menuLinks[i].href)
    link.textContent = menuLinks[i].text;
    topMenuEl.append(link)
  }
  
  // Alab 316.3.1.
  
  const subMenuEl = document.querySelector("#sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  // select all "a"element using queryselectorAll
  const topMenuLinks = document.querySelectorAll("a");
  console.log(topMenuLinks)
  topMenuEl.addEventListener("click", (event) => {
    console.log(event.target.localName)
   const clickedElement = event.target;
  //  make the clicked element active
   clickedElement.classList.toggle('active')
  //  let's writte a loop that remove the active property on the unclicked element.
   topMenuLinks.forEach((aElement)=>{
    if (aElement !== clickedElement){
      aElement.classList.remove('active');
    }
   });
   if(clickedElement.classList.contains("active")){
  
    const linktext = clickedElement.textContent.toLowerCase();
  
   }
   
  })