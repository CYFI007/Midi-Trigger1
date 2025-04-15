const AudCtx = new AudioContext();

navigator.requestMIDIAccess();

var inputs = MIDIAccess.inputs;

var outputs = MIDIAccess.outputs;

WebMidi
    .enable()
    .then(()  => console.log("WebMidi Enabled"));

const realTrigger = document.getElementById("TriggerBtn");
const stopTrigger = document.getElementById("StopTriggerBtn");
const cmaj = document.getElementById("Scale1");




class selectedScale {
    constructor (cmaj) {
        this.cmajor = cmaj;
    }
};

//trigger note
function PlayRandomNote(MIDIAccess, portID)  {
    if (addEventListener("click", realTrigger)) 
        if (addEventListener("click", cmaj)) {
    const noteOn = [0x90, 60, 0x7f]; //note on, middle C, Full velocity ON
        output.send([0x90, 60, 0x00], performance.now() + 250); //C off +
        output.send([0x80, 62, 0x7f], performance.now() + 500); //D on +
        output.send([0x90, 62, 0x00], performance.now() + 250);//D off +
        output.send([0x90, 64, 0x7f], performance.now() + 500); //E on
        output.send([0x80, 64, 0x00], performance.now() + 250); //E off
        output.send([0x90, 65, 0x7f], performance.now() + 500);//F on
        output.send([0x90, 65, 0x00], performance.now() + 250); //F off
        output.send([0x80, 67, 0x7f], performance.now() + 500); //G on
        output.send([0x90, 67, 0x00], performance.now() + 250);//G off
        output.send([0x90, 69, 0x7f], performance.now() + 500); //A on
        output.send([0x80, 69, 0x00], performance.now() + 250); //A off
        output.send([0x90, 71, 0x7f], performance.now() + 500);//B on
        output.send([0x90, 71, 0x00], performance.now() + 250);//B off
            const output = MIDIAccess.outputs.get([1])
            MIDIOutput.send(noteOn);
    }
 };

 function PlayRandomNote(MIDIAccess, portID)  {
    if (addEventListener("click", realTrigger)) 
        if (addEventListener("click", cmaj)) {
    const noteOn = [0x90, 60, 0x7f]; //note on, middle C, Full velocity ON
        output.send([0x90, 60, 0x00], performance.now() + 250); //C off +
        output.send([0x80, 62, 0x7f], performance.now() + 500); //D on +
        output.send([0x90, 62, 0x00], performance.now() + 250);//D off +
        output.send([0x90, 64, 0x7f], performance.now() + 500); //E on
        output.send([0x80, 64, 0x00], performance.now() + 250); //E off
        output.send([0x90, 65, 0x7f], performance.now() + 500);//F on
        output.send([0x90, 65, 0x00], performance.now() + 250); //F off
        output.send([0x80, 67, 0x7f], performance.now() + 500); //G on
        output.send([0x90, 67, 0x00], performance.now() + 250);//G off
        output.send([0x90, 69, 0x7f], performance.now() + 500); //A on
        output.send([0x80, 69, 0x00], performance.now() + 250); //A off
        output.send([0x90, 71, 0x7f], performance.now() + 500);//B on
        output.send([0x90, 71, 0x00], performance.now() + 250);//B off
            const output = MIDIAccess.outputs.get([1])
            MIDIOutput.send(noteOn);
    }
 };


document.getElementById("C maj").addEventListener("click", realTrigger)

const randomNote = selectedScale[Math.floor(Math.random())];
const midiNote = `${randomNote}`;

console.log(MIDIMessageEvent)

function stopNotes()    {
    if (addEventListener("click", stopTrigger))
        stopNotes(cmaj)
};


