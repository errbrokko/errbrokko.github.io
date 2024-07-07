const btnCnt = document.getElementById("share-button");
btnCnt.addEventListener("click", ToggleActive, false);

const userinfoshare = document.getElementById("user-info-share");
const userinfoshareactive = document.getElementById("user-info-share-active");
const socialmediaicons = document.getElementById("social-media-icons");

const avatarimage = document.getElementById("avatar");
const p_username = document.getElementById("username");
const p_date = document.getElementById("date");
const p_sharemsg = document.getElementById("share-msg");

const svg_sharebutton = document.getElementById("share-button-svg");

const socialmediapopup = document.getElementById("social-media-icons-popup");

function ToggleActive() {
    if(window.innerWidth < 870) {
        // set share button inactive
        if(userinfoshare.classList.contains("user-info-share-active")) {
            userinfoshare.classList.remove("user-info-share-active");

            avatarimage.style.display = "block";
            p_username.style.display = "block";
            p_date.style.display = "block";

            p_sharemsg.style.display = "none";
            socialmediaicons.style.display = "none";
            svg_sharebutton.style.color = "currentColor";
            svg_sharebutton.style.backgroundColor = "#ecf2f8";

        // set share button active
        } else {
            userinfoshare.classList.add("user-info-share-active");

            avatarimage.style.display = "none";
            p_username.style.display = "none";
            p_date.style.display = "none";

            p_sharemsg.style.display = "block";
            socialmediaicons.style.display = "flex";
            svg_sharebutton.style.color = "white";
            svg_sharebutton.style.backgroundColor = "#6d7f97";

        }
    } else {
        if(socialmediapopup.classList.contains("social-media-icons-popup-active")) {
            socialmediapopup.classList.remove("social-media-icons-popup-active");
            svg_sharebutton.style.color = "currentColor";
            svg_sharebutton.style.backgroundColor = "#ecf2f8";

        } else {
            socialmediapopup.classList.add("social-media-icons-popup-active");
            socialmediapopup.style.backgroundColor = "#6d7f97";
            svg_sharebutton.style.color = "white";
            svg_sharebutton.style.backgroundColor = "#6d7f97";
        }
    }
    

}