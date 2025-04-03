const AudCtx = new AudioContext();
navigator.requestMIDIAccess();
const activeVoices = {}
WebMidi
    .enable()
    .then(()  => console.log("WebMidi Enabled"));

const mtof = function (midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
};

const realTrigger = document.getElementById("TriggerBtn");
const stopTrigger = document.getElementById("StopTriggerBtn");
const cmaj = document.getElementById("C maj");
const cmin = document.getElementById("C min");
const dmaj = document.getElementById("D maj");
const dmin = document.getElementById("D min");


//USE THIS

const outputs = MIDIAccess.outputs;
    if  (outputs.size > 0)  {
        const output = outputs.values().next().value;// grabs first out put??

                // note on,C3, VEL
        output.send([0x90, 60, 127]);
        output.send([0x90, 62, 127], performance.now() + 100);
    }


















//do research on this
function getMIDIMessage(message)    {
    const command = message.data[0];
    const note = message.data[1];
    const velocity = message.data[2];

    switch (command)    {
        case 0x90: //noteon 
            note(60, velocity)
            break;
            case 0x90:
                note(62, velocity)
                break;
                
    }
}






//trigger note
function PlayRandomNote(MIDIAccess, portID)  {
    if (addEventListener("click", realTrigger)) {
        
       // const noteOn = [0x90, 60, 0x7f];    //note on, middle C, Full velocity
            //const output = MIDIAccess.outputs.get(portID)
            //MIDIOutput.send(noteOnMessage);
    }
 };

trigger.addEventListener("click", realTrigger)

const randomNote = selectedScale[Math.floor(Math.random()  * selectedScale.length)];
const midiNote = `${randomNote}`;

synth.triggerAttackRelease(midiNote, "0.5");

console.log(MIDIMessageEvent)

function stopNotes()    {

}


