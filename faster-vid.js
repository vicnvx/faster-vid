function increaseSpeed() {
    let vids = document.getElementsByTagName('video');
    if (vids.length > 0) {
        console.log("increasing speed...");
        for (let vid of vids) {
            let x = vid.playbackRate;
            let y = x + 0.5;
            vid.playbackRate = y;
            console.log("increased", vid.classList.toString(), "speed from", x, y);
        }
    } else {
        console.log("Error:\t no video elements");
    }
}
