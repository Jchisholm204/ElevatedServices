/**
 * @author Jacob Chisholm
 * 
 */

function windowResize(){
    const platform = navigator.userAgent;
    let deviceType = "desktop";

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(platform)) {
        deviceType = "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(platform)) {
        deviceType = "mobile";
    }

    const card_main_text = document.getElementById("card-main_text");

    if(window.innerWidth < 600 || deviceType === "mobile"){
        card_main_text.style.width = "100%";
    }
    else if(window.innerWidth < 900){
        card_main_text.style.width = "80%";
    }
    else{
        card_main_text.style.width = "60%";
    }
}

window.onload = () => {
    windowResize();
}

window.addEventListener("resize", windowResize, true);
