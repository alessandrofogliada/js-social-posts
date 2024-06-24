
// Milestone 1 - Leggiamo per bene il nostro array di oggetti che rappresentano ciascun post, così da capire bene i dati come sono strutturati;

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

posts.forEach (element => {

//  Colleghiamo il container dove appenderemo tutti i nostri div ecc.

const container = document.getElementById('container');

// Creo tutti i div che sono riportati in pagina 

let contenutoPost = `

<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}"alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">"${element.author.name}"</div>
                        <div class="post-meta__time">"${element.created}"</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">"${element.content}"</div>
            <div class="post__image">
            <img src=${element.media} alt=">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="${element.id}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`

container.innerHTML += contenutoPost;


});

// creo un nuovo array per i like 

const likedPosts = [];

// selezione il pulsante like 

    let btLikes = document.querySelectorAll('.like-button');
    let counters = document.querySelectorAll(".js-likes-counter")

    // funzione per i like e per il cambio colore testo 

    for(let i = 0; i < btLikes.length; i++){
        let likeBt = btLikes[i];
        // console.log(likeBt);
        likeBt.addEventListener("click",
            function(evento){
            evento.preventDefault();
            likeBt.classList.add("like-button_liked");

            // creo contatore dei like 
            let counterLike = counters[i];
            // console.log(counter[i]);

            // ricavo contenuto del counter 
            let numeroDiLike = parseInt(counterLike.innerHTML);
            console.log(numeroDiLike);

            // incrementare di uno il valore di like 
            numeroDiLike++;

            // reinserire il nuovo valore all'interno del counter 
            counterLike.innerHTML = numeroDiLike;

        })
    }
