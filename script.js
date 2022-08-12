const btn = document.getElementById("calculate")

btn.addEventListener("click", function(){
    let height = document.querySelector("#height").Value;
    let weight = document.querySelector("#weight").Value;

    if (height == "" || weight == "") {
        alert("Silahkan isi data terlebih dahulu");
        return;
    }
    height = height / 100;
    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2);
    document.querySelector("#result").innerHTML = BMI;
    let status = "";
    if (BMI <18.5) {
        status = "Underweight ;(";
    }
    if (BMI => 18.5 && BMI < 25) {
        status = "Healty :)";
    }
    if (BMI =>25 && BMI < 30) {
        status = "Overwight ;(";
    }
    if (BMI =>30) {
        status = "Obese :o";
    }
    document.querySelector(
        ".comment"
    ).innerHTML = `you are <span id="comment">${status}</span>`;
});