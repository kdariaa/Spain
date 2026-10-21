function translateToLatin() {
    let lastNameElement = document.getElementById("lastName");
    let firstNameElement = document.getElementById("firstName");

    if (lastNameElement.innerText === "Ямаль") {
        lastNameElement.innerText = "Yamal";
        firstNameElement.innerText = "Lamine";

    } else {
        lastNameElement.innerText = "Ямаль";
        firstNameElement.innerText = "Ламин";
    }
}

const button = document.getElementById("translit");
button.addEventListener('click', translateToLatin);
