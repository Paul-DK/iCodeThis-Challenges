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

const projectsDiv = document.getElementById('projects');

projects.forEach((project) => {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'col-md-4';

  const card = document.createElement('div');
  card.className = 'card';

  const imgAndButtonDiv = document.createElement('div');
  imgAndButtonDiv.className = 'img-and-button';

  const imgDiv = document.createElement('div');
  imgDiv.className = 'project-image';

  const img = document.createElement('img');
  img.className = 'card-img-top';
  img.src = project.image;
  img.alt = project.title;

  imgDiv.appendChild(img);

  const overlay = document.createElement('div');
  overlay.className = 'project-overlay';

  const description = document.createElement('p');
  description.innerText = project.description;
  overlay.appendChild(description);

  const list = document.createElement('ul');
  project.details.forEach((detail) => {
    const listItem = document.createElement('li');
    listItem.innerText = detail;
    list.appendChild(listItem);
  });
  overlay.appendChild(list);

  imgDiv.appendChild(overlay);
  imgAndButtonDiv.appendChild(imgDiv);

  card.appendChild(imgAndButtonDiv);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const title = document.createElement('h5');
  title.className = 'card-title';
  title.innerText = project.title;
  cardBody.appendChild(title);

  const link = document.createElement('a');
  link.className = 'btn btn-primary text-center';
  link.href = project.folder;
  link.innerText = 'View Project';
  link.style.display = 'block';
  link.style.margin = '10px auto';
  link.style.width = 'fit-content'; // Ensure the button only takes the space it needs
  cardBody.appendChild(link); // Append the link inside the card body, after the title

  card.appendChild(cardBody);
  projectDiv.appendChild(card);
  projectsDiv.appendChild(projectDiv);
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');

function setToggleButtonText() {
  if (document.body.classList.contains('dark')) {
    themeToggle.innerText = 'Light Mode';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    themeToggle.innerText = 'Dark Mode';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
}

setToggleButtonText();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  setToggleButtonText();
});
