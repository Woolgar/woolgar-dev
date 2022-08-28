<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" />
    <link rel="stylesheet" href="https://use.typekit.net/bly4ikw.css" />
    <header class="section" id="header">
      <nav class="nav">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 93 93">
            <defs>
              <clipPath id="clip-path">
                <rect class="cls-1" width="93" height="93" />
              </clipPath>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <g id="Artwork_3" data-name="Artwork 3">
                  <g class="cls-2">
                    <g class="cls-2">
                      <circle class="cls-3" cx="46.5" cy="46.5" r="45" />
                    </g>
                    <text class="cls-4" transform="translate(28 67.82) scale(1 1.14)">

                    </text>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <ul class="nav__items">
          <li class="nav__item"><a class="current" href="#header">Home</a></li>
          <li class="nav__item"><a href="#about">About</a></li>
          <li class="nav__item"><a href="#projects">Projects</a></li>
          <li class="nav__item"><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav__toggle">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
      <section class="site__banner">
        <div class="site__banner__content">
          <div class="site__banner__content__title">
            <h1>
              Hello, I'm <span class="site__banner__h1">Tobias Faucette</span>.
            </h1>
            <h3>
              I'm a Denmark based
              <span> web developer and freelance photographer </span> <br />
              coder by day, gamer by night.
            </h3>
            <div class="social-links">
              <a href="https://github.com/Woolgar" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/tobias-faucette/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-linkedin-in"> </i>
              </a>
              <a href="https://www.instagram.com/tobiasfaucette/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-instagram"> </i>
              </a>
            </div>
            <a class="site__banner__content__btn" href="#projects">View projects</a>
          </div>
        </div>
      </section>
    </header>
    <div class="side__element">
      <ul class="side__socials">
        <li>
          <a href="https://github.com/Woolgar" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tobias-faucette/" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tobiasfaucette/" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-instagram"> </i>
          </a>
        </li>
      </ul>
    </div>

    <section class="section" id="about">
      <div class="about__row hidden">
        <div class="about__image">
          <img src="assets/images/cv.jpg" alt="" />
        </div>
        <div class="about__content">
          <h2>About me</h2>
          <p>
            Hello! My name is Tobias and I love creating & using technology.
            I've always had an interest in computers, after some time spent in
            IT support, I decided back in 2015 to get into web development and I
            have loved it ever since!
          </p>
          <p>
            Fast forward to today, I've had the privilege of working in startups
            and to help grow my brothers art business which we still improve on.
            My main focus is creating a good experience for both clients and
            users alike
          </p>
          <div class="about__row">
            <div class="about__contact">
              <h2>Contact Details</h2>
              <p class="about__address">
                <span>Tobias Faucette</span>
                <br />
                <span>9000 Aalborg, Denmark</span>
                <br />
                <span>+45 21 95 50 01</span>
                <br />
                <a class="mail-to" href="mailto:tobias@tobiasfaucette.com">tobias@tobiasfaucette.com</a>
              </p>
            </div>
            <div class="about__resume">
              <a href="assets/cv-.pdf" target="_blank" class="about__resume__btn">
                <i class="fas fa-download"></i>Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" class="">
      <div class="section__wrapper">
        <h2 class="section__heading">Things I'm building</h2>
        <ul class="featured__projectGrid">
          <li class="featured__project hidden">
            <div class="project__content">
              <div>
                <p class="project__overline">Featured Project</p>
                <h3 class="project__title">Netflix Clone</h3>
                <div class="project__description">
                  <p>
                    Clone based on Netflix ui, taking advantage of TMDB api,
                    google firebase & react. soon to feature movie/tv show
                    descriptions, actors & more. currently W.I.P
                  </p>

                </div>
                <ul class="project__tech__list">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>TMDB API</li>
                </ul>
                <div class="project__links">
                  <a href="https://github.com/Woolgar/netflix-clone" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-github">
                      <title>GitHub</title>
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                      </path>
                    </svg>
                  </a>
                  <a href="https://netflix-clone-7cad3.web.app/" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-external-link">
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project__image">
              <a href="https://netflix-clone-7cad3.web.app/" rel="noopener" target="_blank">
                <div class="project__img__wrapper">
                  <div style="max-width: 700px; display: block">
                    <img alt="" role="presentation" aria-hidden="true" src="assets/images/Netflix.png"
                      style="max-width: 100%; display: block; position: static" />
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li class="featured__project hidden">
            <div class="project__content">
              <div>
                <p class="project__overline">Featured Project</p>
                <h3 class="project__title">Covid 19 statistics</h3>
                <div class="project__description">
                  <p>
                    Covid 19 statistics tracker using the world of meters API &
                    Vanilla JS
                  </p>

                </div>
                <ul class="project__tech__list">
                  <li>JS</li>
                  <li>SCSS</li>
                  <li>API</li>
                </ul>
                <div class="project__links">
                  <a href="hhttps://github.com/Woolgar/corona-statistics" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-github">
                      <title>GitHub</title>
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                      </path>
                    </svg>
                  </a>
                  <a href="https://corona.woolgar.dk/" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-external-link">
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project__image">
              <a href="https://corona.woolgar.dk/" rel="noopener" target="_blank">
                <div class="project__img__wrapper">
                  <div style="max-width: 700px; display: block">
                    <img alt="" role="presentation" aria-hidden="true" src="assets/images/covid19.jpg"
                      style="max-width: 100%; display: block; position: static" />
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li class="featured__project hidden">
            <div class="project__content">
              <div>
                <p class="project__overline">Featured Project</p>
                <h3 class="project__title">Amazon Clone</h3>
                <div class="project__description">
                  <p>
                    Amazon UI clone by using react & state management to handle
                    customer journey, Stripe test API to allow test purchase.
                    Firebase with authentication for user creation and login

                  </p>

                </div>
                <ul class="project__tech__list">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>Stripe API</li>
                </ul>
                <div class="project__links">
                  <a href="https://github.com/Woolgar/amazon-clone" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-github">
                      <title>GitHub</title>
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                      </path>
                    </svg>
                  </a>
                  <a href="https://fir-32983.web.app/" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-external-link">
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project__image">
              <a href="https://fir-32983.web.app/" rel="noopener" target="_blank">
                <div class="project__img__wrapper">
                  <div style="max-width: 700px; display: block">
                    <img alt="" role="presentation" src="/assets/images/amazon.png"
                      style="max-width: 100%; display: block; position: static" />
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="contact">
      <div class="contact__wrapper">
        <h2 class="section__heading contact__heading">What's next?</h2>
        <h1>Get in touch</h1>
        <p>
          I am available to work on your projects and bring your ideas to life.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <a class="btn" href="mailto:tobias@woolgar.dk">Say Hello</a>
      </div>
    </section>
    <Footer />

  </div>
</template>
<script setup>
import Footer from '/components/Footer.vue'
const { getItems } = useDirectusItems();
const currentYear = new Date().getFullYear();

const posts = await getItems({ collection: "articles" });

// console.log(posts)

// function menuToggle() {
//   const navs = document.querySelector(".nav__items");
//   navs.classList.toggle("nav__toggleShow");
// }
// document.querySelector(".nav__toggle").addEventListener("click", menuToggle);

// const header = document.querySelector(".nav");

// window.addEventListener("scroll", function menubg() {
//   var top = window.scrollY;
//   if (top >= 100) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// });

// (function () {
//   var section = document.querySelectorAll(".section");
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function (e) {
//     sections[e.id] = e.offsetTop;
//   });

//   window.onscroll = function () {
//     var scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector(".current").setAttribute("class", " ");
//         document
//           .querySelector("a[href*=" + i + "]")
//           .setAttribute("class", "current");
//       }
//     }
//   };
// })();

// function isVisible(element) {
//   let elementBox = element.getBoundingClientRect();
//   let distanceFromTop = -200;

//   if (elementBox.top - window.innerHeight < distanceFromTop) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let numberOfScans = 1;
// function scanDocument() {
//   let sectionList = document.querySelectorAll(".hidden");
//   sectionList.forEach(function (section) {
//     if (isVisible(section)) {
//       section.classList.remove("hidden");
//     }
//   });
// }

// document.addEventListener("scroll", throttle(scanDocument, 200));

// function throttle(fn, wait) {
//   var time = Date.now();
//   return function () {
//     if (time + wait - Date.now() < 0) {
//       fn();
//       time = Date.now();
//     }
//   };
// }

</script>

<style lang="scss">
/* 
Dark col:
#1f1f1f

#222222

 #30e0c5 

*/

:root {
  --dark-navy: #020c1b;
  --navy: rgb(19, 19, 19);
  --light-navy: rgb(26, 26, 26);
  --lightest-navy: #233554;
  --navy-shadow: rgba(23, 24, 26, 0.7);
  --dark-muted: linear-gradient(rgb(47, 59, 84), rgb(23, 28, 40));
  --light-slate: #e3e9f9;
  --lightest-slate: #ccd6f6;
  --white: #e6f1ff;
  --blue: #33caca;
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  --text-light: #ebeffb;
  --dark-gray: #1f1f1f;
  --muted-gray: #222222;
  --border-radius: 5px;
  --font: monospace;
}

$accent-color: #30e0c5; // #42b883 green

* {
  margin: 0;
}

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-family: var(--font);
}

body {
  background-color: var(--dark-gray);
}

#header {
  position: relative;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  // background-color: var(--dark-muted);
  // background-image: url("/assets/images/hero-bg.JPG");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

@media screen and (min-width: 600px) {}

.side__element {
  position: fixed;
  width: 50px;
  bottom: 20px;
  left: 20px;
  right: auto;
  z-index: 2;

  .side__socials {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;

    li {
      padding: 10px;

      a {
        color: var(--text-light);
        padding: 10px;

        &:hover {
          transition: all 0.2s;
          color: var(--blue);
        }
      }
    }
  }

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
}

section {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

.section__wrapper {
  max-width: 1000px;
  margin: 0px auto;
  padding: 100px 0px;
}

.section__heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  color: var(--text-light);
  margin: 10px 0px 40px;
  width: 100%;
  white-space: nowrap;

  &::after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--blue);
  }
}

.active {
  background-color: var(--muted-gray);
  box-shadow: 0 10px 30px -10px var(--navy-shadow);
}

.nav {
  display: flex;

  width: 100%;
  min-height: 48px;
  justify-content: space-between;
  padding: 0 50px;
  align-content: center;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  vertical-align: middle;
  align-items: center;

  ul {
    padding-left: 0;
  }

  .nav__items {
    display: flex;
    list-style: none;

    .nav__item {
      margin-right: 20px;

      a {
        text-decoration: none;
        color: var(--text-light);
        text-transform: uppercase;
        font-weight: 400;

        &:hover {
          color: $accent-color;
        }

        &.current {
          color: $accent-color;
        }
      }
    }
  }

  .nav__toggleShow {
    display: flex !important;
  }
}

.logo {
  display: flex;
  height: 25px;
  width: 25px;
}

.fa-bars {
  height: 25px;
  width: 25px;
  color: var(--text-light) !important;
}

.nav__toggle {
  display: none;
}

.site__banner {
  display: flex;
  height: 100%;
  justify-content: center;
  vertical-align: middle;

  .site__banner__content {
    align-items: center;
    display: flex;
    justify-content: center;

    h1 {
      font-size: 56px;
      height: 55px;
      padding: 10px;
      line-height: 36px;
      color: var(--text-light);
      text-align: center;
      margin-bottom: 2.5rem;
      font-family: var(--font);
      overflow: hidden;
      /* Ensures the content is not revealed until the animation */
      border-right: 0.15em solid orange;
      /* The typwriter cursor */
      white-space: nowrap;
      /* Keeps the content on a single line */
      letter-spacing: 0.15em;
      /* Adjust as needed */
      animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
      from {
        width: 0;
      }

      to {
        width: 100%;
      }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {

      from,
      to {
        border-color: transparent;
      }

      50% {
        border-color: var(--blue);
      }
    }

    .site__banner__h1 {
      color: $accent-color; //#e31b6d;
    }

    h3 {
      color: var(--text-light);
      text-align: center;
      font-size: 18px;
      margin-bottom: 40px;

      span {
        color: var(--text-light);
      }
    }
  }

  .site__banner__content__btn {
    display: flex;
    width: 150px;
    padding: 10px;
    color: var(--text-light);
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: var(--border-radius);

    justify-content: center;
    margin: auto;
    font-weight: 600;
    transition: all 0.3s;
    margin-top: 50px;

    &:hover {
      background-color: $accent-color;
      border: 1px solid $accent-color;
    }
  }
}

#about {
  background: var(--muted-gray);
  padding-top: 96px;
  padding-bottom: 66px;
  overflow: hidden;

  a {
    color: var(--text-light);

  }

  .about__image {
    padding: 0 20px;
    width: 25%;
  }

  .about__content {
    width: 75%;
  }

  .about__contact {
    width: 41.66667%;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    object-fit: cover;
  }

  h2 {
    color: var(--text-light);
  }

  p {
    line-height: 30px;
    color: #7a7a7a;
    margin: 0px 0px 15px;
  }

  p:nth-last-of-type(1) {
    margin: 0 0 30px 0;
  }

  .about__resume__ {
    width: 58.33333%;
    padding-top: 6px;
  }

  .about__resume__btn {
    align-self: center;
    display: flex;
    background: #444;
    padding: 12px 20px;
    cursor: pointer;
    height: auto;
    margin-bottom: 18px;
    color: var(--text-light);
    text-decoration: none;
    justify-content: center;
    border: none;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s;
    margin-top: 50px;
    border-radius: var(--border-radius);

    &:hover {
      background-color: var(--blue);
    }

    .fa-download {
      margin-right: 15px;
    }
  }
}

.about__row {
  display: flex;
  max-width: 1020px;
  margin: 0 auto;
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

.social-links {
  display: flex;
  justify-content: center;
  align-content: center;

  a {
    font-size: 1.5rem;
    color: var(--text-light);
    text-decoration: none;
    margin-right: 15px;

    :hover {
      transition: all 0.2s;
      color: $accent-color;
    }
  }
}

footer {
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: var(--muted-gray);
  color: var(--text-light);
  font-size: 14px;
  text-align: center;
  position: relative;
}

.footer__copyright {
  margin-top: 24px;
}

@media screen and (max-width: 768px) {
  .side__element {
    display: none;
  }

  .nav {
    .nav__items {
      display: none;
      flex-direction: column;
      z-index: 2;

    }

    .nav__toggle {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      float: right;
      cursor: pointer;
    }
  }

  .site__banner {
    .site__banner__content__title {
      padding: 0 20px;
    }

    .site__banner__content h1 {
      font-size: 20px;
      line-height: 24px;
    }
  }

  .project__list {
    .project__card {
      width: 100%;
      padding: 0 20px;
    }
  }

  #about {
    .about__row {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .about__image {
      width: 100%;
    }

    .about__content {
      width: 100%;
      color: #fff;
    }
  }
}

@media screen and (min-width: 768px) {
  .featured__project .project__title {
    margin: 0px 0px 20px;
  }

  #about {
    padding: 130px 0;
  }
}

@media screen and (min-width: 1920px) {
  .project__list {
    max-width: 800px;
  }
}

/* PROJECT SECTION */
#projects {
  background-color: var(--dark-muted);
}

.featured__projectGrid {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.featured__project {
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

.project__content {
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
}

.featured__project .project__content {
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
}

.featured__project:nth-of-type(2n + 1) .project__content {
  grid-column: 7 / -1;
  text-align: right;
}

.featured__project:not(:last-of-type) {
  margin-bottom: 100px;
}

.project__image {
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  border-radius: var(--border-radius);

  .project__img__wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    border-radius: var(--border-radius);

    img {
      border-radius: var(--border-radius);
    }
  }

  a {
    width: 100%;
    height: 100%;
    background-color: var(--blue);
    border-radius: var(--border-radius);
    vertical-align: middle;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0px;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--navy);
      mix-blend-mode: screen;
      border-radius: var(--border-radius);
    }

    &:hover,
    &:focus {
      background: transparent;
      outline: 0px;
    }
  }
}

.featured__project:nth-of-type(2n + 1) .project__image {
  grid-column: 1 / 8;
}

.project__overline {
  margin: 10px 0px;
  color: var(--blue);
  font-family: var(--font);
  font-size: var(--fz-xs);
  font-weight: 400;
}

.project__title {
  color: var(--lightest-slate);
  font-size: clamp(24px, 5vw, 28px);
}

.project__description {
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: var(--fz-lg);
}

.project__tech__list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;

  li {
    margin: 0px 20px 5px 0px;
    color: var(--light-slate);
    font-family: var(--font);
    font-size: var(--fz-xs);
    white-space: nowrap;
  }
}

.featured__project:nth-of-type(2n + 1) .project__tech__list li {
  margin: 0px 0px 5px 20px;
}

.featured__project:nth-last-of-type(2n + 1) .project__tech__list {
  -webkit-box-pack: end;
  justify-content: flex-end;
}

.featured__project:nth-of-type(2n + 1) .project__links {
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin-left: 0px;
  margin-right: -10px;
}

.btn {
  display: flex;
  width: 150px;
  padding: 1.25rem 1.75rem;
  color: var(--text-light);
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: var(--border-radius);
  justify-content: center;
  margin: auto;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 50px;

  &:hover {
    background-color: $accent-color;
    border: 1px solid $accent-color;
  }
}

.project__links {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: var(--lightest-slate);

  a {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px;

    svg {
      &:hover {
        color: var(--blue);
        transition: var(--transition);
      }
    }
  }
}

a svg {
  width: 22px;
  height: 22px;
  margin-top: -4px;
  color: var(--light-slate);
}

.featured__project .project-image a:hover::before,
.featured__project .project-image a:focus::before,
.featured__project .project-image a:hover .img,
.featured__project .project-image a:focus .img {
  background: transparent;
  filter: none;
}

.hidden {
  // opacity: 0;
}

#contact {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0;
  color: var(--white);

  .contact__wrapper {
    max-width: 600px;
    text-align: center;
  }

  h1 {
    font-size: 52px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  .contact__heading {
    justify-content: center;
    color: var(--blue);

    &::after {
      display: none;
    }
  }
}

@media screen and (max-width: 600px) {
  .logo {
    display: none;
  }

  .site__banner .site__banner__content h1 {
    letter-spacing: 0px;
  }

  #about {
    padding: 20px;
  }

  #projects {
    padding: 0 20px;
  }

  .featured__project {
    grid-template-columns: auto;
  }

  .project__image {
    display: none;
  }

  #contact {
    padding: 50px 20px;

    h1 {
      font-size: 42px;
    }
  }

  .hidden {
    opacity: 1;
  }
}
</style>
