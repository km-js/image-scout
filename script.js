const searchButton = document.querySelector('.input button');
const searchForm = document.querySelector('.search-card');
const searchBox = document.querySelector('.search-card input')
const showMoreBtn = document.querySelector('.show-more-btn');
const displayBox = document.querySelector('.display-card');

const accessKey = 'MEuoaAlzy-iZeJyj_qUHh167ELCpyChqTOXjM26Zl9s';
let keyword = '';
let page = 1;

async function searchImages() {
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results = data.results;

    if (page === 1) {
        displayBox.innerHTML = '';
    }

    results.map(result => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        displayBox.appendChild(imageLink);
    })
    showMoreBtn.style.display = 'block'
}

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", function () {
    page++;
    searchImages();
})