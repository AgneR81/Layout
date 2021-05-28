"use strict";

const galleryImg = ['1.jpeg', '2.jpeg', '3.jpeg'];

console.log(galleryImg[0]);

let where = document.querySelector('.img__wrap');
let leftArrow = document.querySelector('.left__arrow');
let rightArrow =  document.querySelector('.right__arrow');

let HTML = '';
let position = 0;

function showGallery(index) {

    rightArrow.addEventListener('click', () => {
        index++;
        if (index > galleryImg.length - 1) {
            index = 0;
        }
        console.log(index);
    });



    HTML +=  `<img src="./img/gallery/${galleryImg[index]}" alt="pic">`;
    where.innerHTML = HTML;
      
}

showGallery(position);






// import rightArrow from './';