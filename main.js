const posts = [
    {
      "id": 1,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/300?image=171",
      "author": {
        "name": "Phil Mangione",
        "image": "https://unsplash.it/300/300?image=15"
      },
      "likes": 80,
      "created": "2021-06-25"
    },
    {
      "id": 2,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=112",
      "author": {
        "name": "Sofia Perlari",
        "image": "https://unsplash.it/300/300?image=10"
      },
      "likes": 120,
      "created": "2021-09-03"
    },
    {
      "id": 3,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=234",
      "author": {
        "name": "Chiara Passaro",
        "image": null
      },
      "likes": 78,
      "created": "2021-05-15"
    },
    {
      "id": 4,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ipsum aspernatur saepe esse quae suscipit commodi assumenda laborum iusto dicta eius dolor incidunt voluptatem obcaecati omnis quaerat numquam culpa cumque sint alias ducimus, sapiente at! Ducimus, hic velit placeat recusandae facere beatae autem! Adipisci corporis asperiores, error reiciendis nostrum totam.",
      "media": "",
      "author": {
        "name": "Luca Formicola",
        "image": "https://unsplash.it/300/300?image=20"
      },
      "likes": 56,
      "created": "2021-04-03"
    },
    {
      "id": 5,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=534",
      "author": {
        "name": "Alessandro Sainato",
        "image": null
    },
    "likes": 95,
    "created": "2021-03-05"
}
];

// FUNZIONE PER GENERARE UNA CARD POST
function createPostCard(post) {
// SELEZIONA IL CONTAINER IN CUI INSERIRE LE CARD DEI POST
const container = document.getElementById("container");

// CREA L'ELEMENTO PRINCIPALE DELLA CARD POST
const postElement = document.createElement("div");
postElement.classList.add("post");

// CREA L'HEADER DELLA CARD POST
const postHeader = document.createElement("div");
postHeader.classList.add("post__header");

// CREA I METADATI DELL'AUTORE
const postMeta = document.createElement("div");
postMeta.classList.add("post-meta");

// CREA L'ICONA DELL'AUTORE
const postMetaIcon = document.createElement("div");
postMetaIcon.classList.add("post-meta__icon");

// CREA L'IMMAGINE DEL PROFILO DELL'AUTORE O ELEMENTO DI FALLBACK
const profilePic = document.createElement("img");
profilePic.classList.add("profile-pic");

if (post.author.image) {
profilePic.src = post.author.image;
profilePic.alt = post.author.name;
} else {
const initials = post.author.name
.split(" ")
.map((word) => word.charAt(0))
.join("");
const canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 300;
const context = canvas.getContext("2d");
context.fillStyle = "#ccc";
context.fillRect(0, 0, canvas.width, canvas.height);
context.font = "150px Arial";
context.fillStyle = "#fff";
context.textAlign = "center";
context.textBaseline = "middle";
context.fillText(initials, canvas.width / 2, canvas.height / 2);
profilePic.src = canvas.toDataURL();
}

// CREA I DATI DELL'AUTORE
const postMetaData = document.createElement("div");
postMetaData.classList.add("post-meta__data");

// CREA IL NOME DELL'AUTORE
const postMetaAuthor = document.createElement("div");
postMetaAuthor.classList.add("post-meta__author");
postMetaAuthor.textContent = post.author.name;

// CREA LA DATA DI CREAZIONE DEL POST
const postMetaTime = document.createElement("div");
postMetaTime.classList.add("post-meta__time");
const createdDate = new Date(post.created);
const formattedDate = `${createdDate.getMonth() + 1}-${createdDate.getDate()}-${createdDate.getFullYear()}`;
postMetaTime.textContent = formattedDate;

// AGGIUNGI L'IMMAGINE DEL PROFILO E I METADATI DELL'AUTORE ALL'HEADER
postMetaIcon.appendChild(profilePic);
postMetaData.appendChild(postMetaAuthor);
postMetaData.appendChild(postMetaTime);

// AGGIUNGI L'ICONA E I DATI DELL'AUTORE ALL'HEADER
postMeta.appendChild(postMetaIcon);
postMeta.appendChild(postMetaData);
postHeader.appendChild(postMeta);

// CREA IL TESTO DEL POST
const postText = document.createElement("div");
postText.classList.add("post__text");
postText.textContent = post.content;

// CREA L'IMMAGINE DEL POST (SE PRESENTE)
const postImage = document.createElement("div");
postImage.classList.add("post__image");

if (post.media) {
const imageElement = document.createElement("img");
imageElement.src = post.media;
imageElement.alt = "";
postImage.appendChild(imageElement);
}

// CREA IL FOOTER DEL POST
const postFooter = document.createElement("div");
postFooter.classList.add("post__footer");

// CREA LA SEZIONE DEI "MI PIACE"
const likes = document.createElement("div");
likes.classList.add("likes");

// CREA IL BOTTONE "MI PIACE"
const likesCta = document.createElement("div");
likesCta.classList.add("likes__cta");

const likeButton = document.createElement("a");
likeButton.classList.add("like-button");
likeButton.href = "#";
likeButton.dataset.postid = post.id;

const likeButtonIcon = document.createElement("i");
likeButtonIcon.classList.add("like-button__icon", "fas", "fa-thumbs-up");

const likeButtonLabel = document.createElement("span");
likeButtonLabel.classList.add("like-button__label");
likeButtonLabel.textContent = "Mi Piace";

// AGGIUNGI L'ICONA E L'ETICHETTA AL BOTTONE "MI PIACE"
likeButton.appendChild(likeButtonIcon);
likeButton.appendChild(likeButtonLabel);
likesCta.appendChild(likeButton);

// CREA IL CONTATORE DEI "MI PIACE"
const likesCounter = document.createElement("div");
likesCounter.classList.add("likes__counter");
likesCounter.innerHTML = `Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone`;

// AGGIUNGI IL BOTTONE "MI PIACE" E IL CONTATORE ALLA SEZIONE DEI "MI PIACE"
likes.appendChild(likesCta);
likes.appendChild(likesCounter);
postFooter.appendChild(likes);

// AGGIUNGI L'HEADER, IL CONTENUTO E IL FOOTER AL POST
postElement.appendChild(postHeader);
postElement.appendChild(postText);
postElement.appendChild(postImage);
postElement.appendChild(postFooter);

// AGGIUNGI IL POST AL CONTAINER
container.appendChild(postElement);
}

// CREAZIONE DELLE CARD DEI POST
for (const post of posts) {
createPostCard(post);
}