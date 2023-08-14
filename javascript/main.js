const projects = [
    { title: 'Challenge 170 - Contact Card', folder: '/Challenge_170-Contact_Card', image: '/Challenge_170-Contact_Card/screenshot.png' },
    { title: 'Challenge 230 - Colored Cards', folder: '/Challenge_230-Colored_Cards', image: '/Challenge_230-Colored_Cards/screenshot.png' },
    { title: 'Challenge 233 - Profile Card', folder: '/Challenge_233-Profile_Card', image: '/Challenge_233-Profile_Card/screenshot.png' },
    { title: 'Challenge 244 - Order Summary', folder: '/Challenge_244-Order_Summary', image: '/Challenge_244-Order_Summary/screenshot.png' },
    { title: 'Challenge 262 - Blog Cards 4', folder: '/Challenge_262-Blog_Cards_4', image: '/Challenge_262-Blog_Cards_4/screenshot.png' },
    { title: 'Challenge 283 - Book Card', folder: '/Challenge_283-Book_Card', image: '/Challenge_283-Book_Card/screenshot.png' },
];

const projectsDiv = document.getElementById('projects');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'col-md-4';

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = project.image;
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = project.title;
    cardBody.appendChild(title);

    const link = document.createElement('a');
    link.className = 'btn btn-primary';
    link.href = project.folder;
    link.innerText = 'View Project';
    cardBody.appendChild(link);

    card.appendChild(cardBody);
    projectDiv.appendChild(card);
    projectsDiv.appendChild(projectDiv);
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});