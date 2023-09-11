import Image from '../resouces/Barbieri_-_ViaSophia25668.jpg';
const content = document.querySelector('#content');
const img = document.createElement('img');
img.id = "restaurant-image"
img.src = Image;

const heading = document.createElement('h1');
heading.textContent = "My restaurant";
heading.id = "heading";

const description = document.createElement('p');
description.textContent = "An amazing restaurant";
description.id = "description";

const loadInitialPage = () => {
    content.appendChild(img);
    content.appendChild(heading);
    content.appendChild(description);
};

export default loadInitialPage;