let fillbar = document.querySelector('.fill');
let audios = ['TravisScottASTROTHUNDER.mp3','TravisScottSICKOMODE.mp3','travisscottbutterflyeffect.mp3'];
let covers = ['cover1.jpg','cover2.png','cover3.jpg'];
let currentTime = document.querySelector('.time');

let audio = new Audio();
let currentSong = 0;


window.onload = playSong;

function playSong(){
    audio.src = audios[currentSong];
    audio.play();
}

function togglePlayPause(){
    if(audio.paused){
        audio.play();
        let playBtn = document.querySelector('.play-pause');
        playBtn.innerHTML = '<i class="fa fa-pause"></i>';
    }else{
        audio.pause();
        playBtn = document.querySelector('.play-pause');
        playBtn.innerHTML = '<i class="fa fa-play"></i>';
    }
}

audio.addEventListener('timeupdate', function() {
    let position = audio.currentTime / audio.duration;
    fillbar.style.width = position * 100 + "%";
    convertTime(Math.round(audio.currentTime))

    if(audio.ended){
        nextAudio();
    }
});


function convertTime(seconds) {
     let min = Math.floor(seconds / 60);
     let sec = seconds % 60;

     min = min < 10 ? '0' + min : min;
     sec = sec < 10 ? '0' + sec : sec;
     currentTime.textContent = min + ':' + sec;

     totalTime(Math.round(audio.duration));
}

function totalTime(seconds){
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    currentTime.textContent += ' ' + min + ':' + sec;
}

function nextAudio(){
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong()
    playBtn = document.querySelector('.play-pause');
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';

    $('.img img').attr('src', covers[currentSong]);

}

function prevAudio(){
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong()
    playBtn = document.querySelector('.play-pause');
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';

    $('.img img').attr('src', covers[currentSong]);

}

decreaseVolume = () => audio.volume -= 0.25;

increaseVolume = () => audio.volume += 0.25;


let volumeUp = document.querySelector('.volume-up');
volumeUp.addEventListener('click', () => {
    if(audio.volume === 1){
        audio.volume = 0;
        document.querySelector('.volume-up i').className = 'fa fa-volume-mute';
    }else{
        audio.volume = 1;
        document.querySelector('.volume-up i').className = 'fa fa-volume-up';
    }
});

























