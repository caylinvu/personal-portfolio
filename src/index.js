const myProjects = document.querySelector('.my-projects');

const addProject = (name, imgLoc, description) => {
    const projectDiv = document.createElement('div');

    const img = document.createElement('img');
    img.src = imgLoc;

    const projectInfo = document.createElement('div');

    const projectName = document.createElement('h3');
    projectName.textContent = name;

    const ghIcon = document.createElement('img');
    ghIcon.src = '../dist/images/github.svg';
    ghIcon.className = 'icon';

    const liIcon = document.createElement('img');
    liIcon.src = '../dist/images/linkedin.svg';
    liIcon.className = 'icon';

    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;

    myProjects.appendChild(projectDiv);
    projectDiv.appendChild(img);
    projectDiv.appendChild(projectInfo);
    projectInfo.appendChild(projectName);
    projectInfo.appendChild(ghIcon);
    projectInfo.appendChild(liIcon);
    projectDiv.appendChild(projectDescription);
}

// TO DO

// CREATE MY PROJECTS

// FILL IN PROJECT INFO

// STYLE ABOUT ME

// STYLE PROJECT INFO

// STYLE CONTACT INFO

// CREATE TABLET VIEW

// CREATE MOBILE VIEW