
//  FOREACH BOUCLE // POLITIQUE PHOTOS
const newsData = [
    {
        type: "Politique",
        imageUrl: "../Site-PressNews/tools/images/cosef.jpg",
        title: "Title news 1",
        description: "Description for news 1...",
        publishDate: "01/01/2023",
    },
    {
        type: "Politique",
        imageUrl: "../Site-PressNews/tools/images/antalaha.jpg",
        title: "Title news 1",
        description: "Description for news 1...",
        publishDate: "01/01/2023",
    },
    {
        type: "sport",
        imageUrl: "../Site-PressNews/tools/images/cosef.jpg",
        title: "Title news 2",
        description: "Description for news 2...",
        publishDate: "02/01/2023",
    },
    {
        type: "culturel",
        imageUrl: "../Site-PressNews/tools/images/cosef.jpg",
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
// Ajoutez une fonction de filtrage
function filterArticles() {
    const searchTerm = document.getElementById('search').value.toLowerCase();

    // Filtrer les articles en fonction du terme de recherche
    const filteredArticles = newsData.filter(article =>
        article.type.toLowerCase().includes(searchTerm)
    );

    // Afficher les articles filtrés
    displayArticles(filteredArticles);
}

// Utilisez cette fonction pour afficher les articles (elle peut être appelée à partir d'autres parties de votre code également)
function displayArticles(articles) {
    // Supprimez tous les articles actuels du conteneur
    newsContainer.innerHTML = '';

    // Utilisez forEach pour itérer sur chaque objet d'article
    articles.forEach(article => {
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
                <p class="voir-plus" data-type="${article.type}" data-title="${article.title}" data-description="${article.description}" data-publishDate="${article.publishDate}">..voir plus</p>
                <span>Publier le ${article.publishDate}</span>
            </article>
        `;
        // Ajoutez un gestionnaire de clic à l'élément "voir plus"
        const voirPlusElement = divElement.querySelector('.voir-plus');
        voirPlusElement.addEventListener('click', () => redirectToArticle(article));
        // Ajoutez le nouvel élément div au conteneur
        newsContainer.appendChild(divElement);
    });
}

// Initialisation pour afficher tous les articles au chargement de la page
displayArticles(newsData);

// Fonction pour rediriger vers la nouvelle page avec les informations sur l'article
function redirectToArticle(article) {
    // Créez une URL avec les informations de l'article
    const url = `article.html?type=${article.type}&title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(article.description)}&publishDate=${article.publishDate}`;

    // Redirigez vers la nouvelle page
    window.location.href = url;
}
