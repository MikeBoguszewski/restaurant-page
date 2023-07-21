function loadContact () {
    console.log('contact')
    const content = document.querySelector('div#content');
    content.innerHTML = '';

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');
    infoContainer.classList.add('contact-container');

    content.appendChild(infoContainer);

    const contact = document.createElement('p');
    contact.classList.add('contact-text');
    infoContainer.appendChild(contact);
    contact.textContent = 'Contact Us!\n Call 000-000-0000 \n Address: 1234 N Cherry Ln';
}
export {loadContact};