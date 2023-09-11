const content = document.querySelector('#content');

const create = (tag, className) => {
    const e = document.createElement(tag);
    e.classList.add(className);
    return e;
}

const createContact = (name, info, image) => {
    const contactContainer = create("div", "contact-container");
    const contactName = create("div", "contact-name");
    const contactInfo = create("div", "contact-info");
    const contactImage = create("img", "contact-image");

    //add information of contacts
    contactName.textContent = name;
    contactInfo.textContent = info;
    contactImage.src = image;

    //make contact
    contactContainer.appendChild(contactName);
    contactContainer.appendChild(contactInfo);
    contactContainer.appendChild(contactImage);
    
    return contactContainer;
}

const loadContact = () => {
    const contact = createContact("Baby bear", `Waiter 555-555-5556 something@mail.com`, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg/640px-Ours_brun_parcanimalierpyrenees_1.jpg");
    const largeContainer = create("div", "large-container");
    const contacUS = create("div", "contact-us");
    contacUS.textContent = "contact us";
    largeContainer.appendChild(contacUS);
    largeContainer.appendChild(contact);
    content.appendChild(largeContainer);
}

export default loadContact;