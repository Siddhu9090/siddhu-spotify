console.log("Welcome to spotify");

let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    {songname: "Love me like you do" , filepath: "songs/1.mp3" , coverpath: "covers/1.jpg"},
    {songname: "nani's gang leader's hoyna" , filepath: "songs/2.mp3" , coverpath: "covers/2.jpg"},
    {songname: "taxiwalla matavinduga" , filepath: "songs/3.mp3" , coverpath: "covers/3.jpg"},
    {songname: "ntr songs mix" , filepath: "songs/4.mp3" , coverpath: "covers/4.jpg"},
    {songname: "jai shree ram adipursh " , filepath: "songs/5.mp3" , coverpath: "covers/5.jpg"},
    {songname: "ram siya ram " , filepath: "songs/6.mp3" , coverpath: "covers/6.jpg"},
    {songname: "the night is still young " , filepath: "songs/7.mp3" , coverpath: "covers/7.jpg"},
    {songname: "Love me again,ntr" , filepath: "songs/8.mp3" , coverpath: "covers/8.jpg"},
    {songname: "why this kolavare kolavare" , filepath: "songs/9.mp3" , coverpath: "covers/9.jpg"},
    {songname: "avunanava avunanava " , filepath: "songs/10.mp3" , coverpath: "covers/10.jpg"},

]

songitem.forEach((element, i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText  = songs[i].songname;

})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 )
    {
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
       gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
       masterplay.classList.remove('fa-pause-circle');
       masterplay.classList.add('fa-play-circle');
       gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate',()=>
{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value = progress;


})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
    })

})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songindex>9){
        songindex =0;
    }
    else{
    songindex +=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songindex<=0){
        songindex =0;
    }
    else{
    songindex -=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})



