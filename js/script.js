{
    // Modify background color of body with ternary operator.

    const changeBodyBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-changeBackgroundButton__themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
    };

    const onClickChangeBodyBackground = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", (changeBodyBackground));
    };

    // Changing visibility of photo on click event with toggle

    const visibleButton = document.querySelector(".js-visible");

    const changeVisiblePhoto = () => {
        const myPhoto = document.querySelector(".js-myPhoto")

        myPhoto.classList.toggle("js-hide");
        visibleButton.innerText = myPhoto.classList.contains("js-hide") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";

    }

    const onCLickVisiblePhoto = () => {

        visibleButton.addEventListener("click", (changeVisiblePhoto));
    };

    // Handling the form on submit and reset

    const form = document.querySelector(".js-form");

    const onFormSubmit = () => {

        form.addEventListener("submit", () => {
            console.log("Formularz został wysłany");
        })
    }

    const onFormReset = () => {
        form.addEventListener("reset", (e) => {
            e.preventDefault();

            console.log("Formularz został zresetowany");
        });
    }

    // Collapse all functions in the one init function

    const init = () => {

        onClickChangeBodyBackground();
        onCLickVisiblePhoto();
        onFormSubmit();
        onFormReset();
    }

    init();

}