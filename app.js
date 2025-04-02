import { main as processWithAI } from './openai-integration.js'

document.addEventListener('DOMContentLoaded',()=>{
    const voiceButton = document.querySelector('.voice-btn');
    if(voiceButton){
        voiceButton.addEventListener('click',startListening);
    }
})

function startListening(){
    // console.log("Listening Started")
    // if('webkitSpeechRecognition' in window){
    //     const recognition = new webkitSpeechRecognition();
    //     recognition.continuous = false;
    //     recognition.interimResults = false; 
    //     recognition.lang = "en-US";

    //     recognition.onstart = function(){
    //         console.log("Listening Started");
    //         // clearTaskOutput();
    //     }
    //     recognition.onresult = function(event){
    //         const transcript = event.results[0][0].transcript
    //         console.log("Got Transcript")
    //         processCommand(transcript)
    //     }
    //     recognition.onerror = function(event){
    //         console.log("Error in Recognition")
    //         console.log(event.error)
    //     }
    //     recognition.start();
    // }else{
    //     alert("Not Supporting by the Browser")
    // }
    processWithAI("Add clean car on 25th March 2025 its highly urgent");
}

// Synchronous : call backend from frontened it will say wait for 5sec
// Asynchronous : I'm going whenever result is ready to call me 
async function processCommand(command) {
    try {
        const airesponse = await processWithAI(command)
    } catch (error) {
        console.log("error in processing command")
    }
}

// Cores and Threads
// One thread is assigned to operation 

// SOLID Priciples :
// Single Responsibility : One Class Should have one responsibility  (Class should have only one reason to change)
// Open Close Principle : Open for Extension and Close for Modification
// Liskov Substitution Principle : Child class should be able to replace parent class without affecting the functionality   
// Interface Segregation Principle : A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.
// Dependency Inversion Principle : High level module should not depend on low level module. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
