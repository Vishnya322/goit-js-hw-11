    import iziToast from "izitoast";
    import "izitoast/dist/css/iziToast.min.css";
    import SimpleLightbox from "simplelightbox";
    import "simplelightbox/dist/simple-lightbox.min.css";

    const gallery = document.getElementById('gallery'); 
    const form = document.getElementById('form'); 
    const input = document.getElementById('input');

    const paramsInfo = {
    key: "41508094-b690cca5e0d97ff8185874dce",
    q: "kat",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
    };

    form.addEventListener('submit', event => {
        event.preventDefault();
        
        const searchTerm = input.value.trim();
        paramsInfo.q = searchTerm;

        input.value = '';
        gallery.innerHTML = ''; 
        
        const searchParams = new URLSearchParams(paramsInfo);
        searchImg(searchParams);
      });
    function searchImg(searchParams) {
    const url = new URL("https://pixabay.com/api/");
    url.search = searchParams.toString();
    showLoader();
    fetch(url)
        .then(response => {
        if (!response.ok) {
        throw new Error("Sorry, there are no images matching your search query. Please try again!");
        }
        return response.json();
        })
        .then(({ hits }) => {
        const renderImg = hits.reduce((html, hit) => {
            return (
            html +
            `<li class="gallery-item">
                <a href=${hit.largeImageURL}>
                <img src=${hit.webformatURL} class="foto" alt=${hit.tags}/>
                </a>
                <div class="benefits">
                <div class="benefit-text">
                <span class="text-value">Likes</span><p class="number">${hit.likes}</p></div>
                <div class="benefit-text">
                <span class="text-value">Views</span><p class="number">${hit.views}</p></div>
                <div class="benefit-text">
                <span class="text-value">Comments</span><p class="number">${hit.comments}</p></div>
                <div class="benefit-text">
                <span class="text-value">Downloads</span><p class="number">${hit.downloads}</p></div>
                </div>
            </li>`
            );
        }, "");
        gallery.innerHTML = renderImg;
        
        const lightbox = new SimpleLightbox('.gallery a', {
            nav: true,
            captionDelay: 250,
            captionData: 'alt',
            close: true,
            enableKeyboard: true,
            docClose: true,
        });

        lightbox.refresh();
        hideLoader();

        })
        .catch(error => {
        iziToast.error({
            position: 'bottomCenter',
            message: error.message,
        });

        hideLoader();

        });
    }

    function showLoader() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'block';
        }
    }
    
    function hideLoader() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }