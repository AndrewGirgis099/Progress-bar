
var dash = document.querySelectorAll('.dash-bar');
var step= document.querySelectorAll('.step-bar');

var index = 0;

var index_step=0;

document.querySelector('.next').addEventListener('click',()=>{

    dash[index].style.backgroundColor="#2083DD";
    step[index_step].innerHTML=`<i class="fa-solid fa-check right"></i>`;

    
    if(index==dash.length-1 || index_step==step.length-1){
        index=dash.length-1;
        index_step=step.length-1;
    }
    else{
        index++;
        index_step++;
        // console.log(index)
        console.log(index_step)


    }
    


})

document.querySelector('.back').addEventListener('click',()=>{

    dash[index].style.backgroundColor="#E5E5E5";
    step[index_step].innerHTML=`<h3 class="text-muted fw-bold right fixed">${index_step+1}</h3>`;


    if(index==0 || index_step==0){
        index=0;
        index_step==0;

    }
    else{
        index--;
        index_step--;

        console.log(index_step)
    }



})




