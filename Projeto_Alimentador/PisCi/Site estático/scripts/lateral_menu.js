const menu = document.querySelector(".lateral_menu");
const profile = document.querySelector(".profile_wrapper")
const SeeProfile = document.querySelector(".see_profile")
const imgProfile = document.querySelector(".profile_lateral_menu ")
const menuLink = document.querySelectorAll(".menu_link")

function toggle_menu (btn){
    menu.classList.toggle("full_menu")
    btn.classList.toggle("arrow_trans")
    profile.classList.toggle("open_profile")
    SeeProfile.classList.toggle("hidden")
    imgProfile.classList.toggle("img_size_max")
    menuLink.forEach(element => {
        element.classList.toggle("hidden")
    });
}