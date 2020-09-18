const images = ["knee", "dance", "awards", "face-off", "champion", "flag"];
const imgs = document.querySelector(".imgs");
const mainImg = document.querySelector(".img-main");

//images array global, images are created dynamically

function displayImg(arr){
    // main img
    let img = document.createElement("img");
    img.src = `../media/gallery/${arr[0]}.jpg`;
    img.id = "current";
    mainImg.appendChild(img);  

    //img gallery
    for (let i = 0; i < arr.length; i++){ 
        img = document.createElement("img");
        img.src = `../media/gallery/${arr[i]}.jpg`
        imgs.appendChild(img);
    }
}

function imgClick(el){
    const opacity = 0.3;
    imgArr.forEach(image => (image.style.opacity = 1));

    current.src = el.target.src; 

    current.classList.add("fade-in");

    setTimeout(() => current.classList.remove("fade-in"), 500);

    el.target.style.opacity = opacity;
    
}

displayImg(images); 

const imgArr = document.querySelectorAll(".imgs img");
imgArr.forEach(element => {
    element.addEventListener('click', imgClick);
});





// Think about retrieving answer and which data structure would be the best for searching and comparing

// Secondary: Implement class for responsive design of input block

// ajax function for check input without reloading the page