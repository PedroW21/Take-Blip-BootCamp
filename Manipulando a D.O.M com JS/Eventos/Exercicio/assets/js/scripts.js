function changeMode(){
    changeClasses(); //boa pratica no JS criar uma função para uma tarefa especifica
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    pageTitle.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){

    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        pageTitle.innerHTML = darkMode + " ON";
        return
    }else{
        button.innerHTML = darkMode;
        pageTitle.innerHTML = lightMode + " ON";
    }
}

const darkModeClass = "dark-mode";
const button = document.getElementById("mode-selector");
const pageTitle = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];


button.addEventListener("click", changeMode);