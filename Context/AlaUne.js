const profile = document.getElementById('profile');
const closes = document.getElementById('close');
const popLog = document.querySelector('.Pop-Log');

profile.addEventListener("click", function () {
    popLog.style.display = "block";
    profile.style.display = "none";
    closes.style.display = "block";
})

closes.addEventListener("click", function () {
    popLog.style.background = "red";
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
        imageUrl: "../tools/images/cosef.jpg",
        title: "Title news 1",
        description: "Description for news 1...",
        publishDate: "01/01/2023",
    },
    {
        type: "sport",
        imageUrl: "../tools/images/cosef.jpg",
        title: "Title news 2",
        description: "Description for news 2...",
        publishDate: "02/01/2023",
    },
    {
        type: "culturel",
        imageUrl: "../tools/images/cosef.jpg",
        title: "Title news 3",
        description: "Description for news 2...",
        publishDate: "02/01/2023",
    },
    {
        type: "social",
        imageUrl: "../Site-PressNews/tools/images/cosef.jpg",
        title: "Title news 4",
        description: "Description for news 2...",
        publishDate: "02/01/2023",
    }
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
      <article>
      <span>${article.type}</span>
        <span>${article.title}</span>
        <span>${article.description}</span>
        <p>..voir plus</p>
        <span>Publier le ${article.publishDate}</span>
      </article>
    `;

    // Ajoutez le nouvel élément div au conteneur
    newsContainer.appendChild(divElement);
    
});


// POLITIQUE VIDEO
//  FOREACH BOUCLE
const videoData = [
    {
        imageUrl:"../tools/images/cosef.jpg",
        videoUrl: "../Site-PressNews/tools/video/Farao - Raha avelanao ( Nouveauté clip gasy 2023).mp4",
        type: "politique",
        description: "Description for news 1...",
        publishDate: "01/01/2023",
    },
    {
        imageUrl:"../tools/images/silvain.jpg",
        videoUrl: "../Site-PressNews/tools/video/Farao - Raha avelanao ( Nouveauté clip gasy 2023).mp4",
        type: "sport",
        description: "Description for news 2...",
        publishDate: "01/01/2023",
    },
    {
        imageUrl:"../tools/images/silvain.jpg",
        videoUrl: "../Site-PressNews/tools/video/Farao - Raha avelanao ( Nouveauté clip gasy 2023).mp4",
        type: "social",
        description: "Description for news 3...",
        publishDate: "01/01/2023",
    }
    // Ajoutez d'autres articles au besoin
];

// Sélectionnez le conteneur où vous ajouterez les articles
const newsVideo = document.getElementById('newsVideo');

// Utilisez forEach pour itérer sur chaque objet d'article
videoData.forEach(article => {
    // Créez un nouvel élément div pour chaque article
    const divElement = document.createElement('div');
    

    // Structure HTML de chaque article
    divElement.innerHTML = `
    <article>
    <picture>
    <ion-icon name="play-circle" id="play-circle"></ion-icon>
        <video poster="${article.imageUrl}">
        
            <source
                src="${article.videoUrl}"
                type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </picture>
    </article>
       <article>
       <span>${article.type}</span>
    <span>${article.description}</span>
    <span>${article.publishDate}</span>
    </article>
    `;

    // Ajoutez le nouvel élément div au conteneur
    newsVideo.appendChild(divElement);
    divElement.classList.add(article.type.toLowerCase());
});