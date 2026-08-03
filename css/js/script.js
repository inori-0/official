"use strict";

/* =========================================
   Smartphone Menu
========================================= */

const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");
const navigationLinks = document.querySelectorAll(".global-nav a");

if (menuButton && globalNav) {
    const closeMenu = () => {
        globalNav.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = globalNav.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}


/* =========================================
   Gallery Auto Rendering
========================================= */

const galleryCategoriesContainer = document.getElementById(
    "gallery-categories"
);

if (
    galleryCategoriesContainer &&
    typeof galleryCategories !== "undefined" &&
    typeof galleryData !== "undefined"
) {
    galleryCategories.forEach((category) => {
        const categorySection = document.createElement("section");
        categorySection.className = "gallery-category";

        const categoryTitle = document.createElement("h2");
        categoryTitle.className = "gallery-category-title";
        categoryTitle.textContent = category.title;

        const categoryGrid = document.createElement("div");
        categoryGrid.className = "gallery-full-grid";
        categoryGrid.dataset.galleryCategory = category.id;

        const categoryItems = galleryData.filter(
            (item) => item.category === category.id
        );

        if (categoryItems.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "gallery-empty-message";
            emptyMessage.textContent = "作品を準備中です。";

            categoryGrid.appendChild(emptyMessage);
        } else {
            categoryItems.forEach((item, index) => {
                const figure = document.createElement("figure");
                figure.className = "gallery-full-item";
                figure.id = `gallery-${category.id}-${index + 1}`;

                const button = document.createElement("button");
                button.className = "gallery-image-button";
                button.type = "button";

                button.setAttribute(
                    "aria-label",
                    `${item.title || "作品"}を拡大表示`
                );

                const image = document.createElement("img");
                image.src =
                    item.src ||
                    `images/gallery/gallery${item.file}.png`;

                image.alt =
                    item.alt ||
                    item.title ||
                    "ギャラリー作品";

                image.loading = "lazy";

                const clickLabel = document.createElement("span");
                clickLabel.className = "gallery-click-label";
                clickLabel.textContent = "View Details";

                const caption = document.createElement("figcaption");

                const title = document.createElement("span");
                title.className = "gallery-item-title";
                title.textContent = item.title || "";

                const illustrator = document.createElement("span");
                illustrator.className = "gallery-item-illustrator";

                if (item.illustrator) {
                    if (
                        item.illustrator.startsWith("Illustrator：") ||
                        item.illustrator.startsWith("Illustrator:")
                    ) {
                        illustrator.textContent = item.illustrator;
                    } else {
                        illustrator.textContent =
                            `Illustrator：${item.illustrator}`;
                    }
                }

                button.append(image, clickLabel);
                caption.append(title, illustrator);
                figure.append(button, caption);
                categoryGrid.appendChild(figure);
            });
        }

        categorySection.append(categoryTitle, categoryGrid);
        galleryCategoriesContainer.appendChild(categorySection);
    });
}
/* =========================================
   Gallery Lightbox
========================================= */

const galleryLightbox = document.querySelector("#gallery-lightbox");

if (galleryLightbox) {
    const lightboxImage = galleryLightbox.querySelector(
        ".gallery-lightbox-image"
    );

    const lightboxTitle = galleryLightbox.querySelector(
        ".gallery-lightbox-title"
    );

    const lightboxIllustrator = galleryLightbox.querySelector(
        ".gallery-lightbox-illustrator"
    );

    const galleryCloseButton = galleryLightbox.querySelector(
        ".gallery-lightbox-close"
    );

    const closeGalleryLightbox = () => {
        galleryLightbox.classList.remove("is-open");
        galleryLightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("gallery-lightbox-open");

        if (lightboxImage) {
            lightboxImage.src = "";
            lightboxImage.alt = "";
        }
    };

    document.addEventListener("click", (event) => {
        const button = event.target.closest(".gallery-image-button");

        if (!button) return;

        const item = button.closest(".gallery-full-item");
        const image = button.querySelector("img");

        if (!item || !image || !lightboxImage) return;

        const title = item.querySelector(".gallery-item-title");
        const illustrator = item.querySelector(
            ".gallery-item-illustrator"
        );

        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;

        if (lightboxTitle) {
            lightboxTitle.textContent = title?.textContent || "";
        }

        if (lightboxIllustrator) {
            lightboxIllustrator.textContent =
                illustrator?.textContent || "";
        }

        galleryLightbox.classList.add("is-open");
        galleryLightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("gallery-lightbox-open");

        galleryCloseButton?.focus();
    });

    galleryCloseButton?.addEventListener(
        "click",
        closeGalleryLightbox
    );

    galleryLightbox.addEventListener("click", (event) => {
        if (event.target === galleryLightbox) {
            closeGalleryLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            galleryLightbox.classList.contains("is-open")
        ) {
            closeGalleryLightbox();
        }
    });
}


/* =========================================
   Standing Illustration Lightbox
========================================= */

const standingLightbox = document.getElementById(
    "standing-lightbox"
);

if (standingLightbox) {
    const standingLightboxImage = standingLightbox.querySelector(
        ".standing-lightbox-image"
    );

    const standingLightboxTitle = standingLightbox.querySelector(
        ".standing-lightbox-title"
    );

    const standingLightboxCredit = standingLightbox.querySelector(
        ".standing-lightbox-credit"
    );

    const standingLightboxClose = standingLightbox.querySelector(
        ".standing-lightbox-close"
    );

    const closeStandingLightbox = () => {
        standingLightbox.classList.remove("is-open");
        standingLightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("standing-lightbox-open");

        if (standingLightboxImage) {
            standingLightboxImage.src = "";
            standingLightboxImage.alt = "";
        }
    };

    document.addEventListener("click", (event) => {
        const imageArea = event.target.closest(
            ".main-illustration-image, .costume-card-image"
        );

        if (!imageArea) return;

        const image = imageArea.querySelector("img");

        if (!image || !standingLightboxImage) return;

        const mainCard = imageArea.closest(
            ".main-illustration-card"
        );

        const costumeCard = imageArea.closest(
            ".costume-card"
        );

        let title = image.alt || "";
        let credit = "";

        if (mainCard) {
            const number = mainCard.querySelector(
                ".costume-number"
            )?.textContent || "";

            const name = mainCard.querySelector(
                ".costume-name"
            )?.textContent || "";

            title = `${number} ${name}`.trim();
        }

        if (costumeCard) {
            title =
                costumeCard.querySelector(
                    ".costume-card-title"
                )?.textContent ||
                image.alt ||
                "";

            credit =
                costumeCard.querySelector(
                    ".costume-card-credit"
                )?.textContent || "";
        }

        standingLightboxImage.src =
            image.currentSrc || image.src;

        standingLightboxImage.alt = image.alt;

        if (standingLightboxTitle) {
            standingLightboxTitle.textContent = title;
        }

        if (standingLightboxCredit) {
            standingLightboxCredit.textContent = credit;
            standingLightboxCredit.hidden = credit === "";
        }

        standingLightbox.classList.add("is-open");
        standingLightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add(
            "standing-lightbox-open"
        );

        standingLightboxClose?.focus();
    });

    standingLightboxClose?.addEventListener(
        "click",
        closeStandingLightbox
    );

    standingLightbox.addEventListener("click", (event) => {
        if (event.target === standingLightbox) {
            closeStandingLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            standingLightbox.classList.contains("is-open")
        ) {
            closeStandingLightbox();
        }
    });
}


/* =========================================
   Escape Key for Smartphone Menu
========================================= */

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        menuButton &&
        globalNav
    ) {
        globalNav.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    }
});