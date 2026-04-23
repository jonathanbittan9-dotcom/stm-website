let check_navbar_clicks = 1
let easter_egg_count = 0
text()
easter_eggs()
function text(){
    document.getElementById("navbar").textContent = "steam and stem";
    document.getElementById("navbar").onclick = function(){
        if (check_navbar_clicks === 1){
            document.getElementById("easter_egg").textContent = "you found an easter egg";
            easter_egg_count+=1
            check_navbar_clicks+=1
        } else {    
            document.getElementById("easter_egg").textContent = "You earned this easter egg!";
        }
    }
    function easter_eggs(){

    }
}
