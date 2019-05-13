const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998'];

//change bg color when clicking the change color button
colorBtn.addEventListener('click',changeColor);

function changeColor (){   
    //get a random # rounded down to nearest int x the length of the colors array
    let random = Math.floor(Math.random()*colors.length) 
    bodyBcg.style.backgroundColor = colors[random];
}