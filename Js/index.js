if(document.readyState === 'ready' || document.readyState === 'complete') {
    linkSpaceRegulation()
    linkSelected()
    header()
} else {
    document.addEventListener("readystatechange", (event) => {
        if (document.readyState == "complete") {
            linkSpaceRegulation()
            linkSelected()
            header()
        }
    });
}





function linkSpaceRegulation(){
    let links = document.getElementsByClassName('hlLink')

    for(let i = 0; i < links.length; i++){
        links[i].style.width = links[i].clientWidth + 1 + 'px'
    }
}


function linkSelected(){
    let links = document.getElementsByClassName('hlLink')
    let linkText = document.getElementsByClassName('hllText')

    for(let i = 0; i < links.length; i++){
        if(window.location.href == linkText[i].href){
            linkText[i].style.textDecoration = 'underline'
            linkText[i].style.fontWeight = 'bold'
        }
    }
}


function header(){
    let red = document.getElementsByClassName('heRed')
    let header = document.getElementById('header')
    let headerMobile = document.getElementById('headerMobile')
    let burger = document.getElementById('hBurger')
    
    let tracker = false

    burger.onclick = function(){
        burger.classList.toggle('hbSelected')
        header.classList.toggle('headerFixed')
        headerMobile.classList.toggle('headerMobileSelected')
        headerMobile.style.marginLeft = 0

        if(tracker == false){
            red[0].style.marginTop = header.clientHeight + 'px'
            tracker = true
        }else{
            red[0].style.marginTop = '0'
            tracker = false
        }
    }
}