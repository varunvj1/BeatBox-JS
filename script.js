let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe", "65"),
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", "83"),
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", "68"),
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#FF00FF", "70"),
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#FF00FF", "71"),

    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#FF00FF", "72"),

    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#FF00FF", "74"),

    },
    "75": {
        beat: new Beat("./assets/Piano Chord 2.mp3"),
        button: new Button("#FFFFFF", "75"),
    },
    "76": {
        beat: new Beat("./assets/Piano Chord 3.mp3"),
        button: new Button("#FFFFFF", "76"),
    }
}

/************************************************
** Function to play the beat upon a press of key
 ************************************************/
triggerBeat = (event) => {
    //Get the key-code of the key pressed
    const keycode = event.keyCode;

    //Check if the key pressed exists in the beats object
    if (keycode in beats) {
        beats[keycode].button.select();
        beats[keycode].beat.playAudio();
    }
}

/*************************************************
 ** Keydown listener to fire triggerBeat function
 *************************************************/
document.addEventListener('keydown', triggerBeat);
