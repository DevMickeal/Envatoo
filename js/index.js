function currentLink () {
    const curPage = document.URL;
    const links = document.getElementByTagName ('a');
    for (let of links) {
        if (links.href == curPage) {
            link.classList.add ("active");

        }
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        currentLink()
    }
};

function openLink (evt, linkName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName ("tabcontent");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
        for (i=0; i < tablinks.length; i++){
            tablinks[i].className = tablinks [i].className.replace ("active", "");
        }
        document.getElementsById(linkName).style.display="block";
        evt.currentTarget.className += "active";
}


