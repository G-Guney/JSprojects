let myDiv = document.getElementById("my-div");
//detection touch devbice

function isTouchDevice(){
    try {
        //we try to create TouchEvent. It would fail for desktops an throw error
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e) {
        return false;
    }
}

const move = (e) => {
    //try , catch to avoid any errors for touch screens(Error throw when doesn't move this finger)
    try {
        //pageX and PageY return the position of client's cursor from top left of screen
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }
    catch(e){}
    // set left and top pf div based on mouse position
    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
}
//for mouse

document.addEventListener("mousemove",(e) => {
    move(e);
});

//for touch
document.addEventListener("touchmove", (e) => {
    move(e);
});