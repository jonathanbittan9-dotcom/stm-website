let check_navbar_clicks = 1
let easter_egg_count = 0
text_navbar()
easter_eggs()
homepage_text()
function text_navbar(){
    document.getElementById("homepage").textContent = "homepage";
    document.getElementById("navbar").prepend("steam and stem");
 }

function homepage_text(){
    document.getElementById("title").textContent = '"the best server ever created"';
    document.getElementById("discord").textContent = "Discord server:";
}
    function easter_eggs(){
        document.getElementById("navbar").onclick = function(){
        const egg = document.getElementById("easter_egg");
        if (check_navbar_clicks === 1){
            egg.textContent = "you found an easter egg";
            easter_egg_count+=1
            check_navbar_clicks+=1
        } else {
            egg.textContent = "You earned this easter egg!";
    }
        egg.classList.remove("pop");
        void egg.offsetWidth;
        egg.classList.add("pop");
        }
    }