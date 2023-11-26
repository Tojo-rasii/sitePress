const profile = document.getElementById('profile');
const closes = document.getElementById('close');
const popLog = document.querySelector('.Pop-Log');

profile.addEventListener("click", function () {
    popLog.style.display = "block";
    profile.style.display = "none";
    closes.style.display = "block";
})

closes.addEventListener("click", function () {
    popLog.style.display = "none";
    profile.style.display = "block";
    closes.style.display = "none";
});

// SCROLL WHEN SCROLL TO TOP 
// Définir la hauteur à partir de laquelle le style display:none doit être appliqué
const scrollTriggerHeight = 30; // Vous pouvez ajuster cette valeur selon vos besoins

// Fonction pour gérer le changement d'affichage du premier nav
function handleScroll() {
    const firstNav = document.querySelector('header.Navbar div:nth-child(1)');

    // Si la position de défilement verticale est supérieure à la hauteur de déclenchement
    if (window.scrollY > scrollTriggerHeight) {
        firstNav.style.display = 'none';
    } else {
        firstNav.style.display = 'block';
    }
}

// Ajouter un écouteur d'événements pour détecter le défilement de la page
window.addEventListener('scroll', handleScroll);

// Exécutez handleScroll() au chargement initial pour définir l'état initial
handleScroll();


//  FOREACH BOUCLE // POLITIQUE PHOTOS
const newsData = [
    {
        type: "Politique",
        imageUrl: "../Site-PressNews/tools/images/antalaha.jpg",
        title: "Remobilisation de la base du TGV a ANTSIRANANA",
        description: "Descente du president de la republique dans la commune rurale d'antsambalahy <br>Accompagnement du president lors de l'inauguration de la nouvelle route ambilobe vohemar",
        publishDate: "01/01/2023",
    },
    {
        type: "sport",
        imageUrl: "../Site-PressNews/tools/images/anatalaha2.jpg",
        title: "Title news 2",
        description: "Descente du president de la republique dans la commune rurale d'antsambalahy <br>Accompagnement du president lors de l'inauguration de la nouvelle route ambilobe vohemar",
        publishDate: "02/01/2023",
    },
    {
        type: "culturel",
        imageUrl: "../Site-PressNews/tools/images/cosef.jpg",
        title: "Title news 3",
        description: "Descente du president de la republique dans la commune rurale d'antsambalahy <br>Accompagnement du president lors de l'inauguration de la nouvelle route ambilobe vohemar",
        publishDate: "02/01/2023",
    },
    // Ajoutez d'autres articles au besoin
];


// Sélectionnez le conteneur où vous ajouterez les articles
const newsContainer = document.getElementById('newsContainer');


// Utilisez forEach pour itérer sur chaque objet d'article
newsData.forEach(article => {
    // Créez un nouvel élément div pour chaque article
    const divElement = document.createElement('div');
    // Ajoutez une classe CSS basée sur le type d'article
    divElement.classList.add(article.type.toLowerCase());

    // Structure HTML de chaque article
    divElement.innerHTML = `
      <article>
        <picture>
          <img src="${article.imageUrl}" alt="image">
        </picture>
      </article>
      <article class="voir-plus" data-type="${article.type}" data-type="${article.imageUrl}" data-title="${article.title}" data-description="${article.description}" data-publishDate="${article.publishDate}">
      <span>${article.type}</span>
        <span>${article.title}</span>
        <span>${article.description}</span>
        <p>..voir plus</p>
        <span>Publier le ${article.publishDate}</span>
      </article>
    `;
 // Ajoutez un gestionnaire de clic à l'élément "voir plus"
 const voirPlusElement = divElement.querySelector('.voir-plus');
 voirPlusElement.addEventListener('click', () => redirectToArticle(article));
    // Ajoutez le nouvel élément div au conteneur
    newsContainer.appendChild(divElement);
    
});
// Fonction pour rediriger vers la nouvelle page avec les informations sur l'article
function redirectToArticle(article) {
    // Créez une URL avec les informations de l'article
    const url = `article.html?type=${article.type}&imageUrl=${encodeURIComponent(article.imageUrl)}&title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(article.description)}&publishDate=${article.publishDate}`;

    // Redirigez vers la nouvelle page
    window.location.href = url;
}


// search


// POLITIQUE VIDEO
//  FOREACH BOUCLE
const videoData = [
    {
        imageUrl:"../Site-PressNews/tools/images/cosef.jpg",
        videoUrl: "../Site-PressNews/tools/video/Farao - Raha avelanao ( Nouveauté clip gasy 2023).mp4",
        type: "politique",
        description: "Description for news 1...",
        publishDate: "01/01/2023",
    },
    {
        imageUrl:"../Site-PressNews/tools/images/silvain.jpg",
        videoUrl: "../Site-PressNews/tools/video/Farao - Raha avelanao ( Nouveauté clip gasy 2023).mp4",
        type: "sport",
        description: "Description for news 2...",
        publishDate: "01/01/2023",
    },
    {
        imageUrl:"../Site-PressNews/tools/images/silvain.jpg",
        videoUrl: "../Site-PressNews/tools/video/Farao - Raha avelanao ( Nouveauté clip gasy 2023).mp4",
        type: "social",
        description: "Description for news 3...",
        publishDate: "01/01/2023",
    }
    // Ajoutez d'autres articles au besoin
];

// Sélectionnez le conteneur où vous ajouterez les articles
// Sélectionnez le conteneur où vous ajouterez les articles
const newsVideo = document.getElementById('newsVideo');

// Utilisez forEach pour itérer sur chaque objet d'article
videoData.forEach(video => {
    // Créez un nouvel élément div pour chaque article
    const divElement = document.createElement('div');

    // Structure HTML de chaque article
    divElement.innerHTML = `
        <article>
            <picture>
                <ion-icon name="play-circle" id="play-circle"></ion-icon>
                <video poster="${video.imageUrl}" class="video-article" data-type="${video.type}" data-description="${video.description}" data-publishDate="${video.publishDate}">
                    <source src="${video.videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </picture>
        </article>
        <article>
            <span>${video.type}</span>
            <span>${video.description}</span>
            <span>${video.publishDate}</span>
        </article>
    `;

    // Ajoutez un gestionnaire de clic à l'élément vidéo
    const videoElement = divElement.querySelector('.video-article');
    videoElement.addEventListener('click', () => redirectToVideo(video));

    // Ajoutez le nouvel élément div au conteneur
    newsVideo.appendChild(divElement);
    divElement.classList.add(video.type.toLowerCase());
});

// Fonction pour rediriger vers la nouvelle page avec les informations sur la vidéo
function redirectToVideo(video) {
    // Créez une URL avec les informations de la vidéo
    const url = `video.html?type=${video.type}&description=${encodeURIComponent(video.description)}&publishDate=${video.publishDate}&videoUrl=${video.videoUrl}&imageUrl=${video.imageUrl}`;

    // Redirigez vers la nouvelle page
    window.location.href = url;
}




// ZONE PUBLICITAIRE
// Exemple de JavaScript pour charger la publicité
window.onload = function() {
    var zonePublicite = document.getElementById('zonePublicite');

    // Remplacez le contenu de la div avec le code de votre publicité telma par exemple
    zonePublicite.innerHTML = '<img src="../Site-PressNews/tools/images/" alt="Publicité">';
}


