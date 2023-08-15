const projects = [
    { 
      title: 'Challenge 170 - Contact Card', 
      folder: '/iCodeThis-Challenges/Challenge_170-Contact_Card', 
      image: '/iCodeThis-Challenges/Challenge_170-Contact_Card/screenshot.png',
      description: 'Recreate this design using HTML/CSS. Bonus points for adding:',
      details: ['Animations', 'JavaScript']
    },
    {
      title: 'Challenge 230 - Colored Cards',
      folder: '/iCodeThis-Challenges/Challenge_230-Colored_Cards',
      image: '/iCodeThis-Challenges/Challenge_230-Colored_Cards/screenshot.png',
      description: 'Recreate this design using HTML/CSS. Bonus points for adding:',
      details: ['Animations', 'JavaScript']
    },
    // Not yet completed
    //
    // {
    //   title: 'Challenge 233 - Profile Card',
    //   folder: '/iCodeThis-Challenges/Challenge_233-Profile_Card',
    //   image: '/iCodeThis-Challenges/Challenge_233-Profile_Card/screenshot.png',
    //   description: 'A short paragraph about the project.',
    //   details: ['Item 1', 'Item 2']
    // },
    {
      title: 'Challenge 244 - Order Summary',
      folder: '/iCodeThis-Challenges/Challenge_244-Order_Summary',
      image: '/iCodeThis-Challenges/Challenge_244-Order_Summary/screenshot.png',
      description: 'Recreate this design using HTML/CSS. Bonus points for adding:',
      details: ['Animations', 'JavaScript']
    },
    {
      title: 'Challenge 262 - Blog Cards 4',
      folder: '/iCodeThis-Challenges/Challenge_262-Blog_Cards_4',
      image: '/iCodeThis-Challenges/Challenge_262-Blog_Cards_4/screenshot.png',
      description: 'Recreate this design using HTML/CSS. Bonus points for adding:',
      details: ['Animations', 'JavaScript']
    },
    {
      title: 'Challenge 283 - Book Card',
      folder: '/iCodeThis-Challenges/Challenge_283-Book_Card',
      image: '/iCodeThis-Challenges/Challenge_283-Book_Card/screenshot.png',
      description: 'Recreate this design using HTML/CSS. Bonus points for adding:',
      details: ['Animations', 'JavaScript']
    },
];

function createProjectCards() {
  const container = document.getElementById('projects');
  projects.forEach((project) => {
    const card = `
      <div class="col-lg-4 col-md-6 card">
        <div class="img-and-button">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
              <p>${project.description}</p>
              <ul>${project.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
            </div>
          </div>
          <h3>${project.title}</h3>
          <a href="${project.folder}" class="btn btn-primary">View Project</a>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function updateTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const navbarBrand = document.querySelector('.navbar-brand');

  if (body.classList.contains('dark')) {
    themeToggle.innerText = 'Light Mode';
    navbarBrand.style.color = '#f4f4f4';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerText = 'Dark Mode';
    navbarBrand.style.color = '#343a40';
    localStorage.removeItem('theme');
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  updateTheme();
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
  createProjectCards();
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
  updateTheme();
});
