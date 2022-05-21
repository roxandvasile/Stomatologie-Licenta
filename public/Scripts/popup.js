var popupViews = document.querySelectorAll('.popup-view');
var popupImgs = document.querySelectorAll('.popup-img');
var closeBtns = document.querySelectorAll('.close-btn');

var popup = function(popupClick) {
    popupViews[popupClick].classList.add('active');
}

popupImgs.forEach((popupImg, i) => {
    popupImg.addEventListener("click", () => {
        popup(i);
    });
});

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});