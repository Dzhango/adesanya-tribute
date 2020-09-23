
//images array global, images are created dynamically
// const images = ["knee", "dance", "awards", "face-off", "champion", "flag"];
const imgArr = document.querySelectorAll(".imgs img");
const current = document.querySelector(".img-main img");

// function displayImg(arr){
//     // main img
//     let img = document.createElement("img");
//     img.src = `../media/gallery/${arr[0]}.jpg`;
//     img.id = "current";
//     mainImg.appendChild(img);  

//     //img gallery
//     for (let i = 0; i < arr.length; i++){ 
//         img = document.createElement("img");
//         img.src = `../media/gallery/${arr[i]}.jpg`
//         imgs.appendChild(img);
//     }
// }

function imgClick(el){
    const opacity = 0.3;
    imgArr.forEach(image => (image.style.opacity = 1));

    current.src = el.target.src;    

    current.classList.add("fade-in");

    //give half a second for transition
    setTimeout(() => current.classList.remove("fade-in"), 500);

    el.target.style.opacity = opacity;
}

imgArr.forEach(element => {
    element.addEventListener('click', imgClick);
});