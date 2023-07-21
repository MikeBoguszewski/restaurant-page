import {initialLoad} from './initial.js';
import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadContact} from './contact.js';
import './style.css';

initialLoad()
const homeTab = document.querySelector('.home')
const menuTab = document.querySelector('.menu')
const contactTab = document.querySelector('.contact')

homeTab.addEventListener('click', loadHome)

menuTab.addEventListener('click', loadMenu)

contactTab.addEventListener('click', loadContact)