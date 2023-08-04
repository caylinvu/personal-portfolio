const myProjects = document.querySelector('.my-projects');

const addProject = (name, imgLoc, repoLinkLoc, liveLinkLoc, description) => {
    const projectDiv = document.createElement('div');

    const img = document.createElement('img');
    img.src = imgLoc;
    img.className = 'project-img';

    const projectInfo = document.createElement('div');

    const projectName = document.createElement('h3');
    projectName.textContent = name;

    const repoLink = document.createElement('a');
    repoLink.href = repoLinkLoc;

    const liveLink = document.createElement('a');
    liveLink.href = liveLinkLoc;

    const ghIcon = document.createElement('img');
    ghIcon.src = 'images/github.svg';
    ghIcon.className = 'icon';

    const externalIcon = document.createElement('img');
    externalIcon.src = 'images/open-in-new.svg';
    externalIcon.className = 'icon';

    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;

    myProjects.appendChild(projectDiv);
    projectDiv.appendChild(img);
    projectDiv.appendChild(projectInfo);
    projectInfo.appendChild(projectName);
    projectInfo.appendChild(repoLink);
    projectInfo.appendChild(liveLink);
    repoLink.appendChild(ghIcon);
    liveLink.appendChild(externalIcon);
    projectDiv.appendChild(projectDescription);
}

addProject('Battleship', 'images/battleship.png', 'https://github.com/caylinvu/battleship', 'https://caylinvu.github.io/battleship/', 'Battleship game created using Javascript. User is able to place ships on the board and play against an AI.');

// TO DO

// CREATE MY PROJECTS

// FILL IN PROJECT INFO

// STYLE ABOUT ME

// STYLE PROJECT INFO

// STYLE CONTACT INFO

// CREATE TABLET VIEW

// CREATE MOBILE VIEW