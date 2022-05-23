/* var starButtons = document.querySelectorAll('.star-view');

starButtons.forEach((starButton, i) => {
    starButton.addEventListener("click", () => {
        for (let index = 0; index < starButtons.length; index++) {
            starButtons[index].classList.remove('star-color');
        }

        window.localStorage.setItem(`review`, i + 1);

        for (let j = 1; j <= i; j++)
            starButtons[i - 1].classList.add('star-color');

        console.log(`Click pe ${i + 1}`);
    });
});

window.onload = () => {
    const rating = window.localStorage.getItem(`review`);
    for (let i = 1; i <= parseInt(rating); i++)
        starButtons[i - 1].classList.add('star-color');

    console.log(rating);
}; */

