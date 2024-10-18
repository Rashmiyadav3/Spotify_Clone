console.log("Welcome to spotify");
let songIndex = 0;
let audioElement  = new Audio('song.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Ve Haaniyaan",filepath: "ve haniya.mp3",coverpath: "covers/1.jpg"},
    {songName:"Tera Zikr",filepath: "Tera Zikr.mp3",coverpath: "covers/2.jpg"},
    {songName:"Satranga",filepath: "satranga.mp3",coverpath: "covers/3.jpg"},
    {songName:"Tu Mileya",filepath: "tu mileya.mp3",coverpath: "covers/4.jpg"},
    {songName:"Apna Bana Le",filepath: "Apna Bana Le.mp3",coverpath: "covers/5.jpg"},
    {songName:"Thodi Jagah",filepath: "thodi jagah.mp3",coverpath: "covers/6.jpg"},
    {songName:"Mahiye Jinna Sohna",filepath: "mahiya jinna sohna.mp3",coverpath: "covers/7.jpg"},
    {songName:"Pahle Bhi Main",filepath: "pahle bhi main.mp3",coverpath: "covers/8.jpg"},
    {songName:"Maan Meri Jaan",filepath: "maan meri jaan.mp3",coverpath: "covers/9.jpg"},
    {songName:"Hum TO Deewane",filepath: "hum to deewane.mp3",coverpath: "covers/10.jpg"},
]  

// audioElement.play();
  masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
    }
  });
// listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    console.log(progress);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
}
);
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  Element.addEventListener('click',(e)=>
  {
      console.log(e.target);
      makeAllPlays();
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = 'songs/3.mp3';
      audioElement.currentTime = 0;
      audioElement.play();
  })
  
});