document.addEventListener("DOMContentLoaded", () => {


    // Menu buttons change pages
    function menuOptionsLocalStorage(){
        let storedObjectString = localStorage.getItem('cv-menu-options');
        let retrievedObject = JSON.parse(storedObjectString);
    
        if(retrievedObject){
            for (const key in retrievedObject) {
                if (retrievedObject.hasOwnProperty(key)) {
                    let value = retrievedObject[key];
                    if(value === true){
                        if(key === "menuHome"){
                            document.getElementById("content-home").style.display = "flex";
                            document.getElementById("menu-option-home").style.color = "var(--input-color)";
                        }
                        if(key === "menuMessage"){
                            document.getElementById("content-message").style.display = "flex";
                            document.getElementById("menu-option-message").style.color = "var(--input-color)";
                        }
                        if(key === "menuRoadmap"){
                            document.getElementById("content-roadmap").style.display = "flex";
                            document.getElementById("menu-option-roadmap").style.color = "var(--input-color)";
                        }
                        if(key === "menuSkills"){
                            document.getElementById("content-skills").style.display = "flex";
                            document.getElementById("menu-option-skills").style.color = "var(--input-color)";
                        }
                    }
                    else{
                        if(key === "menuHome"){
                            document.getElementById("content-home").style.display = "none";
                            document.getElementById("menu-option-home").style.color = "var(--background)";
                        }
                        if(key === "menuMessage"){
                            document.getElementById("content-message").style.display = "none";
                            document.getElementById("menu-option-message").style.color = "var(--background)";
                        }
                        if(key === "menuRoadmap"){
                            document.getElementById("content-roadmap").style.display = "none";
                            document.getElementById("menu-option-roadmap").style.color = "var(--background)";
                        }
                        if(key === "menuSkills"){
                            document.getElementById("content-skills").style.display = "none";
                            document.getElementById("menu-option-skills").style.color = "var(--background)";
                        }
                    }
                }
            }
        }
        else{
            let data = { menuHome: 'true', menuMessage: 'false', menuRoadmap: 'false', menuSkills: 'false' };
            localStorage.setItem('cv-menu-options', JSON.stringify(data));
        }
    }
    menuOptionsLocalStorage();

    document.addEventListener("click", (e) => {
        if(e.target.id === "menu-option-home"){
            let data = { menuHome: true, menuMessage: false, menuRoadmap: false, menuSkills: false };
            localStorage.setItem('cv-menu-options', JSON.stringify(data));
            menuOptionsLocalStorage();
        }
        if(e.target.id === "menu-option-message"){
            let data = { menuHome: false, menuMessage: true, menuRoadmap: false, menuSkills: false };
            localStorage.setItem('cv-menu-options', JSON.stringify(data));
            menuOptionsLocalStorage();
        }
        if(e.target.id === "menu-option-roadmap"){
            let data = { menuHome: false, menuMessage: false, menuRoadmap: true, menuSkills: false };
            localStorage.setItem('cv-menu-options', JSON.stringify(data));
            menuOptionsLocalStorage();
        }
        if(e.target.id === "menu-option-skills"){
            let data = { menuHome: false, menuMessage: false, menuRoadmap: false, menuSkills: true };
            localStorage.setItem('cv-menu-options', JSON.stringify(data));
            menuOptionsLocalStorage();
        }
        if(e.target.id === "menu-option-download"){
            
        }
    });

    /*let mouseHoverArr = ["menu-icons-home", "menu-icons-message", "menu-icons-roadmap", "menu-icons-skills", "menu-icons-download"];
    let mouseHoverArr2 = ["menu-option-home", "menu-option-message", "menu-option-roadmap", "menu-option-skills", "menu-option-download"];

    // Add a mouseover event listener
    document.addEventListener('mouseover', (e) => {
        let elemId = e.target.id;

        

        if(elemId){
            console.log(firstPart)
        }
    });

    // Add a mouseout event listener
    document.addEventListener('mouseout', (e) => {
        
    });*/
    

});