const AudCtx = new AudioContext();  

let midiAccess;
let output;

navigator.requestMIDIAccess().then(onMIDISuccess);

 //request MIDI access stuff
 WebMidi
    .enable()
    .then(()  => console.log("WebMidi Enabled"));   //enable web midi, then show webm

    //grabs output other if statement if not
 function onMIDISuccess(midi) {
    midiAccess = midi;
    output = Array.from(midiAccess.outputs.values())[0]; // Get the first available output

    if (!output) {
        console.error("No MIDI output found.");
        return;
    }

  //was realtrigger  
const cmajTrigger = document.getElementById("cmajTrigger");  //cmaj trigger button exists now
const dmajTrigger = document.getElementById("dmajTrigger");     //d maj trigger button exists now
const emajTrigger = document.getElementById("emajTrigger"); //e maj
const fmajTrigger = document.getElementById("fmajTrigger"); //f maj
const gmajTrigger = document.getElementById("gmajTrigger"); //g maj
const amajTrigger = document.getElementById("amajTrigger"); //A maj
const bmajorTrigger = document.getElementById("bmajTrigger");// b maj
const stopTrigger = document.getElementById("StopTriggerBtn");  //stop trigger button exists now

cmajTrigger.addEventListener("click", () => {
    playScale([60, 62, 64, 65, 67, 69, 71, 72]);    //c maj scale midi numbers
});

dmajTrigger.addEventListener("click", () => {
    playScale([62, 64, 66, 67, 69, 71, 73, 74]);        //d maj scale midi numbers
});

emajTrigger.addEventListener("click", () => {
    playScale([64, 66, 68, 69, 71, 73, 75, 76]); // E Maj scale midi numbers
});

fmajTrigger.addEventListener("click", () => {
    playScale([65, 67, 69, 70, 72, 74, 76, 77]); // F Maj scale midi numbers
});

gmajTrigger.addEventListener("click", () => {
    playScale([67, 69, 71, 72, 74, 76, 78, 79]); // G Maj scale midi numbers
});

amajTrigger.addEventListener("click", () => {
    playScale([69, 71, 73, 74, 76, 78, 80, 81]); // A Maj scale midi numbers
});

bmajorTrigger.addEventListener("click", () => {
    playScale([71, 73, 75, 76, 78, 80, 82, 83]); // B Maj scale midi numbers
});
stopTrigger.addEventListener("click", stopAllNotes); //stop notes
}

function playScale(notes)   {
    if(!output) return;

    const now = performance.now(); //now
    const noteDuration = 250; //time in ms of note
    const delay = 150; //delay between

    notes.forEach((note, i) => {
        const timeON = now + i * delay; //time on happens now + int times delaybetween
        const timeOff = timeON + noteDuration; // math equates to off
        output.send([0x90, note, 0x7f], timeON); //note on
        output.send([0x80, note, 0x00], timeOff); //note off
    });
}


function stopAllNotes() {
    if (!output) return;
    for (let note = 0; note < 128; note++)  { //notes should be scheduled off in diff ways 
        output.send(0x80, note, 0x00);
    }
}

 

console.log(MIDIMessageEvent);   //logs midi messages just for fun