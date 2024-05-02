
productOne = document.querySelector('.product-one');
productTwo = document.querySelector('.product-two');
productThree = document.querySelector('.product-three');
productFour = document.querySelector('.product-four');
carouselOne = document.querySelector('.carouselone');
carouselTwo = document.querySelector('.carouseltwo');
carouselThree = document.querySelector('.carouselthree');
carouselFour = document.querySelector('.carouselfour');
i = document.querySelector('.i');
ii = document.querySelector('.ii');
iii = document.querySelector('.iii');
iv = document.querySelector('.iv');
one = document.querySelector('.one');
two = document.querySelector('.two');
three = document.querySelector('.three');
four = document.querySelector('.four');
five = document.querySelector('.five');
computed = document.querySelector('.computed')
previousIcon = document.querySelector('.peivious-icon');
closeOver = document.querySelector('.close-over')
overlaySecond = document.querySelector('.overlay-second');
smallS = document.querySelector('.smalss-child');
big = document.querySelector('.for-click');
oneNext = document.querySelector('.one-next');
twoNext = document.querySelector('.two-next');
threeNext = document.querySelector('.three-next');
fourNext = document.querySelector('.four-next');
body=document.getElementsByName('body');
cartClose = document.querySelector('.for-cart-close');
edit = document.querySelector('.editt')
chutiya= document.querySelector('.chutiya')


let forCollection = document.querySelector('.for-collection')


forCollection.addEventListener('click', () => {
    overlaySecond.classList.toggle('none');
})
closeOver.addEventListener('click', () => {
    overlaySecond.classList.add('none');
})



productOne.addEventListener('click', () => {
    carouselOne.classList.toggle('none');
    carouselTwo.classList.add('none');
    carouselThree.classList.add('none')
    carouselFour.classList.add('none')
    carouselThree.classList.add('none')
    ii.classList.add('none');
    iii.classList.add('none');
    iv.classList.add('none');
    i.classList.toggle('none');

});

productTwo.addEventListener('click', () => {
    carouselTwo.classList.toggle('none');
    carouselOne.classList.add('none');
    carouselThree.classList.add('none')
    carouselFour.classList.add('none')
    ii.classList.toggle('none');
    i.classList.add('none');
    iii.classList.add('none');
    iv.classList.add('none')
    
});

productThree.addEventListener('click', () => {
    
    carouselOne.classList.add('none');
    carouselTwo.classList.add('none');
    carouselThree.classList.toggle('none');
    carouselFour.classList.add('none')
    iv.classList.add('none')
    ii.classList.add('none');
    iii.classList.toggle('none');
    i.classList.add('none');
    
    
});
productFour.addEventListener('click', () => {
    
    carouselOne.classList.add('none');
    carouselTwo.classList.add('none');
    carouselThree.classList.add('none');
    carouselFour.classList.toggle('none');
    ii.classList.add('none');
    iii.classList.add('none');
    i.classList.add('none');
    iv.classList.toggle('none');
});


oneNext.addEventListener('click', () => {
    carouselOne.classList.add('none');
    carouselTwo.classList.remove('none');
    i.classList.add('none')
    ii.classList.remove('none')
    oneNext.classList.add('none')
    one.classList.add('none');
    two.classList.remove('none');
})

twoNext.addEventListener('click', () => {
    carouselTwo.classList.add('none');
    carouselThree.classList.remove('none');
    twoNext.classList.add('none')
    threeNext.classList.remove('none')
    ii.classList.add('none')
    iii.classList.remove('none')
    two.classList.add('none');
    three.classList.remove('none');
})

threeNext.addEventListener('click', () => {
    carouselThree.classList.add('none');
    carouselFour.classList.remove('none');
    threeNext.classList.add('none')
    fourNext.classList.remove('none')
    iii.classList.add('none')
    iv.classList.remove('none')
    three.classList.add('none');
    four.classList.remove('none');
})


four.addEventListener('click', () => {
    carouselThree.classList.remove('none');
    carouselFour.classList.add('none');
    threeNext.classList.remove('none')
    fourNext.classList.add('none')
    iii.classList.remove('none')
    iv.classList.add('none')
    three.classList.remove('none');
    four.classList.add('none');
})

three.addEventListener('click', () => {
    carouselTwo.classList.remove('none');
    carouselThree.classList.add('none');
    twoNext.classList.remove('none')
    threeNext.classList.add('none')
    ii.classList.remove('none')
    iii.classList.add('none')
    two.classList.remove('none');
    three.classList.add('none');
})
two.addEventListener('click', () => {
    carouselOne.classList.remove('none');
    carouselTwo.classList.add('none');
    i.classList.remove('none')
    ii.classList.add('none')
    oneNext.classList.remove('none')
    twoNextNext.classList.add('none');
    one.classList.remove('none');
    two.classList.add('none');
    
})






// let plus = document.getElementsByClassName('plus');
// let minus = document.getElementsByClassName('minus');
let quantity = document.querySelector('.quantity');

let init = 0;

function forPlus(){
    inits = ++init;
    quantity.innerText = inits;
}
 function forMinus() {
    initss = init--;
    quantity.innerText = initss;
}

let avatars = document.querySelector('.avatars')
let cartSession = document.querySelector('.cart-session');
let cartSessiontwo = document.querySelector('.cart-session-item');
let cartIcon = document.querySelector('.cart-icon')
let none = document.querySelector('.none');


cartIcon.addEventListener('click',()=>{
    cartSession.classList.toggle('chutiya')    
})





let addImg = document.querySelector('.add-img')
let button = document.querySelector('.dot-button')
let cSession = document.querySelector('.for-c-session')
let emptyCart = document.querySelector('.empty-cart');
let addCart = document.querySelector('.add-item-box');
let grater = 1;
let round = document.querySelector('.round')
let multiplyValue =document.querySelector('.multy-item')
let dollar = '$'
let point = '.00'
let totalP= document.querySelector('.add-total')
let addP = document.querySelector('.add-price')
let pervIcon = document.querySelector('.perv-icons')
let nextIcon = document.querySelector('.next-icons')

function clickFunc(){
    if(quantity.innerText >= 1){
        emptyCart.classList.add('none')
        addCart.classList.remove('none')
        multiplyValue.innerText = quantity.innerText
        totalP.innerText = dollar + 125 * multiplyValue.innerText + point
        round.classList.remove('none')
        round.innerText = quantity.innerText
        addImg.innerHTML = big.innerHTML

    }else if(quantity.innerText <= 0){
        emptyCart.classList.remove('none')
        round.classList.add('none')
        addCart.classList.add('none')
    }

}



let w = document.querySelector('.w')
let x = document.querySelector('.x')
let y = document.querySelector('.y')
let z = document.querySelector('.z')
let p = document.querySelector('.p')
let q = document.querySelector('.q')
let r = document.querySelector('.r')
let s = document.querySelector('.s')


let menu = document.querySelector('.menu');
let navItem = document.querySelector('.nav-items')
let closeMenu = document.querySelector('.close-menu');
let anyOne = document.querySelector('.anyone')


function addRemoveClasses() {
navItem.classList.remove('anyone');
}


function addsRemoveClasses() {
navItem.classList.toggle('anyone');
}
// Select image elements
const image1 = document.querySelector('.imagesoo');
const image2 = document.querySelector('.imagesoo1');
const image3 = document.querySelector('.imagesoo2');
const image4 = document.querySelector('.imagesoo3');

// Add click event listeners
image1.addEventListener('click', () => {
// Show image 1, hide others
image1.classList.add('none');
image2.classList.remove('none');
image3.classList.add('none');
image4.classList.add('none');
});

image2.addEventListener('click', () => {
    // Show image 2, hide others
    image1.classList.add('none');
    image2.classList.add('none');
    image3.classList.remove('none');
    image4.classList.add('none');
});

image3.addEventListener('click', () => {
// Show image 3, hide others  
image1.classList.add('none');
image2.classList.add('none');
image3.classList.add('none');
image4.classList.remove('none');
});

image4.addEventListener('click', () => {
// Show image 4, hide others
image1.classList.remove('none');
image2.classList.add('none');
image3.classList.add('none');
image4.classList.add('none');
});










// cartClose.addEventListener('click',()=>{
    //    cartSession.classList.add('chutiya')
    // })









// fourNext.addEventListener('click',()=>{
    //     carouselFour.classList.add('none');
    //     carouselOne.classList.toggle('none');
    //     fourNext.classList.add('none');
    //     oneNext.classList.toggle('none')
    
    // })
// four.addEventListener('click', () => {
//     carouselOne.classList.add('none');
//     carouselTwo.classList.add('none');
//     carouselFour.classList.toggle('none');
//     carouselThree.classList.add('none');
//     four.classList.add('none');
//     i.classList.add('none');
//     iv.classList.toggle('none')
//     three.classList.add('none')
//     two.classList.add('none')
//     one.classList.add('none')
// })
// three.addEventListener('click', () => {
//     carouselOne.classList.toggle('none');
//     carouselTwo.classList.add('none');
//     carouselFour.classList.add('none');
//     carouselThree.classList.add('none');
//     three.classList.add('none');
//     two.classList.toggle('none');
//     ii.classList.add('none')
//     i.classList.toggle('none')
// })
// // computed.addEventListener('click',()=>{

// // })
// two.addEventListener('click', () => {
//     carouselOne.classList.add('none');
//     carouselTwo.classList.add('none');
//     carouselFour.classList.toggle('none');
//     carouselThree.classList.add('none');
//     two.classList.add('none');
//     one.classList.toggle('none');
//     i.classList.add('none');
//     iv.classList.toggle('none');

// })
// one.addEventListener('click', () => {
//     carouselOne.classList.add('none');
//     carouselThree.classList.add('none')
//     carouselTwo.classList.toggle('none')
//     carouselFour.classList.add('none');
//     one.classList.add('none');
//     three.classList.add('none');
//     two.classList.toggle('none');
//     iii.classList.add('none');
//     ii.classList.toggle('none');
// })
// five.addEventListener('click', () => {
//     carouselOne.classList.add('none');
//     carouselThree.classList.toggle('none')
//     carouselTwo.classList.add('none')
//     carouselFour.classList.add('none');
//     five.classList.add('none');
//     one.classList.toggle('none');
//     iv.classList.add('none');
//     iii.classList.toggle('none');
// })







