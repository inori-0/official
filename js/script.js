"use strict";


/* =========================
   Smartphone Menu
========================= */

const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");
const navigationLinks = document.querySelectorAll(".global-nav a");


if (menuButton && globalNav) {

    menuButton.addEventListener("click", () => {

        const isOpen = globalNav.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            globalNav.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {

            globalNav.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


/* =========================
   Gallery Modal
========================= */

const galleryModal = document.querySelector("#gallery-modal");
const galleryModalButtons = document.querySelectorAll(
    ".gallery-modal-button"
);
const galleryModalImage = document.querySelector(
    "#gallery-modal-image"
);
const galleryModalTitle = document.querySelector(
    "#gallery-modal-title"
);
const galleryModalIllustrator = document.querySelector(
    "#gallery-modal-illustrator"
);
const galleryModalCloseButtons = document.querySelectorAll(
    "[data-modal-close]"
);


function openGalleryModal(button) {

    if (
        !galleryModal ||
        !galleryModalImage ||
        !galleryModalTitle ||
        !galleryModalIllustrator
    ) {
        return;
    }

    const image = button.dataset.image || "";
    const title = button.dataset.title || "";
    const illustrator = button.dataset.illustrator || "";

    galleryModalImage.src = image;
    galleryModalImage.alt = title;

    galleryModalTitle.textContent = title;
    galleryModalIllustrator.textContent = illustrator;

    galleryModal.classList.add("open");
    galleryModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    const closeButton = galleryModal.querySelector(
        ".gallery-modal-close"
    );

    if (closeButton) {
        closeButton.focus();
    }

}


function closeGalleryModal() {

    if (!galleryModal) {
        return;
    }

    galleryModal.classList.remove("open");
    galleryModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


galleryModalButtons.forEach((button) => {

    button.addEventListener("click", () => {

        openGalleryModal(button);

    });

});


galleryModalCloseButtons.forEach((button) => {

    button.addEventListener("click", () => {

        closeGalleryModal();

    });

});


document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        galleryModal &&
        galleryModal.classList.contains("open")
    ) {
        closeGalleryModal();
    }

});