//Obtinem id-urile elementelor si le stocam in variabile
var popupViews = document.querySelectorAll('.popup-view');
var popupImgs = document.querySelectorAll('.popup-img');
var closeBtns = document.querySelectorAll('.close-btn');

//Cand utilizatorul apasa pe imagine, popup-ul va fi vizibil
var popup = function (popupClick) {
    popupViews[popupClick].classList.add('active');
}

popupImgs.forEach((popupImg, i) => {
    popupImg.addEventListener("click", () => {
        popup(i);
    });
});

//Cand utilizatorul apasa pe butonul closeBtns, popup-ul se va inchide
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});