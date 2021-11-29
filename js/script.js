{
    // Modify background color of body with ternary operator and change background color of button with conditional statements.

    const backgroundButton = document.querySelector(".js-header__backgroundButton");

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-header__themeName");

        body.classList.toggle("js-body--dark");
        themeName.innerText = body.classList.contains("js-body--dark") ? "jasne" : "ciemne";


        if (body.classList.contains("js-body--dark")) {
            backgroundButton.classList.remove("js-body--dark");
        } else {
            backgroundButton.classList.add("js-body--dark");
        }
    };

    const backgroundButtonInit = () => {
        backgroundButton.addEventListener("click", (onChangeBackgroundClick));
    };

    backgroundButtonInit();

    // hide and show image on click event with instruction if/else

    const deletePhotoButton = document.querySelector(".js-section__deletePhotoButton");

    const onChangeVisiblePhoto = () => {
        const myPhoto = document.querySelector(".js-section__myPhoto");

        if (myPhoto.classList.contains("visible")) {
             myPhoto.classList.remove("visible");
            deletePhotoButton.innerText = "Ukryj zdjęcie";
        }
        else {
            myPhoto.classList.add("visible");
            deletePhotoButton.innerText = "Pokaż zdjęcie";
        }
    };

    const deletePhotoButtonInit = () => {
        deletePhotoButton.addEventListener("click", (onChangeVisiblePhoto));
    };

    deletePhotoButtonInit();

    // Handling the form on submit

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", () => {
        console.log("Formularz został wysłany");
    });

    form.addEventListener("reset", () => {
        console.log("Formularz został zresetowany");
    });
}
