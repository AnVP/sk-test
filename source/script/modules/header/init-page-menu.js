import {enableScrollLock, disableScrollLock} from '../../utils/scroll-lock.js';

const body = document.querySelector('body');
const buttonSandwich = document.querySelector('[data-sandwich="data-sandwich"]');
const nav = document.querySelector('[data-main-nav="nav"]');
const logo = document.querySelector('[data-header-logo="data-header-logo"]');
const navItems = document.querySelectorAll('[data-nav-item="item"]');
const activeClass = 'is-active';
const activeLogoClass = 'is-menu';

const DEVICE_TABLET_WIDTH = 1024;

const openMenu = () => {
    buttonSandwich.classList.add(activeClass);
    nav.classList.add(activeClass);
    logo.classList.add(activeLogoClass);
    addItemsDelay();
    enableScrollLock();
    document.addEventListener('keydown', closeMenuOnEsc);
}

const closeMenu = () => {
    buttonSandwich.classList.remove(activeClass);
    nav.classList.remove(activeClass);
    logo.classList.remove(activeLogoClass);
    disableScrollLock();
    document.removeEventListener('keydown', closeMenuOnEsc);
}

const addItemsDelay = () => {
    navItems.forEach((item, i) => {
        item.style = `transition-delay: ${i * 0.2}s`
    });
}

const closeMenuOnEsc = (evt) => {
    if (evt.key === 'Escape') {
        closeMenu();
    }
}

const clickButtonSandwich = () => {
    if (buttonSandwich.classList.contains(activeClass)) {
        closeMenu();
        return;
    }
    openMenu();
}

const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        const width = entry.borderBoxSize[0].inlineSize.toFixed(2);
        if (width < DEVICE_TABLET_WIDTH) {
            buttonSandwich.addEventListener('click', clickButtonSandwich);
        } else {
            buttonSandwich.removeEventListener('click', clickButtonSandwich);
            closeMenu();
        }
    });
});

resizeObserver.observe(body);
