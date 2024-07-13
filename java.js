
const btnCnt = document.getElementById("share-button");
btnCnt.addEventListener("click", SelectToggleFunction, false);

window.addEventListener("resize", OnResize);

const avatarcontainer = document.getElementById("avatar-container");
const avatarimage = document.getElementById("avatar");
const p_username = document.getElementById("username");
const p_date = document.getElementById("date");
const div_userinfo = document.getElementById("user-info");

const sharebutton = document.getElementById("share-button");
const svg_sharebutton = document.getElementById("share-button-svg");

const share_msg = document.getElementById("share-msg");
const socialmediaicons = document.getElementById("social-media-icons");

const socialmediaiconspopup = document.getElementById("social-media-icons-popup");

function OnResize() {
    socialmediaiconspopup.style.display = "none";
    avatarimage.style.display = "block";
    p_username.style.display = "block";
    p_date.style.display = "block";
    div_userinfo.style.backgroundColor = "white";
    avatarcontainer.style.backgroundColor = "white";
    avatarcontainer.style.borderRadius = "0 0 0 15px";
    sharebutton.style.backgroundColor = "white";
    sharebutton.style.borderRadius = "0 0 15px 0";
    sharebutton.style.color = "black";
    svg_sharebutton.style.backgroundColor = "#ecf2f8";

    share_msg.style.display = "none";
    socialmediaicons.style.display = "none";

}

function SelectToggleFunction() {
    if(window.innerWidth < 870) { 
        ToggleActiveMobile();
     } else {
         ToggleActiveDesktop();
     }

}

function ToggleActiveMobile() { 
    if(!(avatarimage.classList.contains("hide"))) {
        avatarimage.classList.add("hide");
        avatarimage.style.display = "none";
        p_username.style.display = "none";
        p_date.style.display = "none";

        div_userinfo.style.backgroundColor = "#48556a";
        avatarcontainer.style.backgroundColor = "#48556a";
        avatarcontainer.style.borderRadius = "0 0 0 15px";
        sharebutton.style.backgroundColor = "#48556a";
        sharebutton.style.borderRadius = "0 0 15px 0";
        sharebutton.style.color = "white";
        svg_sharebutton.style.backgroundColor = "#6d7f97";

        share_msg.style.display = "block";
        socialmediaicons.style.display = "block";
    } else {
        avatarimage.classList.remove("hide");
        avatarimage.style.display = "block";
        p_username.style.display = "block";
        p_date.style.display = "block";
        
        div_userinfo.style.backgroundColor = "white";
        avatarcontainer.style.backgroundColor = "white";
        avatarcontainer.style.borderRadius = "0 0 0 15px";
        sharebutton.style.backgroundColor = "white";
        sharebutton.style.borderRadius = "0 0 15px 0";
        sharebutton.style.color = "black";
        svg_sharebutton.style.backgroundColor = "#ecf2f8";

        share_msg.style.display = "none";
        socialmediaicons.style.display = "none";
    }

}

function ToggleActiveDesktop() {
    if(!(socialmediaiconspopup.classList.contains("hide"))) {
        socialmediaiconspopup.classList.add("hide");
        socialmediaiconspopup.style.display = "none";

        svg_sharebutton.style.backgroundColor = "#ecf2f8";
        sharebutton.style.borderRadius = "0 0 15px 0";
        sharebutton.style.color = "black";
    } else {
        socialmediaiconspopup.classList.remove("hide");
        socialmediaiconspopup.style.display = "block";

        sharebutton.style.backgroundColor = "white";
        sharebutton.style.borderRadius = "0 0 15px 0";
        sharebutton.style.color = "white";

        svg_sharebutton.style.backgroundColor = "#48556a";
    }
}