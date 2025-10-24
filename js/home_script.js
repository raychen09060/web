let per = 40;
let id = null;

document.getElementById("members_button").onclick = members;
document.getElementById("events_button").onclick = events;

function members(){
    clearInterval(id);
    id = setInterval(frame, 7);
    function frame(){
        if(per <= 0){
            clearInterval(id);
            window.location.href = "members.html";
        }
        else{
            per --;
            document.body.style.background = 'linear-gradient(to right, rgba(193, 118, 255, 0.873) 0%, rgba(112, 80, 217, 1) ' + (100 - (1.25 * per)) + '%)';
            document.getElementById("personal_image_button_container").style.width = per + '%';
            document.getElementById("personal_image_button").style.height = (0.75 * per) + "vh";
            document.getElementById("slogan").style.color = 'rgba(255, 255, 255, ' + (per/40) + ')';
        }
    }
}

function events(){
    clearInterval(id);
    id = setInterval(frame, 7);
    function frame(){
        if(per <= 0){
            clearInterval(id);
            window.location.href = "events.html";
        }
        else{
            per --;
            document.body.style.background = 'linear-gradient(to right, rgba(193, 118, 255, 0.873) 0%, rgba(112, 80, 217, 1) ' + (100 - (1.25 * per)) + '%)';
            document.getElementById("personal_image_button_container").style.width = per + '%';
            document.getElementById("personal_image_button").style.height = (0.75 * per) + "vh";
            document.getElementById("slogan").style.color = 'rgba(255, 255, 255, ' + (per/40) + ')';
        }
    }
}