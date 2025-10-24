let container_per = 50;
let id = null;

document.getElementById("personal_image_button_container").style.width = (40 + 1.2 * container_per) + '%';
document.body.style.background = 'linear-gradient(to right, rgba(193, 118, 255, 0.873) 0%, rgba(112, 80, 217, 1) ' + (50 + 0.4 * container_per) + '%)';
document.getElementById("personal_image_button").onclick = start;
document.getElementById("personal_image_button").onmouseover = floating;
document.getElementById("personal_image_button").onmouseout = non_floating;

function floating(){
    if(container_per == 50){
        document.getElementById("personal_image_button").style.transform = "translateY(-2px)";
        document.getElementById("personal_image_button").style.boxShadow = "3px 6px 12px 0 rgba(0,0,0,.25)";
        document.getElementById("personal_image_button").style.cursor = "pointer";
    }
}

function non_floating(){
    document.getElementById("personal_image_button").style.transform = "none";
    document.getElementById("personal_image_button").style.boxShadow = "none";
    document.getElementById("personal_image_button").style.cursor = "auto";
}

function start() {
    clearInterval(id);
    id = setInterval(frame, 7);
    function frame(){
        if (container_per <= 0){
            document.getElementById("icon_button").style.display = "flex";
            document.getElementById("slogan_container").style.display = "flex";
            document.getElementById("options").style.display = "flex";
            clearInterval(id);
            id = setInterval(newframe, 7);
            let shade = 0;
            function newframe(){
                if(shade > 100){
                    clearInterval(id);
                    window.location.href = "home.html";
                }
                else{
                    shade ++;
                    document.getElementById("slogan").style.color = 'rgba(255, 255, 255, ' + (shade / 100) + ')';
                }
            }
        }
        else{
            if(container_per > 1){
                container_per -= container_per/60;
            }
            else{
                container_per -= 1/50;
            }
            document.getElementById("personal_image_button_container").style.width = (40 + 1.2 * container_per) + '%';
            document.body.style.background = 'linear-gradient(to right, rgba(193, 118, 255, 0.873) 0%, rgba(112, 80, 217, 1) ' + (50 + 0.4 * container_per) + '%)';
            document.getElementById("header").style.width = (100 - 2 * container_per) + '%';
        }
    }
}
