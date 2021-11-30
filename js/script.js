{
    // Modify background color of body with ternary operator.



    const changeBodyBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-header__themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
    };

    const bodyBackgroundInit = () => {
        const headerButton = document.querySelector(".js-header__button");
        headerButton.addEventListener("click", (changeBodyBackground));
    };

    bodyBackgroundInit();

    // hide and show image on click event with instruction if/else

    const hidePhotoButton = document.querySelector(".js-section__hidePhotoButton");

    const onChangeVisiblePhoto = () => {
        const myPhoto = document.querySelector(".js-section__myPhoto");

        myPhoto.classList.toggle("visible");

        hidePhotoButton.innerText = myPhoto.classList.contains("visible") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";

    }

    const hidePhotoButtonInit = () => {
        hidePhotoButton.addEventListener("click", (onChangeVisiblePhoto));
    };

    hidePhotoButtonInit();

    // Handling the form on submit

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", () => {
        console.log("Formularz został wysłany");
    });

    form.addEventListener("reset", () => {
        console.log("Formularz został zresetowany");
    });
}
