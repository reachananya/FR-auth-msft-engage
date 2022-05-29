const navLinks = document.getElementById("nav-links");
const sections = document.querySelectorAll(".section");



activeLinks = [];
links = [
  {
    title: "Home",
    order: 1
  },
  {
    title: "History",
    order: 2
  },
  {
    title: "Gallery",
    order: 3
  },
  {
    title: "Contact Us",
    order: 4
  }
];

const selectActiveLink = () => {
  if (activeLinks.length > 1) {
    // if multiple link is active, selecting the lowest ordered link
    activeLinks.sort((a, b) => {
      console.log(`comparing ${a.title} and ${b.title}`);
      
      if (a.order > b.order) {
        console.log(`swaping ${a.title} <-> ${b.title}`);
        return 1;
      }
      else if (a.order < b.order) {
        console.log(`swaping ${a.title} <-> ${b.title}`);
        return -1;
      }
      
      return 0;
    });
  }

  const linkText = activeLinks[0]?.title;
  console.log(activeLinks);
  for (let i = 0; i < navLinks.children.length; i++) {
    const link = navLinks.children[i].firstChild;
    if (link.textContent === linkText) link.classList.add("active");
    else link.classList.remove("active");
  }
};

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const link = links.find((obj) => obj.title === entry.target.children[0].textContent);
      activeLinks.push(link);
    } else {
      activeLinks = activeLinks.filter((obj) => {
        return obj.title !== entry.target.children[0].textContent;
      });
    }

    selectActiveLink();
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

const themeSelector = () => {
  const selector = document.getElementById("theme-selector");
  const theme = selector.options[selector.selectedIndex].value;
  document.documentElement.setAttribute("data-theme", theme.toLowerCase());
};
