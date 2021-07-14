/*Show menu*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*remove the menu for mobile devices */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Scroll sections active link*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*Changing the background header */
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*Showing scroll top arrow*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*Dark theme toggling*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtaining the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// Validatating if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*Scroll Revealing animation*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .decoration__data,
           .accessory__content,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})

//Detecting the click of Watch Live anchor tag and responding back

const watchLive = document.getElementById('live').addEventListener('click', function (event) {
    alert('The event starts in 3 Hours');
    event.preventDefault();
})

// detecting the click of subscribing button in the subscribe to the newsletter section and responding back

const subs = document.getElementById('sub').addEventListener('click', function (event2) {
    let input = document.getElementById('sub1').value;
    if (input !== '' && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
        alert('Thanks for Subscribing. You will be notified whenever there is a new event');
        document.getElementById('sub1').value = "";
        event2.preventDefault();
    }
    else {
        alert('Kindly enter a valid email address')
        document.getElementById('sub1').value = "";
        event2.preventDefault();
    }
})

//Responding Back to the clicking of submit button in the form

const submit = document.getElementById('submit').addEventListener('click', function (event3) {
    let namefield = document.getElementById('fullname').value;
    if (namefield == '') {
        alert('Kindly fill your name');
        event3.preventDefault();
    }
    let emailid = document.getElementById('e-mail').value;
    let validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailid);
    if (emailid == '') {
        alert('Please enter a valid email address')
        event3.preventDefault();
    }
    let phnum = document.getElementById('tel_no').value;
    let vaildnum = /^\d{10}$/.test(phnum);
    if (phnum == '') {
        alert('Kindly fill your Mobile number');
        event3.preventDefault();
    }
    let ques = document.getElementById('questions').value;
    if (ques == '') {
        alert('Kindly enter your questions');
        event3.preventDefault();
    }
    if (namefield !== '' && emailid !== '' && phnum !== '' && ques !== '' && vaildnum !== false && validemail !== false) {
        alert('You have successfully registered and entered the contest.');
        document.getElementById('form1').reset();
        event3.preventDefault();
    }
    else {
        alert('Kindly check your email and mobile number')
        event3.preventDefault();
    }
})

//-----------read more expanding and collapsing functions using jquery--------------
jQuery(document).ready(function ($) {

    $("#read").click(function (ev) {

        $("#author_bio_wrap").slideToggle("slow");

        if ($("#read").text() == "Click on Read More") {
            $("#read").html("Hide Details")
            ev.preventDefault();
        }
        else {
            $("#read").text("Click on Read More")
            ev.preventDefault();
        }

    });
});

jQuery(document).ready(function ($) {

    $("#read1").click(function (ev) {

        $("#author_bio_wrap1").slideToggle("slow");

        if ($("#read1").text() == "Click on Read More..") {
            $("#read1").html("Hide Details")
            ev.preventDefault();
        }
        else {
            $("#read1").text("Click on Read More..")
            ev.preventDefault();
        }

    });
});

jQuery(document).ready(function ($) {

    $("#read2").click(function (ev) {

        $("#author_bio_wrap2").slideToggle("slow");

        if ($("#read2").text() == "Click on Read More.") {
            $("#read2").html("Hide Details")
            ev.preventDefault();
        }
        else {
            $("#read2").text("Click on Read More.")
            ev.preventDefault();
        }

    });
});