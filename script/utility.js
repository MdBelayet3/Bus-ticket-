// function for decrease total seat number
function decreaseTotalSeatNumber(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const decreaseValue = elementValue - 1;
    element.innerText = decreaseValue;
}

// function for Increase buy seat number
function increaseBuySeatNumber(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
    const elementValue = element.innerText;
    const intElementValue = parseInt(elementValue);
    const increaseValue = intElementValue + 1;
    element.innerText = increaseValue;
    return element
}

// function for add seat details
function SetSeatDetailsWhenWeClick(className){
    const elements = document.getElementsByClassName(className);
    for( const element of elements){
        element.classList.remove('hidden');
    }
}

// function for count total seat price
function countTotalPrice(elementId){
    const element = document.getElementById(elementId);
    let elementValue = element.innerText;
    let intElementValue = parseInt(elementValue)
    intElementValue = intElementValue + 550;
    element.innerText = intElementValue;

}

// function for discount seat price
function discountSeatPrice(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    console.log(elementValue);
}