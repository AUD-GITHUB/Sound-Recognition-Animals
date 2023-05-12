function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/J5FYvPCAr/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        setInterval(displayResults, 2000);
    }
}

function displayResults() {

    rgb_r = Math.floor(Math.random() * 255) + 1;
    rgb_g = Math.floor(Math.random() * 255) + 1;
    rgb_b = Math.floor(Math.random() * 255) + 1;

    d = document.getElementById("dog");
    c = document.getElementById("cat");
    l = document.getElementById("lion");
    e = document.getElementById("elephant");

    document.getElementById("sound").innerHTML = "SOUND : " + results[0].label;
    document.getElementById("sound").style.color = "rgb(" + rgb_r + "," + rgb_g + "," + rgb_b + ")";

    for (let i = 0; i < 5; i++) {
        if (results[i].label == 'Barking') {
            d.innerHTML = "Dog : " + (results[i].confidence * 100).toFixed(2) + "%";
            d.style.color = "rgb(" + rgb_r + "," + rgb_g + "," + rgb_b + ")";
        }
    }
    for (let i = 0; i < 5; i++) {
        if (results[i].label == 'Meowing') {
            c.innerHTML = "Cat : " + (results[i].confidence * 100).toFixed(2) + "%";
            c.style.color = "rgb(" + rgb_r + "," + rgb_g + "," + rgb_b + ")";
        }
    }
    for (let i = 0; i < 5; i++) {
        if (results[i].label == 'Roaring') {
            l.innerHTML = "Lion : " + (results[i].confidence * 100).toFixed(2) + "%";
            l.style.color = "rgb(" + rgb_r + "," + rgb_g + "," + rgb_b + ")";
        }
    }
    for (let i = 0; i < 5; i++) {
        if (results[i].label == 'Trumpet') {
            e.innerHTML = "Elephant : " + (results[i].confidence * 100).toFixed(2) + "%";
            e.style.color = "rgb(" + rgb_r + "," + rgb_g + "," + rgb_b + ")";
        }
    }

    if (results[0].label == "Barking") {
        img.src = 'dog.img.png';
    } else if (results[0].label == "Meowing") {
        img.src = 'cat.img.png';
    } else if (results[0].label == "Roaring") {
        img.src = 'lion.img.png';
    } else if (results[0].label == "Trumpet") {
        img.src = 'elephant.img.png';
    } else {
        img.src = 'hearing.gif';
    }

}