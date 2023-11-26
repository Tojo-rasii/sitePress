// UNE FOIS CLIQUEZ
  // Récupérez les paramètres de l'URL
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const title = params.get('title');
  const description = params.get('description');
  const publishDate = params.get('publishDate');
  const imageUrl = params.get('imageUrl'); // Ajoutez cette ligne pour récupérer l'URL de l'image

  // Utilisez les informations pour afficher l'article sur la nouvelle page
  const articleContainer = document.getElementById('articleContainer');
  const articleTypeElement = document.getElementById('articleType');

  // Créez un nouvel élément div pour l'article
  const divElement = document.createElement('div');
divElement.style.border = "none";
divElement.style.background = "none";
divElement.style.padding = "0";
divElement.classList.add("sectionClick");
  // Structure HTML de l'article
  divElement.innerHTML = `
   <section>
      <article>
          <picture>
              <img src="${imageUrl}" id="imageClick" alt="image">
          </picture>
          <picture>
          <span id="articleType">${type}</span>
          <span>Publié le ${publishDate}</span>
          <span>${title}</span>
          </picture>
      </article>
      <article>
          <p>${description}</p>
      </article>
   </section>
  `;

     // Mettez à jour le contenu de l'élément strong avec le type de l'article
articleTypeElement.textContent = type;

  // Ajoutez le nouvel élément div à la page
  articleContainer.appendChild(divElement);


//   VIDEO
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

