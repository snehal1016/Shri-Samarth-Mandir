/* =========================
   SAMARTH MANDIR
   INTERACTIONS
========================= */


/* =========================
   STORY TIMELINE DATA
========================= */

const storyData = {

    1608: {
        label: "THE BEGINNING · 1608",
        title: "Born at Jamb",
        text: "Narayan, the younger son of Suryajipant Thosar and Ranubai, was born at Jamb Samarth on Chaitra Shukla Navami — Ram Navami — in 1608. According to the traditional account, his birth took place at noon, at the time associated with the birth of Lord Rama. His elder brother was Gangadhar, later known as Shreshtha or Rami Ramdas."
    },

    1620: {
        label: "THE CALL · 1620",
        title: "The Journey Begins",
        text: "At twelve, Narayan left his own wedding ceremony after hearing the word 'Savadhan' during the marriage rites. He travelled to Nashik and began twelve years of spiritual practice at Takli on the banks of the Godavari. This marked the beginning of the life of spiritual discipline through which he became known as Samarth Ramdas Swami."
    },

    1644: {
        label: "THE MISSION · 1644",
        title: "A Wider Purpose",
        text: "After twelve years of pilgrimage across India, Samarth returned to Maharashtra in 1644 and began his wider spiritual and social work. He established Hanuman temples, organised Ram Navami celebrations and developed the Ramdasi tradition. In 1648, he established a monastery at Chafal, giving the movement an organised form."
    },

    1932: {
        label: "THE MEMORIAL · 1932",
        title: "The Samarth Mandir",
        text: "Centuries after Samarth's birth, Nanasaheb Dev built a temple at Jamb in 1932 in memory of Samarth Ramdas Swami. The temple helped preserve Jamb's place as a site connected with Samarth's birth and early life."
    },

    1943: {
        label: "THE TRUST · 1943",
        title: "A Living Legacy",
        text: "The institution responsible for managing the Samarth Temple was registered as a trust in 1943 under Nanasaheb Dev. The trust continues to manage the site, provide facilities for visitors and preserve the heritage associated with Jamb Samarth."
    }

};


/* =========================
   STORY TIMELINE
========================= */

const storyYears = document.querySelectorAll(".story-year");

const storyLabel = document.querySelector(".story-detail-label");
const storyTitle = document.querySelector("#story-title");
const storyText = document.querySelector("#story-text");


storyYears.forEach((yearButton) => {

    yearButton.addEventListener("click", () => {

        const selectedYear = yearButton.dataset.year;

        const selectedStory = storyData[selectedYear];

        if (!selectedStory) return;


        /* Remove active state */

        storyYears.forEach((button) => {
            button.classList.remove("active");
        });


        /* Add active state */

        yearButton.classList.add("active");


        /* Update story content */

        storyLabel.textContent = selectedStory.label;

        storyTitle.textContent = selectedStory.title;

        storyText.textContent = selectedStory.text;

    });

});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-btn");

const navigation = document.querySelector(".nav-links");


if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("mobile-open");

        menuButton.classList.toggle("menu-open");

    });


    /* Close menu when a navigation link is clicked */

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("mobile-open");

            menuButton.classList.remove("menu-open");

        });

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".story-section, .mandir-section, .visit-section"
);


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 40) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const navLinks = document.querySelectorAll(".nav-links a");


const sections = document.querySelectorAll(
    "#history, #temple, #visit"
);


if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {

                        link.classList.remove("active-link");

                    });


                    const activeLink = document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );


                    if (activeLink) {

                        activeLink.classList.add("active-link");

                    }

                }

            });

        },
        {
            threshold: 0.45
        }
    );


    sections.forEach((section) => {

        sectionObserver.observe(section);

    });

}


/* =========================
   IMAGE LOAD CHECK
========================= */

const images = document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("error", () => {

        console.warn(
            `Image could not be loaded: ${image.getAttribute("src")}`
        );

    });

});

/* =========================
   MARATHI LANGUAGE BUTTON
========================= */

const languageButton = document.querySelector(".language-btn");

if (languageButton) {

    languageButton.addEventListener("click", () => {

        const select = document.querySelector(".goog-te-combo");

        if (!select) {
            console.log("Google Translate is still loading...");
            return;
        }

        if (select.value === "mr") {
            select.value = "en";
            select.dispatchEvent(new Event("change"));
            languageButton.textContent = "मराठी";
        } else {
            select.value = "mr";
            select.dispatchEvent(new Event("change"));
            languageButton.textContent = "English";
        }

    });

}