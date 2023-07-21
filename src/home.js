function loadHome () {
    console.log('home')
    const content = document.querySelector('div#content');
    content.innerHTML = '';
    
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
    loadHome
}