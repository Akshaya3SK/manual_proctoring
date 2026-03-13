let time=0;

window.onload=async function(){

 await startCamera();

 startTimer();
 loadQuestions();

 window.electronAPI.startFullscreen();

}


async function startCamera(){

 try{

 const stream=await navigator.mediaDevices.getUserMedia({
  video:true,
  audio:true
 });

 const video=document.getElementById("video");

 video.srcObject=stream;

 document.getElementById("status").innerText="Camera and Microphone Active";

 monitorStream(stream);

 }catch(err){

 document.getElementById("status").innerText="Camera or microphone not detected";

 }

}


function monitorStream(stream){

 stream.getVideoTracks()[0].onended=function(){

  alert("Camera disabled!");

 };

 stream.getAudioTracks()[0].onended=function(){

  alert("Microphone disabled!");

 };

}


function startTimer(){

 setInterval(()=>{

  time++;

  document.getElementById("timer").innerText=time;

 },1000);

}
async function loadQuestions(){

 const res = await fetch("http://localhost:5000/api/questions")

 const questions = await res.json()

 const container = document.getElementById("questionsContainer")

 container.innerHTML=""

 questions.forEach((q,index)=>{

  const div = document.createElement("div")

  div.classList.add("question")

  let optionsHTML=""

  q.options.forEach(option=>{

   optionsHTML += `
    <label>
     <input type="radio" name="q${q.id}" value="${option}">
     ${option}
    </label><br>
   `

  })

  div.innerHTML=`
   <h4>Q${index+1}. ${q.question}</h4>
   ${optionsHTML}
   <hr>
  `

  container.appendChild(div)

 })

}