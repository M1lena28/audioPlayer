var data = {
    title: ["jranerk-du imn es", 
            "Lav Eli - qo achqer@",
            "Lav Eli - Skizb",
            "khatutikner",
            "Head In The Clouds",
        ],
song: [
    "music/jranerk.mp3",
    "music/qoAcher.mp3",
    "music/Skizb.mp3",
    "music/khatutikner.mp3",
    "music/ Head In The Clouds.mp3"
],

poster : [
    "https://data.whicdn.com/images/344602411/original.gif?t=1590469263",
    "https://i.pinimg.com/originals/ec/b9/de/ecb9de574c59293dec44991376ed1de9.gif",
    "http://pa1.narvii.com/6968/2fb710cae8f83c0a67571ed83ebca22687ddfebar1-332-332_00.gif",
    "https://i.pinimg.com/originals/d7/36/d7/d736d7219d9f3edac79b00653da54cb1.gif",
    "https://gifdb.com/images/thumbnail/pink-aesthetic-anime-girl-feet-mbs7aqsl54715b57.gif",
    ]  

}


var song = new Audio();
window.onload = function(){
    playSong()
}

var  currentSong = 0

function playSong(){
    song.src = data.song[currentSong];
    
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent= data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage="url("+ data.poster[currentSong]+")"

    let main = document.getElementById("main");
    main.style.backgroundImage = "url("+ data.poster[currentSong] +")";
    song.play()

}

function playOrPauseSong(){
    let play = document.getElementById("play")


    if (song.paused) {
        song.play();
        play.src = "images/pause.png"
    } else{
        song.pause();
        play.src ="images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate", function(){
    //console.log(song.currentTime);
    //console.log(song.duration);

    let fill =document.getElementById("fill")
    // console.log(fill);
    let position = song.currentTime / song.duration
    fill.style.width = position * 100 + "%"; //fill

    convertTime(song.currentTime)  //cur. time

    if (song.ended) {
        next ()
    }
})


function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime.textContent =min + ":" + sec;

    totalTime(Math.round(song.duration))
    // console.log(seconds);
    // console.log(min);

} 


function totalTime(seconds) {
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec: sec;
    
    if(isNaN(min) || isNaN(sec)){
        return false
    }
    else{
        currentTime.textContent += " / " + min + ":" + sec
    }
};

function next () {
    currentSong++;
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong()
    play.src = "images/pause.png"
}

function pre() {
    currentSong--;
    if (currentSong < 0){ 
        currentSong = data.song.length-1;
    }
    playSong();
    play.src = "images/pause.png"
}



function muted () {
    let mute = document.getElementById("mute");

      if (song.muted) {
          song.muted = false
          mute.src = "images/volume.png"
        }else {
            song.muted = true
            mute.src = "images/volume-mute.png"

      }
}



function decrease() {
    song.volume -= 0.2
}


function increase(){
    song.volume += 0.2
}