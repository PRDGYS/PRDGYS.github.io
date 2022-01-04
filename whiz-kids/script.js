/**
 * Event listener for adding a background color to
 * the header if the user scrolls down.
 */
document.addEventListener('scroll', function (e) {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50 && !(header.classList.contains('header-scrolled'))) {
    header.classList.add('header-scrolled');
  } else if (window.scrollY < 50 && header.classList.contains('header-scrolled')) {
    header.classList.remove('header-scrolled');
  }
});

/** 
 * Event listener for the scrolling divs into view.
 */
document.getElementById('about-link').addEventListener('click', () => {
  const aboutPage = document.getElementById('first-area');
  aboutPage.scrollIntoView({behavior: 'smooth'});
});

/** 
 * Event listener for the scrolling divs into view.
 */
 document.getElementById('team-link').addEventListener('click', () => {
  const aboutPage = document.getElementById('last-area');
  aboutPage.scrollIntoView({behavior: 'smooth'});
});