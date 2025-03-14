
prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
Webcam.attach('#camera');
camera=document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis= newSpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(UtterThis);
}

classifier =
ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m5y_XThxt/model.json',modelLoaded);

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (MediaError) {
        console.error
    } else{
        console.log(resukts);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
    }
    if (results[0].label == "happy") {
        document.getElementById("update_emoji").innerHTML = "&#128522"
    }

    if (results[0].label == "sad") {
        document.getElementById("update_emoji").innerHTML = "&#128532"
    }

    if (results[0].label == "angry") {
        document.getElementById("update_emoji").innerHTML = "&#128548"
    }

    if (results[1].label == "happy") {
        document.getElementById("update_emoji2").innerHTML = "&#128522"
    }

    if (results[0].label == "sad") {
        document.getElementById("update_emoji2").innerHTML = "&#128532"
    }

    if (results[0].label == "angry") {
        document.getElementById("update_emoji2").innerHTML = "&#128548"
    }
}