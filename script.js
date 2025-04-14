


const visitorscount = document.getElementById("visitcount");
const supcount = document.getElementById("supcount");
const btn=document.getElementById("button");
btn.addEventListener("click",()=>{
    open("crop/crop.html");
})


let vcount = 0;
let scount = 0;

document.addEventListener("scroll", () => {
    setTimeout(() => {
        setInterval(
            () => {
                vscount()
                spcount()
            },0.2*1000)
        
    }, 2000);
});

function vscount() {
    vcount++;
    if (vcount <= 600) {
        visitorscount.innerHTML = vcount + "k";
    }
}
function spcount() {
    scount++;
    if (scount <= 700) {
        supcount.innerHTML = scount + "k";

    }
}

