const container = document.querySelector('.container');

function drawGrid(){
    for (let i=0; i<256; i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'square';
        container.appendChild(newDiv);
    } 

const square = document.querySelectorAll('.square');

    for(let i=0; i<square.length; i++){
        square[i].addEventListener('mouseenter',function(e){
            e.target.style.background = 'black';
        })
    }
};

const reset=document.querySelector('#reset');
reset.onclick=drawGrid();

drawGrid();
