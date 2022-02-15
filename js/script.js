const branchIcon = document.querySelectorAll(".container__icon");
const builderIcon = document.getElementById("builderIcon");
const builderMessage = document.getElementById("builderMessage");
const branchMessage = document.querySelectorAll(".container__message");
const numberBlocks = document.querySelectorAll(".container__block_number");

branchIcon.forEach((e,i) => {
    e.addEventListener('click', () => {
        branchIcon.forEach((el, ind) => {
            if (e != el) {
                branchMessage[ind].classList.remove("container__message_active");
            }
        })
        console.log(branchMessage[i].classList);
        branchMessage[i].classList.toggle("container__message_active");
    })
}) 

builderIcon.addEventListener('click', () => {
    builderMessage.classList.toggle("container__message_active");
})

numberBlocks.forEach((e, i) => {
    e.addEventListener('click', () => {
        numberBlocks.forEach(el => {
            console.log(e == el);
            if (e != el) {
                el.parentElement.classList.remove("active");
            }
        })
        e.parentElement.classList.toggle("active");
    })
})

const input = document.querySelector( '.container__range' );
const messageBox = document.querySelector( '.container__messageBox' );
input.addEventListener( 'input', function( ) {
    input.style.background = 'linear-gradient(to right, #000 0%, #000 '+input.value +'%, #fff ' + input.value + '%, white 100%)';
    messageBox.style.left = input.value*7.5 + "px";
    messageBox.innerHTML = convert(input.value);
});

function convert(value) {
    let result = '';
    value *= 50000000;
    if (value >= 1000000000) {
        value /= 1000000000;
        result+=value+" млрд"
    } else {
        result+=value/1000000+" млн"
    }
    return result;
}