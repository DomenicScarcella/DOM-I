const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let hOne = document.querySelector("h1");
hOne.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let navText = document.querySelectorAll("nav a");
navText[0].textContent = siteContent["nav"]["nav-item-1"];
navText[1].textContent = siteContent["nav"]["nav-item-2"];
navText[2].textContent = siteContent["nav"]["nav-item-3"];
navText[3].textContent = siteContent["nav"]["nav-item-4"];
navText[4].textContent = siteContent["nav"]["nav-item-5"];
navText[5].textContent = siteContent["nav"]["nav-item-6"];

let navBlog = document.createElement("a")
navBlog.textContent = "Blog"
navBlog.href = "#"
document.querySelector("nav").appendChild(navBlog);
navBlog.style.color = "green";

let navHome = document.createElement("a")
navHome.textContent = "Home"
navHome.href = "#"
document.querySelector("nav").prepend(navHome);
navHome.style.color = "green";

navText.forEach((colorG) => (colorG.style.color = "green"));



let mainH = document.querySelectorAll("h4");
mainH[0].textContent = siteContent["main-content"]["features-h4"];
mainH[1].textContent = siteContent["main-content"]["about-h4"];
mainH[2].textContent = siteContent["main-content"]["services-h4"];
mainH[3].textContent = siteContent["main-content"]["product-h4"];
mainH[4].textContent = siteContent["main-content"]["vision-h4"];

let mainP = document.querySelectorAll(".main-content p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];



let contactH = document.querySelector(".contact h4");
contactH.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];



let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];