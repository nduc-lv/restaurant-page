const content = document.querySelector('#content');

//fucntion for create an element
const create = (tag, className) => {
    const e = document.createElement(tag);
    e.classList.add(className);
    return e;
}

//create menu
const createMenu = () => {
    const menuContainer = create('div', 'menu-container');
    const menuHeader = create('div', 'menu-header');
    menuHeader.textContent = "MENU";
    menuContainer.appendChild(menuHeader);
    return {menuContainer, menuHeader};
}
//create category
const createCategory = () => {
    const categoryContainer = create('div', 'category-container');
    const categoryName = create('div', 'category-name');
    categoryContainer.appendChild(categoryName);
    return {categoryContainer, categoryName};
}
//create dish
const createDish = () => {
    const dishContainer = create('div', 'dish-container');
    const dishName = create('div', 'dish-name');
    const dishDescription = create('div', 'dish-discription');
    const dishImage = create('img', 'dish-image');
    dishContainer.appendChild(dishName);
    dishContainer.appendChild(dishDescription);
    dishContainer.appendChild(dishImage);
    return {dishDescription, dishImage, dishName, dishContainer};
}

//load menu
const loadMenu = () => {
    const menu = createMenu();
    const category = createCategory();
    const dish = createDish();
    menu.menuContainer.appendChild(category.categoryContainer);
    //adding information to category
    category.categoryName.textContent = "Beverage";
    category.categoryContainer.appendChild(dish.dishContainer);
    //adding information to dish
    dish.dishName.textContent = "Honey tea";
    dish.dishDescription.textContent = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    dish.dishImage.src = "https://www.simplyrecipes.com/thmb/Q4I8Wg6ScCt98wAMP-xIe05aHtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Honey-Lemon-Tea-LEAD-02-e7fc3d40bc8f4a8aa3e2434fe449eb4c.jpg";

    //load menu
    content.appendChild(menu.menuContainer);
}

export default loadMenu();