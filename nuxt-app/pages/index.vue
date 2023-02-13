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
              <a href="https://github.com/Woolgar" aria-label="github" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/tobias-faucette/" aria-label="Linkedin" rel="noopener noreferrer"
                target="_blank">
                <i class="fab fa-linkedin-in"> </i>
              </a>
              <a href="https://www.instagram.com/tobiasfaucette/" aria-label="instagram" rel="noopener noreferrer"
                target="_blank">
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
          <a href="https://github.com/Woolgar" aria-label="github" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tobias-faucette/" aria-label="Linkedin" rel="noopener noreferrer"
            target="_blank">
            <i class="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tobiasfaucette/" aria-label="instagram" rel="noopener noreferrer"
            target="_blank">
            <i class="fab fa-instagram"> </i>
          </a>
        </li>
      </ul>
    </div>

    <section class="section" id="about">
      <div class="about__row hidden">
        <div class="about__image">
          <nuxt-img src="/cv.jpg" alt="Tobias Faucette" width="150" height="150"></nuxt-img>
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
            <!-- <div class="about__resume">
              <a href="assets/cv-.pdf" target="_blank" class="about__resume__btn">
                <i class="fas fa-download"></i>Download Resume</a>
            </div> -->
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
                    <nuxt-img src="/Netflix.png" alt="Netflix logo" width="580" height="325"
                      style="max-width: 100%; display: block; position: static"></nuxt-img>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <!-- <li class="featured__project hidden">
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
          </li> -->
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
                    <nuxt-img src="/amazon.png" alt="amazon logo" width="580" height="325" role="presentation"
                      style=" object-fit: cover; aspect-ratio: 16/ 9;">
                    </nuxt-img>
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
        <a class="btn" href="mailto:tobias@tobiasfaucette.com">Say Hello</a>
      </div>
    </section>
    <Footer />

  </div>
</template>
<script setup>
import Footer from '/components/Footer.vue'
// const { getItems } = useDirectusItems();
const currentYear = new Date().getFullYear();

// const { pending, data: posts } = useLazyFetch(getItems({ collection: "articles" }))
// watch(posts, (newPosts) => {
//   // Because posts starts out null, you won't have access
//   // to its contents immediately, but you can watch it.
// })


useHead({
  title: 'Web developer - Tobias Faucette',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'Tobias Faucette web developer portfolio' }
  ]
})


// const posts = await getItems({ collection: "articles" });

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
</style>
