let outputW = document.getElementById('output-w');
let outputH = document.getElementById('output-h');

let inputW = document.getElementById('output-w');
let inputH= document.getElementById('output-h');

let rsBtn = document.getElementById('rsBtn');

let weight = 40;
let height = 40;
result();


inputW.addEventListener('mousedown',(event)=>{
    updateW(event)
    inputW.addEventListener('mousemove',(event)=>{
        updateW(event);
    });
})

inputH.addEventListener('mousedown',(event)=>{
    updateH(event)
    inputH.addEventListener('mousemove',(event)=>{
        updateH(event);
    });
})

function updateW(event){
    let w = event.target.value;
    weight = w;
    outputW.innerText = `${weight}kg`
    result();
}

function updateH(event){
    let h = event.target.value;
    weight = h;
    outputH.innerText = `${h}cm`
    result();
}



function result(){
    let bmi = Math.floor(weight/(height/100)*(height/100));
    rsBtn.innerText = `BMI: ${bmi}`;

}