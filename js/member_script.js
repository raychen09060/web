let per = 0;
let id = null;

document.getElementById("home_button").onclick = home;

function home(){
    clearInterval(id);
    id = setInterval(frame, 7);
    function frame(){
        if(per >= 40){
            clearInterval(id);
            window.location.href = "home.html";
        }
        else{
            per ++;
            document.getElementById("card_container").style.opacity = (1-(per / 40));
            document.body.style.background = 'linear-gradient(to right, rgba(193, 118, 255, 0.873) 0%, rgba(112, 80, 217, 1) ' + (100 - (1.25 * per)) + '%)';
            document.getElementById("personal_image_button_container").style.width = per + '%';
            document.getElementById("personal_image_button").style.height = (0.75 * per) + "vh";
            document.getElementById("slogan").style.color = 'rgba(255, 255, 255, ' + (per/40) + ')';
        }
    }
}