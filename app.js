const appContainer = document.getElementById("app-container")
const umbrella = document.getElementById("umbrella")
const switchContainer = document.getElementById("switch-button-container")
const upload = document.getElementById("upload")
const uploadSvg = document.getElementById("svg-icon")
const imageContainer = document.getElementById("image-container")
const loaderContainer = document.getElementsByClassName("loader-icon")
const btnText = document.getElementById("btn-text")
const logo = document.getElementById("logo")
const loaderIcon = document.getElementsByClassName("spin-icon")
const data = [
    {
        image: "BlueUmbrella.png",
        background: "#e4f2f9",
        btnColor: "#00a3e0",
        shadow: "1px -1px #80d1ef"
    },
    {
        image: "PinkUmbrella.png",
        background: "#F5E7E9",
        btnColor: "#de1a6d",
        shadow: "1px -1px #de1a6d"
    },
    {
        image: "YelloUmbrella.png",
        background: "#faf9eb",
        btnColor: "#f9ca3d",
        shadow: "1px -1px ##ffe597"
    }
]
//create button
const createBtn = () => {
    for (let i = 0; i < data.length; i++) {
        const button = document.createElement("button")
        button.setAttribute("class", "switch-btn")
        button.style.backgroundColor = data[i].btnColor
        button.style.boxShadow = data[i].shadow
        switchContainer.appendChild(button)
    }
}
createBtn()
//listening for button event
const switchBtn = document.getElementsByClassName("switch-btn")
for (let i = 0; i < switchBtn.length; i++) {
    switchBtn[i].addEventListener("click", () => {
        umbrella.src = `./assets/${data[i].image}`
        appContainer.style.backgroundColor = data[i].background
        upload.style.backgroundColor = data[i].btnColor
        loaderIcon[0].style.fill = data[i].btnColor
    })
}
//for browesing file
function importData() {
    console.log("loader....")
    imageContainer.style.display = "none"
    uploadSvg.style.display = "none"
    loaderContainer[0].style.display = "block"
    loaderContainer[1].style.display = "block"

    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
        console.log(e.target.files[0])
        const files = e.target.files[0];
        if (files) {
            const reader = new FileReader();
            reader.onload = function (e) {
                logo.textContent = e.target.result;
                const img = document.createElement('img');
                img.src = e.target.result;
                logo.innerHTML = '';
                logo.appendChild(img);
            }
            reader.readAsDataURL(files);
            imageContainer.style.display = "block"
            uploadSvg.style.display = "block"
            loaderContainer[0].style.display = "none"
            loaderContainer[1].style.display = "none"
            btnText.innerText = files.name
            logo.style.display = "block"
        }
    };
    input.click();
}
//listening fron file browser
upload.addEventListener("click", importData)
