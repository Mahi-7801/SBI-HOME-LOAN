function meanbtn(){
    const openbtn=document.querySelector('.sidebar');
    openbtn.style.display='flex';
}

function closebtn(){
    const closebtn1=document.querySelector('.sidebar');
    closebtn1.style.display='none';
}




function icon1(){
    document.querySelector('#rowicons1').style.display='flex';
    document.querySelector('#rowicons2').style.display='none';
    document.querySelector('#rowicons3').style.display='none';
    document.querySelector('#rowicons4').style.display='none';
    document.querySelector('#rowicons5').style.display='none';

}

function icon2(){
    document.querySelector('#rowicons1').style.display='none';
    document.querySelector('#rowicons2').style.display='flex';
    document.querySelector('#rowicons3').style.display='none';
    document.querySelector('#rowicons4').style.display='none';
    document.querySelector('#rowicons5').style.display='none';
}

function icon3(){
    document.querySelector('#rowicons1').style.display='none';
    document.querySelector('#rowicons2').style.display='none';
    document.querySelector('#rowicons3').style.display='flex';
    document.querySelector('#rowicons4').style.display='none';
    document.querySelector('#rowicons5').style.display='none';
}


function icon4(){
    document.querySelector('#rowicons1').style.display='none';
    document.querySelector('#rowicons2').style.display='none';
    document.querySelector('#rowicons3').style.display='none';
    document.querySelector('#rowicons4').style.display='flex';
    document.querySelector('#rowicons5').style.display='none';
}

function icon5(){
    document.querySelector('#rowicons1').style.display='none';
    document.querySelector('#rowicons2').style.display='none';
    document.querySelector('#rowicons3').style.display='none';
    document.querySelector('#rowicons4').style.display='none';
    document.querySelector('#rowicons5').style.display='flex';
}

