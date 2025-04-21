const AudCtx = new AudioContext();  

navigator.requestMIDIAccess();  //request MIDI access

var inputs = MIDIAccess.inputs;

var outputs = MIDIAccess.outputs;

WebMidi
    .enable()
    .then(()  => console.log("WebMidi Enabled"));   //enable web midi, then show webmidi enabled

  //was realtrigger  
const cmajTrigger = document.getElementById("cmajTrigger");  //cmaj trigger button exists now
const dmajTrigger = document.getElementById("dmajTrigger");     //d maj trigger button exists now
const stopTrigger = document.getElementById("StopTriggerBtn");  //stop trigger button exists now


//trigger note
function PlayCMaj(MIDIAccess, portID)  {        
    if (addEventListener("click", cmajTrigger)) {       //function, when cmaj trig button is clicked, the midi information wll be sent out.
    const noteOn = [0x90, 60, 0x7f]; //note on, middle C, Full velocity ON
        output.send([0x80, 60, 0x00], performance.now() + 250); //C off +
        output.send([0x90, 62, 0x7f], performance.now() + 500); //D on +
        output.send([0x80, 62, 0x00], performance.now() + 250);//D off +
        output.send([0x90, 64, 0x7f], performance.now() + 500); //E on
        output.send([0x80, 64, 0x00], performance.now() + 250); //E off
        output.send([0x90, 65, 0x7f], performance.now() + 500);//F on
        output.send([0x80, 65, 0x00], performance.now() + 250); //F off
        output.send([0x90, 67, 0x7f], performance.now() + 500); //G on
        output.send([0x80, 67, 0x00], performance.now() + 250);//G off
        output.send([0x90, 69, 0x7f], performance.now() + 500); //A on
        output.send([0x80, 69, 0x00], performance.now() + 250); //A off
        output.send([0x90, 71, 0x7f], performance.now() + 500);//B on
        output.send([0x80, 71, 0x00], performance.now() + 250);//B off
        output.send([0x90, 72, 0x7f], performance.now() + 250);// High C On
        output.send([0x80, 72, 0x00], performance.now() + 250);// High C Off
            let output = MIDIAccess.outputs.get([1])
            MIDIOutput.send(noteOn);
    }
 };



 function PlayDMaj(MIDIAccess, portID)  {
    if (addEventListener("click", dmajTrigger)) {       ////function, when dmaj trig button is clicked, the midi information wll be sent out.
    const noteOn = [0x90, 62, 0x7f]; //note on, middle D, Full velocity ON
        output.send([0x80, 62, 0x00], performance.now() + 250); //D off +
        output.send([0x90, 64, 0x7f], performance.now() + 500); //E on +
        output.send([0x80, 64, 0x00], performance.now() + 250);//E off +
        output.send([0x90, 66, 0x7f], performance.now() + 500); //F# on
        output.send([0x80, 66, 0x00], performance.now() + 250); //F# off
        output.send([0x90, 67, 0x7f], performance.now() + 500);//G on
        output.send([0x80, 67, 0x00], performance.now() + 250); //G off
        output.send([0x90, 69, 0x7f], performance.now() + 500); //A on
        output.send([0x80, 69, 0x00], performance.now() + 250);//A off
        output.send([0x90, 71, 0x7f], performance.now() + 500); //B on
        output.send([0x80, 71, 0x00], performance.now() + 250); //B off
        output.send([0x90, 73, 0x7f], performance.now() + 500);//C# on
        output.send([0x80, 73, 0x00], performance.now() + 250);//C# off
        output.send([0x90, 74, 0x7f], performance.now() + 250);//High D On
        output.send([0x80, 74, 0x00], performance.now() + 250);//High D Off
            let output = MIDIAccess.outputs.get([1])
            MIDIOutput.send(noteOn);
    }
 };
function noteOffMsg (MIDIAccess, portID)   {
    if (addEventListener("click", stopTrigger)) {
        const noteOff = [0x80, 0x00];
        let output = MIDIAccess.outputs.get([1])
        MIDIOutput.send(noteOff);       //note off message when button clicked
    };
}
 
 

console.log(MIDIMessageEvent)   //logs midi messages just for fun



