status = "";

function preload() {
    img = loadImage("computer.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectdetecter = ml5.objectDetector("cocossd", modelLoaded);

    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function modelLoaded() {
    console.log("model loaded");
    status = true;

    objectdetecter.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}
