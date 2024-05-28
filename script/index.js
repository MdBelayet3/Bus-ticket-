// function for buy ticket button that scroll in buy ticket section
function buyTicket(){
    const ticketSection = document.getElementById('ticket-section');
    ticketSection.scrollIntoView({ behavior: 'smooth' });
}

// function for seat select
const seats = document.getElementsByClassName('seat');
for(const seat of seats){
    seat.addEventListener('click',function(){
        seat.style.backgroundColor = '#1DD100'
        seat.style.color = 'white'
        decreaseTotalSeatNumber('seat-number');
        increaseBuySeatNumber('increase-seat');
        SetSeatDetailsWhenWeClick('seat-details');
        countTotalPrice('total-price');
        countTotalPrice('discounted-price');
    })
}

// function when we get input in input field
const textInput = document.getElementById('coupon-field');
const submitButton = document.getElementById('coupon-btn')
textInput.addEventListener('input', function() {
    // Enable the button if the input field is not empty
    if (textInput.value.trim() !== "") {
        submitButton.disabled = false;
    } else {
        // Disable the button if the input field is empty
        submitButton.disabled = true;
    }
});
// function for discount seat price 

submitButton.addEventListener('click',function(){
    const offer15 = 'new15';
    const offer20 = 'couple20'
    const peopleCouponCode = textInput.value.toLowerCase();
    const totalPrice =document.getElementById('total-price');
    const totalPriceValue = totalPrice.innerText;
    const discountedPrice = document.getElementById('discounted-price');
    if(peopleCouponCode === offer15){
        const discount15 = totalPriceValue - (totalPriceValue * 0.15);
        discountedPrice.innerText = discount15;
    }
    else if(peopleCouponCode === offer20){
        const discount20 = totalPriceValue - (totalPriceValue * 0.2);
        const discountedPrice = document.getElementById('discounted-price');
        discountedPrice.innerText = discount20;
    }
    else{
        discountedPrice.innerText = totalPriceValue;
    }

})


function seat(){
    console.log('I am clicked a seat');
}
