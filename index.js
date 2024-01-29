// let x = document.querySelectorAll(".drum");

// x.forEach(x=>{
//     x.addEventListener("click", ()=>{
//         alert("hoo hoo");
//     })
// })

//or

function keyda(d){
    switch (d) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(d);
            break;
    }
}

function buttonAnimation(currentKey){
    
    let activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

/* code for detecting mouse key press */
let noofDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < noofDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {

        let d = document.querySelectorAll("button")[i].innerHTML;
        keyda(d);
        buttonAnimation(d);
    })
}

/* code for detecting keyboard key press */
document.addEventListener("keydown",(e)=>{
    let u=onkeydown=(e);
    let p=u.key;
    keyda(p);
    buttonAnimation(p);
})
