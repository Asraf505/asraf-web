const code=document.getElementById('code')
const error=document.getElementById('error')
const button=document.querySelector('button')
const hback=document.querySelector("header")
const footer =document.getElementById('footer')
const arrcode=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener('click',backclick)

function backclick(){
    let asraf = '#';
    for(let i=1;i<=6;i++){
        asraf += hex()
    }
    error.style.backgroundColor=asraf
    code.innerHTML= asraf
    code.style.backgroundColor=asraf
    hback.style.backgroundColor=asraf
    // footer.style.backgroundColor=asraf
}


function hex(){
    let hexIndex = Math.floor(Math.random()*16)
    return arrcode[hexIndex]
}