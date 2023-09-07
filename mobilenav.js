const mobileNav = document.getElementById("mobile-size");
  const navbarToggler = document.getElementById("navbartoggler");
  const closeButton = document.getElementById("close-button");
  const links = [
      {
          button: document.getElementById("serieslink"),
          content: document.getElementById("seriesHyperlink"),
          arrow: document.getElementById("seriesarrow"),
      },
      {
          button: document.getElementById("speakerslink"),
          content: document.getElementById("speakersHyperlink"),
          arrow: document.getElementById("speakerarrow"),
      },
      {
          button: document.getElementById("supportlink"),
          content: document.getElementById("supporthyperlink"),
          arrow: document.getElementById("supportarrow"),
      },
  ];

  navbarToggler.addEventListener("click", () => {
      mobileNav.classList.remove("d-none");
  });

  closeButton.addEventListener("click", () => {
      mobileNav.classList.add("d-none");  
  });

  links.forEach(link => {
      let value = false;
      link.button.addEventListener("click", () => {
          if (value) {
              link.content.classList.add("d-none");
              link.arrow.classList.remove("fa-rotate-180");
              link.arrow.classList.add("fa-rotate-90");
          } else {
              link.content.classList.remove("d-none");
              link.arrow.classList.remove("fa-rotate-90");
              link.arrow.classList.add("fa-rotate-180");
          }
          value = !value;
      });
  });
