function onFavourite() {
    if (localStorage) {
        localStorage.setItem("applepie", true);
        window.location.reload();
    }
}

function onContentLoaded() {
    var favourite = document.getElementById('favourite');
    if (localStorage && localStorage.getItem('applepie') === 'true') {
        favourite.innerHTML = "Apple pie is one of your favourite";
    } else {
        favourite.innerHTML = "";
    }
}

window.addEventListener("DOMContentLoaded", (e) => onContentLoaded());