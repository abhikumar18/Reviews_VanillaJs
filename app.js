const reviews = [
    {
        id:1,
        name:"susan smith",
        job:"web developer",
        img:"https://picsum.photos/id/237/200/300",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi voluptate consequatur? Ipsa, adipisci fuga! Recusandae, doloribus? Laudantium, quaerat eveniet"
    },
    {
        id:2,
        name:"Anna johnson",
        job:"front end developer",
        img:"https://picsum.photos/seed/picsum/200/300",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi voluptate consequatur? Ipsa, adipisci fuga! Recusandae, doloribus? Laudantium, quaerat eveniet"
    },
    {
        id:3,
        name:"lehsun smith",
        job:"back end developer",
        img:"https://picsum.photos/200/300?grayscale",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi voluptate consequatur? Ipsa, adipisci fuga! Recusandae, doloribus? Laudantium, quaerat eveniet"
    },
    {
        id:4,
        name:"adarak lehsun",
        job:"full stack developer",
        img:"https://picsum.photos/200/300?grayscale",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi voluptate consequatur? Ipsa, adipisci fuga! Recusandae, doloribus? Laudantium, quaerat eveniet"
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author")
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
})

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length - 1)
        {
            currentItem = 0;
        }
        showPerson(currentItem);
})

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0)
        {
            currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
})