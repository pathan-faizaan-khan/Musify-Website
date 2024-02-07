    var audio1 = new Audio("heriye.mp3");
function clicked1() {
    SongPlay1.innerText = Ltxt1.innerText;
    document.getElementById("gif").style.visibility = "visible";
    let image = document.querySelector('.ContentArea');
    image.style.backgroundImage = "url('https://images.herzindagi.info/image/2023/Jul/heeriye1.jpg')"
    
    if (audio1.paused) {
        audio1.play();
        document.getElementById("PlayingSong1").className = "fa fa-pause";
        document.getElementById("Li1").className = "fa fa-pause";
    }

    document.getElementById("PlayingSong1").addEventListener('click', function() {
        if (audio1.paused) {
            audio1.play();
            document.getElementById("PlayingSong1").className = "fa fa-pause";
            document.getElementById("Li1").className = "fa fa-pause";
            document.getElementById("gif").style.visibility = "visible";

        } else {    
            audio1.pause();
            document.getElementById("PlayingSong1").className = "fa fa-play";
            document.getElementById("Li1").className = "fa fa-play";
            document.getElementById("gif").style.visibility = "hidden";
        }
    });
    let Myprogressbar = document.getElementById("Progressbar");
    audio1.addEventListener('timeupdate',()=> {
        progress = parseInt((audio1.currentTime/audio1.duration)*100);
        Myprogressbar.value = progress;
    }) 
  
    Myprogressbar.addEventListener("change", ()=>{
        audio1.currentTime = Myprogressbar.value * audio1.duration/100;
    });
    backbutton2.addEventListener('click', ()=> {
        audio1.pause();
        clicked2();
        
    })
   
    
}

// 2nd Audio Function
var audio2 = new Audio("chaleya.mp3");
function clicked2() {
  
    SongPlay1.innerText = Ltxt2.innerText;
    document.getElementById("gif").style.visibility = "visible";
    let image = document.querySelector('.ContentArea');
    image.style.backgroundImage = "url('https://images.bhaskarassets.com/web2images/521/2023/08/13/comp-231_1691925559.gif')"
    
    if (audio2.paused) {
        audio2.play();
        document.getElementById("PlayingSong1").className = "fa fa-pause";
        document.getElementById("Li2").className = "fa fa-pause";
        
    }

    document.getElementById("PlayingSong1").addEventListener('click', function() {  
        if (audio2.paused) {
            audio2.play();
            document.getElementById("PlayingSong1").className = "fa fa-pause";
            document.getElementById("Li2").className = "fa fa-pause";
            document.getElementById("gif").style.visibility = "visible";
        
        } else {    
            audio2.pause();
            document.getElementById("PlayingSong1").className = "fa fa-play";
            document.getElementById("Li2").className = "fa fa-play";
            document.getElementById("gif").style.visibility = "hidden";
        }
    });
    let Myprogressbar = document.getElementById("Progressbar");
    audio2.addEventListener('timeupdate',()=> {
        progress = parseInt((audio2.currentTime/audio2.duration)*100);
        Myprogressbar.value = progress;
    }) 
  
    Myprogressbar.addEventListener("change", ()=>{
        audio2.currentTime = Myprogressbar.value * audio2.duration/100;
    });
    backbutton1.addEventListener('click', ()=> {
        audio3.pause();
        audio2.pause();
        clicked1();
    
    })
    
    backbutton2.addEventListener('click', ()=> {
        audio2.pause();
        audio1.pause();
        clicked3();
    
})
}

// 3rd Audio Function
var audio3 = new Audio("NightChanges.mp3");
function clicked3() { 
    SongPlay1.innerText = Ltxt3.innerText;
    document.getElementById("gif").style.visibility = "visible";
    let image = document.querySelector('.ContentArea');
    image.style.backgroundImage = "url('https://images.summitmedia-digital.com/candy/images/articles/all-access/201503/201503-zayn-night-changes.gif')"
    
    if (audio3.paused) {
        audio3.play();
        document.getElementById("PlayingSong1").className = "fa fa-pause";
        document.getElementById("Li3").className = "fa fa-pause";
        
    }

    document.getElementById("PlayingSong1").addEventListener('click', function() {  
        if (audio3.paused) {
            audio3.play();
            document.getElementById("PlayingSong1").className = "fa fa-pause";
            document.getElementById("Li3").className = "fa fa-pause";
            document.getElementById("gif").style.visibility = "visible";
        
        } else {    
            audio3.pause();
            document.getElementById("PlayingSong1").className = "fa fa-play";
            document.getElementById("Li3").className = "fa fa-play";
            document.getElementById("gif").style.visibility = "hidden";
        }
    });
    let Myprogressbar = document.getElementById("Progressbar");
    audio3.addEventListener('timeupdate',()=> {
        progress = parseInt((audio3.currentTime/audio3.duration)*100);
        Myprogressbar.value = progress;
    }) 
  
    Myprogressbar.addEventListener("change", ()=>{
        audio3.currentTime = Myprogressbar.value * audio3.duration/100;
    });
    backbutton1.addEventListener('click', ()=> {
        audio3.pause();
        clicked2();
    })

}










