//test

let nom = document.getElementById("input")
console.log(nom)
let phraseoumots = ""

let button = document.getElementById("btnValiderMot")
clique_btn_verifictation()

function clique_btn_verifictation(){
    button.addEventListener("click", function(){
        console.log("bonton appuyé")
        verifictation_mot()
    });
}

document.addEventListener('keydown', (Event) => {
});


function verifictation_mot(){
    let mot_ecrit = nom.value
    console.log(mot_ecrit)
    if(phraseoumots === "mots"){
        if(mot_ecrit === listeMots[0]){
            score++
            console.log("c le bon mot")
        }
        
    }
    if(phraseoumots === "phrases"){
        if(mot_ecrit === listePhrases[0]){
            score++
            console.log("c la bonne phrase")
        }
    }
}



//bouton phrase et bouton mot
let boutonphrase = document.getElementById("phrases")
let boutonmots = document.getElementById("words")


boutonmots.addEventListener("click", function(){
    phraseoumots = "mots"
    console.log(phraseoumots)
    })
boutonphrase.addEventListener("click", function(){
    phraseoumots = "phrases"
    console.log(phraseoumots)
    })
