/*

Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi
 servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>) V

Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html,
 stampiamo i post del nostro feed. V

Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone
 e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post
  ai quali abbiamo messo il like. 

BONUS
Formattare le date in formato italiano (gg/mm/aaaa)

Gestire l'assenza dell'immagine profilo con un elemento di fallback
 che contiene le iniziali dell'utente (es. Luca Formicola > LF).

Al click su un pulsante "Mi Piace" di un post,
 se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


*/

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


const postList = document.getElementById("container");


posts.forEach(function (postElement) {

    

    console.log(postElement)

    postList.innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${postElement.author.image}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${postElement.author.name}</div>
                <div class="post-meta__time">${postElement.created.split("-").reverse().join("-")}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="${postElement.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${postElement.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${postElement.id}" class="js-likes-counter">${postElement.likes}</b> persone
            </div>
        </div> 
    </div>    
    
    
    `;



    // // inserimento dell'immagine arry
    // if (postElement.author.image == null){
    //     postElement.author.image  `https://unsplash.it/300/300?image=10`;
    // }





});

const likeArray = [];

const counterLikes = document.getElementsByClassName("js-likes-counter");

const addLikeCounter = document.querySelectorAll(".js-like-button");
addLikeCounter.forEach(function (like, index) {

    like.addEventListener("click", function () {
        event.preventDefault();
        console.log(this)
        let userLike = like.dataset.postid;

        const postClicked = like.classList.contains("red");




        //devi riuscire a leggere da "this" l'attributo "data-postid"
        //3
        // let datapost = ???

        if (postClicked) {


            counterLikes[index].innerHTML--;
            like.classList.remove("red");
            likeArray.shift(userLike)

           
        } else{

            counterLikes[index].innerHTML++;
            like.classList.add("red");
            likeArray.push(userLike);
            
            console.log(likeArray)

        }




    })
});





//  function addLike (number){

//     const likeCounter = document.querySelectorAll(".js-likes-button");

//     likeCounter.forEach()
//  }


// Prime prove nel Ciclo if //



 // let numberLike = posts[index].likes++;

            // numberLike.push(likeArray)

            // counterLikes[index].innerHTML++
            // counterLikes[index].likes++;


            // like.classList.toggle("red")