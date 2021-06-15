const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}



if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(item => {
    item.addEventListener('click', linkAction);
});

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark_mode';
const lightTheme = 'light_mode';

const darkThemeText = 'dark';
const lightThemeText = 'light';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => themeButton.textContent === darkTheme ? 'dark' : 'light';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](getCurrentTheme() + '-theme');
    themeButton.innerText = selectedIcon
}

function toggleTheme() {
    const newTheme = getCurrentTheme() === darkThemeText ? lightThemeText : darkThemeText;
    document.body.classList = '';
    document.body.classList.toggle(getCurrentTheme() + '-theme');
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getIcon(newTheme));
    themeButton.innerText = getIcon(newTheme);
}

function getIcon(theme) {
    return theme === 'dark' ? darkTheme : lightTheme;
}

function getThemeText() {

}

themeButton.addEventListener('click', () => {
    toggleTheme();
});


const skillsContnt = document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContnt.length; i++) {
        skillsContnt[i].className = 'skills-content skills-close'
    }
    console.log(itemClass);
    if (itemClass === 'skills-content skills-close') {

        this.parentNode.className = 'skills-content skills-open'
    }

    console.log(this.parentNode);
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills)
});


const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active');
        });

        target.classList.add('qualification-active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active');
        });

        tab.classList.add('qualification-active')
    })
});


let swiper = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);


function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

function scrollTop() {
    const scrollTop = document.getElementsById('scrollup');
    if (this.scrollY >= 500) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}