
// Milestone 1 - Leggiamo per bene il nostro array di oggetti che rappresentano ciascun post, così da capire bene i dati come sono strutturati;

//  Colleghiamo il container dove appenderemo tutti i nostri div ecc.

const container = document.getElementById('container');

// Creiamo il nostro array con tutte le informazioni 

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
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
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
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

    // Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// creare un ciclo per creare tutti i post 

for (let i = 0; i < posts.length; i++ ){

// Creo tutti i div che sono riportati in pagina 


// Primo div 

let post = document.createElement('div');

post.classList.add('post');

container.append(post);

// Secondo div 

let postHeader = document.createElement('div');

postHeader.classList.add('post__header');

post.append(postHeader);

// Terzo div 

let postMeta = document.createElement('div');

postMeta.classList.add('post-meta');

postHeader.append(postMeta);

// Quarto div 

let postMetaIcon = document.createElement('div');

postMetaIcon.classList.add('post-meta__icon');

postMeta.append(postMetaIcon);


// Quinto div 

let postMetaData = document.createElement('div');

postMetaData.classList.add('post-meta__icon');

postMeta.append(postMetaData);

// Sesto div 

let postMetaAutor = document.createElement('div');

postMetaAutor.classList.add('post-meta__author');

// postMetaAutor.innerHTML += ('Phil Mangione') ;

postMetaData.append(postMetaAutor);


// Settimo div 

let postMetaTime = document.createElement('div');

postMetaTime.classList.add('post-meta__time');

// postMetaTime.innerText += (' 4 mesi fa');

postMetaData.append(postMetaTime);

// Ottavo div 

let postText = document.createElement('div');

postText.classList.add('post__text');

// postText.innerText += ('Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.');

post.append(postText);

// Nono div 

let postImage = document.createElement('div');

postImage.classList.add('post__image');

// postImage.innerHTML += (`
// <img src="https://unsplash.it/600/300?image=171" alt="">
// `);

post.append(postImage);

// Decimo div 

let postFooter = document.createElement('div');

postFooter.classList.add('post__footer');

post.append(postFooter);


// Undicesimo div 

let likesJsLikes = document.createElement('div');

likesJsLikes.classList.add('likes_js_likes');

postFooter.append(likesJsLikes);

// // Dodicesimo div 

let likesCta = document.createElement('div');

likesCta.classList.add('likes__cta');

postFooter.append(likesCta);

// Dodicesimo div 

let likesCouter = document.createElement('div');

likesCouter.classList.add('likes__counter');

likesJsLikes.append(likesCouter);

};


    // Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
