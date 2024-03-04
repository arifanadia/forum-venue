function getConvertedValue(elementTd) {
    const element = document.getElementById(elementTd).innerText;
    const convertValue = parseInt(element);
    // console.log(convertValue);
    return convertValue;
}

