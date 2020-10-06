function navfunction() {
    let element = document.getElementById("navicons");
    if(element.classList.contains('show')) {
        element.classList.remove('show')
    }
    else {
        element.classList.add('show')
    }
}

function profunction() {
    let proelement = document.getElementById("pro-list");
    if(proelement.classList.contains('show')) {
        proelement.classList.remove('show')
    }
    else {
        proelement.classList.add('show')
    }
}