//<option value="" disabled selected hidden>Please choose a gender...</option>


const characterCardComponent = function (){
    return `
        <section>
            <div class="form-container">
                <h2 id="instructions">Create your character</h2>
                <input type="text" id="name-select" class="form-element" placeholder="Choose a name" onchange="nameInputUpdate()">
                <select name="gender" id="gender" class="form-element" onchange="genderSelect()">
                    <option>Please choose a gender...</option>
                </select>
                <select name="race" id="race" class="form-element" onchange="raceSelect()">
                    <option>Please choose a race...</option>
                </select>
                <select name="race" id="char-class" class="form-element" onchange="classSelect()">
                    <option>Please choose a class...</option>
                </select>
            </div>
            <div class="character-sheet">
                <img src="" id="race-icon">
                <h3 id="char-name"></h3>
                <img src="" id="gender-icon">
                <img src="" id="class-icon">
            </div>
        </section>
    `
}




const loadEvent = function (){
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", characterCardComponent())
    
    let selectGender = document.getElementById("gender");
    let genderOptions = ["male", "female"];
    
    for(let i = 0; i < genderOptions.length; i++) {
        let genOpt = genderOptions[i];
        let gendElement = document.createElement("option");
        gendElement.textContent = genOpt;
        gendElement.value = genOpt;
        selectGender.appendChild(gendElement);
    }
    
    let selectRace = document.getElementById("race");
    let raceOptions = ["Hunter", "Fighter", "Bard", "Sorcerer", "Wizard", "Rogue", "Barbarian", "Druid"];
    
    for(let i = 0; i < raceOptions.length; i++) {
        let raceOpt = raceOptions[i];
        let raceElement = document.createElement("option");
        raceElement.textContent = raceOpt;
        raceElement.value = raceOpt;
        selectRace.appendChild(raceElement);
    }
    
    let selectClass = document.getElementById("char-class");
    let classOptions = ["Human", "Vampire", "Mermaid", "Dragon", "Gnome", "Lizardmen", "Nymph", "Unicorn"];
    
    for(let i = 0; i < classOptions.length; i++) {
        let classOpt = classOptions[i];
        let classElement = document.createElement("option");
        classElement.textContent = classOpt;
        classElement.value = classOpt;
        selectClass.appendChild(classElement);
    }
    
    nameInputUpdate()
    genderSelect()
    raceSelect()
    classSelect()
}

function nameInputUpdate() {
    let nameCont = document.getElementById("name-select");
    let displayName = nameCont.value;

    document.getElementById("char-name").innerHTML = displayName;

}

function genderSelect() {
    let genCont = document.getElementById("gender");
    let displayGender = genCont.options[genCont.selectedIndex].text;

    
    if(displayGender === "Please choose a gender..."){
        document.getElementById("gender-icon").src = "pics/genders.png"
    }else{
        document.getElementById("gender-icon").src = "pics/" + displayGender + ".png";
    }
}

function raceSelect() {
    let raceCont = document.getElementById("race");
    let displayRace = raceCont.options[raceCont.selectedIndex].text;

    
    if(displayRace === "Please choose a race..."){
        document.getElementById("race-icon").src = "pics/races.png"
    }else{
        document.getElementById("race-icon").src = "pics/" + displayRace + ".png";
    }
}

function classSelect() {
    let classCont = document.getElementById("char-class");
    let displayClass = classCont.options[classCont.selectedIndex].text;

    
    if(displayClass === "Please choose a class..."){
        document.getElementById("class-icon").src = "pics/classes.png"
    }else{
        document.getElementById("class-icon").src = "pics/" + displayClass + ".png";
    }
}


window.addEventListener("load", loadEvent)


