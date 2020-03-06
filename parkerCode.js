console.log('Oh hello.');

window.addEventListener('DOMContentLoaded', () => {
    let mainTitle = document.getElementById("mainTitle");
    let shortContent = document.getElementById("shortContent");
    let bio = document.getElementById("bio");
    const shrinkBio = () => {
        bio.classList.remove("bioAlive");
        bio.classList.add("bioShrunk");
        document.bioShrunk = true;
    };
    let resume = document.getElementById("resume");
    const shrinkResume = () => {
        resume.classList.remove("resumeAlive");
        resume.classList.add("resumeShrunk");
    };
    let projects = document.getElementById("projects_total");
    const shrinkProjects = () => {
        projects.classList.remove("projects_total");
        projects.classList.add("projects_shrunk");
    };

    let currentLink = 'homeLink';
    

    //projects stuff
    let checkMateyLink = document.getElementById("checkMateyLink");
    let checkMateyProject = document.getElementById("checkMatey");
    let windWavesLink = document.getElementById("windWavesLink");
    let windWavesProject = document.getElementById("windWaves");
    let dontDieLink = document.getElementById("dontDieLink");
    let dontDieProject = document.getElementById("dontDieTogether");

    let currentProject = checkMateyProject;
    let currentProjectLink = checkMateyLink;

    document.getElementById("homeLink").addEventListener('click', () => {
        document.getElementById(currentLink).classList.remove("linkIshSpecial");
        currentLink = 'homeLink';
        document.getElementById(currentLink).classList.add("linkIshSpecial");
        mainTitle.innerHTML = "Parker Harris";
        shortContent.innerHTML = '<span class="black_text">Skills: </span>Ruby / Rails, Javascript, React, Redux, SQL, PHP, HTML / CSS';
        shrinkBio();
        shrinkResume();
        shrinkProjects();
    });
    document.getElementById("contactLink").addEventListener('click', () => {
        document.getElementById(currentLink).classList.remove("linkIshSpecial");
        currentLink = 'contactLink';
        document.getElementById(currentLink).classList.add("linkIshSpecial");
        mainTitle.innerHTML = "Contact Parker:";
        shortContent.innerHTML = "rparkerharris@gmail.com &nbsp&nbsp 802-760-7970";
        shrinkBio();
        shrinkResume();
        shrinkProjects();
    });
    document.getElementById("bioLink").addEventListener('click', () => {
        document.bioShrunk = false;
        document.getElementById(currentLink).classList.remove("linkIshSpecial");
        currentLink = 'bioLink';
        document.getElementById(currentLink).classList.add("linkIshSpecial");
        const message = "Hi, I'm Parker.";
        let currMessage = "";
        const messageInterval = setInterval(() => {
            currMessage += message[currMessage.length];
            if (!document.bioShrunk) mainTitle.innerHTML = currMessage;
            if (currMessage.length === message.length) {
                clearInterval(messageInterval);
            }
        }, 150);
        shortContent.innerHTML = '';
        bio.classList.remove("bioHidden");
        bio.classList.add("bioAlive");
        shrinkResume();
        shrinkProjects();
    });
    document.getElementById("resumeLink").addEventListener('click', () => {
        document.getElementById(currentLink).classList.remove("linkIshSpecial");
        currentLink = 'resumeLink';
        document.getElementById(currentLink).classList.add("linkIshSpecial");
        mainTitle.innerHTML = "Resume";
        shortContent.innerHTML = '';
        resume.classList.remove("resumeHidden");
        resume.classList.add("resumeAlive");
        shrinkBio();
        shrinkProjects();
    });
    document.getElementById("projectsLink").addEventListener('click', () => {
        document.getElementById(currentLink).classList.remove("linkIshSpecial");
        currentLink = 'projectsLink';
        document.getElementById(currentLink).classList.add("linkIshSpecial");
        mainTitle.innerHTML = "Projects:";
        shortContent.innerHTML = ''
        shrinkBio();
        shrinkResume();
        document.getElementById("projects_total").classList.remove("hidden_project");
        projects.classList.remove("projects_shrunk");
        projects.classList.add("projects_total");

        
        currentProject.classList.add("hidden_project");
        
        
        currentProjectLink.classList.remove("specialProject");
        
        checkMateyLink.classList.add("specialProject");
        checkMatey.classList.remove("hidden_project");
        currentProject = checkMateyProject;
        currentProjectLink = checkMateyLink;
    });


    


    checkMateyLink.addEventListener('click', () => {
        if (currentProject) {
            currentProject.classList.add("hidden_project");
        }
        if (currentProjectLink) {
            currentProjectLink.classList.remove("specialProject");
        }
        checkMateyLink.classList.add("specialProject");
        checkMatey.classList.remove("hidden_project");
        currentProject = checkMateyProject;
        currentProjectLink = checkMateyLink;
    });

    windWavesLink.addEventListener('click', () => {
        if (currentProject) {
            currentProject.classList.add("hidden_project");
        }
        if (currentProjectLink) {
            currentProjectLink.classList.remove("specialProject");
        }
        windWavesLink.classList.add("specialProject");
        windWaves.classList.remove("hidden_project");
        currentProject = windWavesProject;
        currentProjectLink = windWavesLink;
    });

    dontDieLink.addEventListener('click', () => {
        if (currentProject) {
            currentProject.classList.add("hidden_project");
        }
        if (currentProjectLink) {
            currentProjectLink.classList.remove("specialProject");
        }
        dontDieLink.classList.add("specialProject");
        dontDieProject.classList.remove("hidden_project");
        currentProject = dontDieProject;
        currentProjectLink = dontDieLink;
    });

});