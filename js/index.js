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

