{
    // Modify background color of body with ternary operator.



    const changeBodyBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-changeBackgroundButton__themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
    };

    const bodyBackgroundInit = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", (changeBodyBackground));
    };

    bodyBackgroundInit();

    // hide and show image on click event with instruction if/else

    const hideMyPhotoButton = document.querySelector(".js-hide");

    const onChangeVisiblePhoto = () => {
        const myPhoto = document.querySelector(".js-myPhoto");

        myPhoto.classList.toggle("js-visible");

        hideMyPhotoButton.innerText = myPhoto.classList.contains("js-visible") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";

    }

    const hidePhotoButtonInit = () => {
        hideMyPhotoButton.addEventListener("click", (onChangeVisiblePhoto));
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
