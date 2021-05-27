function loadImageForViewImagePage() {
    function loadImageToElement(imageElementToSet) {
        fetch('/viewImage')
            .then((res) => {
                return res.json();
            }).then((imageJsonData) => {
                const imageBase64Data = imageJsonData.imageData;
                imageToLoad.src = 'data:image/png;base64,' + imageBase64Data;
            });
    }

    const imageToLoad = document.querySelector('.customImage');

    if (imageToLoad) {
        loadImageToElement(imageToLoad);
    }
}


const imageFeed = document.querySelector('.image-feed');

fetch('/viewImage/feed')
    .then((response) => {
        return response.json();
    })
    .then((imagesJsonData) => {
        const imageFeedDocumentFragment = new DocumentFragment();

        imagesJsonData.images.forEach((imageBufferAsString) => {
            const imageElementToAdd = document.createElement('img');
            imageElementToAdd.alt = "";
            imageElementToAdd.src = 'data:image/png;base64,' + imageBufferAsString;
            imageFeedDocumentFragment.append(imageElementToAdd);
        });

        imageFeed.append(imageFeedDocumentFragment);
    });


