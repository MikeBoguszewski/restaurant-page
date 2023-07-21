function loadMenu () {
    console.log('menu')
    const content = document.querySelector('div#content');
    content.innerHTML = '';

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');
    infoContainer.classList.add('menu-container');
    
    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = 'Menu';
    infoContainer.appendChild(info);

    // const latteImage = document.createElement('img');
    // latteImage.src = '../src/assets/latte.jpg';
    // latteImage.classList.add('latte-image');
    // const latteDiv = document.createElement('div');
    // menuGrid.appendChild(latteImage);


    const menuRow = document.createElement('p');

    menuRow.textContent = 'Espresso \n\n Latte \n\n Cappuchino \n\n Mocha \n\n Americano \n\n Iced Coffee \n\n Black \n\n Macchiato'
    menuRow.classList.add('menu-row')

    infoContainer.appendChild(menuRow);



    content.appendChild(infoContainer);
}

export {loadMenu};