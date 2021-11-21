let player;
let isVideoPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'N4TrRg0tWek',
        playerVars: {
            controls: 0,
            disablekb: 1,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            fs: 0,
            autohide: 1
        }
    });
}

$('#video-toggle').click(function() {
    if (isVideoPlaying) {
        isVideoPlaying = false;
        player.pauseVideo();
    } else {
        isVideoPlaying = true;
        player.playVideo();
    }
    $('#video-img, #video-img-2').toggleClass('hidden');
})

document.getElementById('screen-2__container').appendChild(  document.getElementById('screen-2__info-dr') )