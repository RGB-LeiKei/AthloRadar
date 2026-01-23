const domains = document.querySelectorAll(".absolute-domain");
const cardImgs = document.querySelectorAll(".card-pic");

cardImgs.forEach((cardImg, index) => {
    const imgWidth = parseFloat(
        getComputedStyle(cardImg).getPropertyValue("width")
    );
    const imgHeight = parseFloat(
        getComputedStyle(cardImg).getPropertyValue("height")
    );

    const domain = domains[index];
    if (!domain) return;

    domain.style.width = imgWidth + "px";
    domain.style.height = imgHeight + "px";
    console.log(imgWidth)
});

const details_description = document.querySelector(".details-description")

function checkboxAction(checkboxElem){
    if (checkboxElem.checked){
        details_description.style.display = "block"
    } else {
        details_description.style.display = "none"
    }
}
