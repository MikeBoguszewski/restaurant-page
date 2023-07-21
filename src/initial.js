import './style.css';

function initialLoad () {
    const body = document.querySelector('body');
    const content = document.querySelector('div#content');

    const background = document.createElement('img');
    background.classList.add('background');
    background.src = '../src/assets/coffee.jpg'
    body.appendChild(background);

    const header = document.createElement('header');
    const headline = document.createElement('h1');
    headline.textContent = 'Espresso Express';
    header.appendChild(headline);

    const navigationBar = document.createElement('nav');
    const homeTab = document.createElement('p');
    homeTab.textContent = 'Home';
    homeTab.classList.add('home');
    const menuTab = document.createElement('p');
    menuTab.textContent = 'Menu';
    menuTab.classList.add('menu');
    const contactTab = document.createElement('p');
    contactTab.textContent = 'Contact';
    contactTab.classList.add('contact');

    navigationBar.appendChild(homeTab);
    navigationBar.appendChild(menuTab);
    navigationBar.appendChild(contactTab);

   
    header.appendChild(navigationBar);
    body.appendChild(header);
    
    
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    content.appendChild(infoContainer);
    
    const info = document.createElement('p');
    info.classList.add('info');
    const hours = document.createElement('p')
    hours.classList.add('hours');
    info.textContent = 'The best tasting coffee around! Made with premium coffee beans straight from Zimbabwe! \n'
    hours.textContent = 'Hours \n Monday: 8AM-8PM \n Tuesday: 8AM-8PM \n Wednesday: 8AM-8PM \n Thursday: 8AM-8PM \n Friday: 8AM-8PM \n Saturday: 8AM-8PM \n Sunday: Closed';
    infoContainer.appendChild(info);
    infoContainer.appendChild(hours);
}

export {
    initialLoad
};