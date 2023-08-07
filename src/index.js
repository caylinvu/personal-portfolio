const projectContainer = document.querySelector('.project-container');

const addProject = (name, imgLoc, repoLinkLoc, liveLinkLoc, description) => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-div';

    const img = document.createElement('img');
    img.src = imgLoc;
    img.className = 'project-img';

    const projectInfo = document.createElement('div');
    projectInfo.className = 'project-info';

    const projectHeader = document.createElement('div');
    projectHeader.className = 'project-header';

    const nameDiv = document.createElement('div');

    const projectName = document.createElement('h3');
    projectName.textContent = name;

    const linkContainer = document.createElement('div');
    linkContainer.className = 'link-container';

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

    projectContainer.appendChild(projectDiv);
    projectDiv.appendChild(img);
    projectDiv.appendChild(projectInfo);
    projectInfo.appendChild(projectHeader);
    projectHeader.appendChild(nameDiv);
    nameDiv.appendChild(projectName);
    projectHeader.appendChild(linkContainer);
    linkContainer.appendChild(repoLink);
    linkContainer.appendChild(liveLink);
    repoLink.appendChild(ghIcon);
    liveLink.appendChild(externalIcon);
    projectInfo.appendChild(projectDescription);
}

addProject('Battleship', 'images/battleship.png', 'https://github.com/caylinvu/battleship', 'https://caylinvu.github.io/battleship/', 'Battleship game created using JavaScript. User is able to place ships on the board and play against an AI. First to sink all 5 ships wins.');
addProject('Weather App', 'images/weather-app.png', 'https://github.com/caylinvu/weatherapp', 'https://caylinvu.github.io/weatherapp/', 'Weather forecast site created using JavaScript and a weather API. User can search locations to see a basic overview of the current forecast, along with daily and hourly information.');
addProject('To Do List', 'images/to-do.png', 'https://github.com/caylinvu/todolist', 'https://caylinvu.github.io/todolist/', 'To do list program created using JavaScript. Allows the user to create projects to add to do items to. All to do items can be viewed from the home page.');
addProject('Tic Tic Toe', 'images/tictactoe.png', 'https://github.com/caylinvu/tictactoe', 'https://caylinvu.github.io/tictactoe/', 'Browser tic tac toe game created using JavaScript. Allows PvP play, with play against AI coming in the future.');
addProject('Calculator', 'images/calculator.png', 'https://github.com/caylinvu/calculator', 'https://caylinvu.github.io/calculator/', 'Calculator created using JavaScript. Allows simple addition, subtraction, multiplication, and addition, along with other basic calculator functionality.');
addProject('Etch-A-Sketch', 'images/etchasketch.png', 'https://github.com/caylinvu/etchasketch', 'https://caylinvu.github.io/etchasketch/', 'Browser etch-a-sketch created using JavaScript. User can change grid size and toggle between classic and rainbow modes.');

// TO DO

// STYLE CONTACT INFO

// CREATE TABLET VIEW

// CREATE MOBILE VIEW