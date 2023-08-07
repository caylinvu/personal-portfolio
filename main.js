/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

addProject('Battleship', 'images/battleship.png', 'https://github.com/caylinvu/battleship', 'https://caylinvu.github.io/battleship/', 'Battleship game created using JavaScript. User is able to place ships on the board and play against an AI. First to sink all 5 ships wins.');
addProject('Weather App', 'images/weather-app.png', 'https://github.com/caylinvu/weatherapp', 'https://caylinvu.github.io/weatherapp/', 'Weather forecast site created using JavaScript and a weather API. User can search locations to see a basic overview of the current forecast, along with daily and hourly information.');
addProject('To Do List', 'images/to-do.png', 'https://github.com/caylinvu/todolist', 'https://caylinvu.github.io/todolist/', 'To do list program created using JavaScript. Allows the user to create projects to add to do items to. All to do items can be viewed from the home page.');
addProject('Tic Tic Toe', 'images/tictactoe.png', 'https://github.com/caylinvu/tictactoe', 'https://caylinvu.github.io/tictactoe/', 'Browser tic tac toe game created using JavaScript. Allows PvP play, with play against AI coming in the future.');
addProject('Calculator', 'images/calculator.png', 'https://github.com/caylinvu/calculator', 'https://caylinvu.github.io/calculator/', 'Calculator created using JavaScript. Allows simple addition, subtraction, multiplication, and addition, along with other basic calculator functionality.');
addProject('Etch-A-Sketch', 'images/etchasketch.png', 'https://github.com/caylinvu/etchasketch', 'https://caylinvu.github.io/etchasketch/', 'Browser etch-a-sketch created using JavaScript. User can change grid size and toggle between classic and rainbow modes.');

// TO DO

// STYLE ABOUT ME

// STYLE PROJECT INFO

// STYLE CONTACT INFO

// CREATE TABLET VIEW

// CREATE MOBILE VIEW
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1wcm9qZWN0cycpO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKG5hbWUsIGltZ0xvYywgcmVwb0xpbmtMb2MsIGxpdmVMaW5rTG9jLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBpbWdMb2M7XG4gICAgaW1nLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWltZyc7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IHJlcG9MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHJlcG9MaW5rLmhyZWYgPSByZXBvTGlua0xvYztcblxuICAgIGNvbnN0IGxpdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpdmVMaW5rLmhyZWYgPSBsaXZlTGlua0xvYztcblxuICAgIGNvbnN0IGdoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdoSWNvbi5zcmMgPSAnaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuICAgIGdoSWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG5cbiAgICBjb25zdCBleHRlcm5hbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBleHRlcm5hbEljb24uc3JjID0gJ2ltYWdlcy9vcGVuLWluLW5ldy5zdmcnO1xuICAgIGV4dGVybmFsSWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBteVByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQocmVwb0xpbmspO1xuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGxpdmVMaW5rKTtcbiAgICByZXBvTGluay5hcHBlbmRDaGlsZChnaEljb24pO1xuICAgIGxpdmVMaW5rLmFwcGVuZENoaWxkKGV4dGVybmFsSWNvbik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xufVxuXG5hZGRQcm9qZWN0KCdCYXR0bGVzaGlwJywgJ2ltYWdlcy9iYXR0bGVzaGlwLnBuZycsICdodHRwczovL2dpdGh1Yi5jb20vY2F5bGludnUvYmF0dGxlc2hpcCcsICdodHRwczovL2NheWxpbnZ1LmdpdGh1Yi5pby9iYXR0bGVzaGlwLycsICdCYXR0bGVzaGlwIGdhbWUgY3JlYXRlZCB1c2luZyBKYXZhU2NyaXB0LiBVc2VyIGlzIGFibGUgdG8gcGxhY2Ugc2hpcHMgb24gdGhlIGJvYXJkIGFuZCBwbGF5IGFnYWluc3QgYW4gQUkuIEZpcnN0IHRvIHNpbmsgYWxsIDUgc2hpcHMgd2lucy4nKTtcbmFkZFByb2plY3QoJ1dlYXRoZXIgQXBwJywgJ2ltYWdlcy93ZWF0aGVyLWFwcC5wbmcnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NheWxpbnZ1L3dlYXRoZXJhcHAnLCAnaHR0cHM6Ly9jYXlsaW52dS5naXRodWIuaW8vd2VhdGhlcmFwcC8nLCAnV2VhdGhlciBmb3JlY2FzdCBzaXRlIGNyZWF0ZWQgdXNpbmcgSmF2YVNjcmlwdCBhbmQgYSB3ZWF0aGVyIEFQSS4gVXNlciBjYW4gc2VhcmNoIGxvY2F0aW9ucyB0byBzZWUgYSBiYXNpYyBvdmVydmlldyBvZiB0aGUgY3VycmVudCBmb3JlY2FzdCwgYWxvbmcgd2l0aCBkYWlseSBhbmQgaG91cmx5IGluZm9ybWF0aW9uLicpO1xuYWRkUHJvamVjdCgnVG8gRG8gTGlzdCcsICdpbWFnZXMvdG8tZG8ucG5nJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYXlsaW52dS90b2RvbGlzdCcsICdodHRwczovL2NheWxpbnZ1LmdpdGh1Yi5pby90b2RvbGlzdC8nLCAnVG8gZG8gbGlzdCBwcm9ncmFtIGNyZWF0ZWQgdXNpbmcgSmF2YVNjcmlwdC4gQWxsb3dzIHRoZSB1c2VyIHRvIGNyZWF0ZSBwcm9qZWN0cyB0byBhZGQgdG8gZG8gaXRlbXMgdG8uIEFsbCB0byBkbyBpdGVtcyBjYW4gYmUgdmlld2VkIGZyb20gdGhlIGhvbWUgcGFnZS4nKTtcbmFkZFByb2plY3QoJ1RpYyBUaWMgVG9lJywgJ2ltYWdlcy90aWN0YWN0b2UucG5nJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYXlsaW52dS90aWN0YWN0b2UnLCAnaHR0cHM6Ly9jYXlsaW52dS5naXRodWIuaW8vdGljdGFjdG9lLycsICdCcm93c2VyIHRpYyB0YWMgdG9lIGdhbWUgY3JlYXRlZCB1c2luZyBKYXZhU2NyaXB0LiBBbGxvd3MgUHZQIHBsYXksIHdpdGggcGxheSBhZ2FpbnN0IEFJIGNvbWluZyBpbiB0aGUgZnV0dXJlLicpO1xuYWRkUHJvamVjdCgnQ2FsY3VsYXRvcicsICdpbWFnZXMvY2FsY3VsYXRvci5wbmcnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NheWxpbnZ1L2NhbGN1bGF0b3InLCAnaHR0cHM6Ly9jYXlsaW52dS5naXRodWIuaW8vY2FsY3VsYXRvci8nLCAnQ2FsY3VsYXRvciBjcmVhdGVkIHVzaW5nIEphdmFTY3JpcHQuIEFsbG93cyBzaW1wbGUgYWRkaXRpb24sIHN1YnRyYWN0aW9uLCBtdWx0aXBsaWNhdGlvbiwgYW5kIGFkZGl0aW9uLCBhbG9uZyB3aXRoIG90aGVyIGJhc2ljIGNhbGN1bGF0b3IgZnVuY3Rpb25hbGl0eS4nKTtcbmFkZFByb2plY3QoJ0V0Y2gtQS1Ta2V0Y2gnLCAnaW1hZ2VzL2V0Y2hhc2tldGNoLnBuZycsICdodHRwczovL2dpdGh1Yi5jb20vY2F5bGludnUvZXRjaGFza2V0Y2gnLCAnaHR0cHM6Ly9jYXlsaW52dS5naXRodWIuaW8vZXRjaGFza2V0Y2gvJywgJ0Jyb3dzZXIgZXRjaC1hLXNrZXRjaCBjcmVhdGVkIHVzaW5nIEphdmFTY3JpcHQuIFVzZXIgY2FuIGNoYW5nZSBncmlkIHNpemUgYW5kIHRvZ2dsZSBiZXR3ZWVuIGNsYXNzaWMgYW5kIHJhaW5ib3cgbW9kZXMuJyk7XG5cbi8vIFRPIERPXG5cbi8vIFNUWUxFIEFCT1VUIE1FXG5cbi8vIFNUWUxFIFBST0pFQ1QgSU5GT1xuXG4vLyBTVFlMRSBDT05UQUNUIElORk9cblxuLy8gQ1JFQVRFIFRBQkxFVCBWSUVXXG5cbi8vIENSRUFURSBNT0JJTEUgVklFVyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==