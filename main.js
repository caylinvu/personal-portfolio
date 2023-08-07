/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

// STYLE PROJECT INFO

// STYLE CONTACT INFO

// CREATE TABLET VIEW

// CREATE MOBILE VIEW
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG5cbmNvbnN0IGFkZFByb2plY3QgPSAobmFtZSwgaW1nTG9jLCByZXBvTGlua0xvYywgbGl2ZUxpbmtMb2MsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuY2xhc3NOYW1lID0gJ3Byb2plY3QtZGl2JztcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBpbWdMb2M7XG4gICAgaW1nLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWltZyc7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RJbmZvLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWluZm8nO1xuXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RIZWFkZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtaGVhZGVyJztcblxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlua0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbGluay1jb250YWluZXInO1xuXG4gICAgY29uc3QgcmVwb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcmVwb0xpbmsuaHJlZiA9IHJlcG9MaW5rTG9jO1xuXG4gICAgY29uc3QgbGl2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGl2ZUxpbmsuaHJlZiA9IGxpdmVMaW5rTG9jO1xuXG4gICAgY29uc3QgZ2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2hJY29uLnNyYyA9ICdpbWFnZXMvZ2l0aHViLnN2Zyc7XG4gICAgZ2hJY29uLmNsYXNzTmFtZSA9ICdpY29uJztcblxuICAgIGNvbnN0IGV4dGVybmFsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGV4dGVybmFsSWNvbi5zcmMgPSAnaW1hZ2VzL29wZW4taW4tbmV3LnN2Zyc7XG4gICAgZXh0ZXJuYWxJY29uLmNsYXNzTmFtZSA9ICdpY29uJztcblxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlcG9MaW5rKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpdmVMaW5rKTtcbiAgICByZXBvTGluay5hcHBlbmRDaGlsZChnaEljb24pO1xuICAgIGxpdmVMaW5rLmFwcGVuZENoaWxkKGV4dGVybmFsSWNvbik7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbn1cblxuYWRkUHJvamVjdCgnQmF0dGxlc2hpcCcsICdpbWFnZXMvYmF0dGxlc2hpcC5wbmcnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NheWxpbnZ1L2JhdHRsZXNoaXAnLCAnaHR0cHM6Ly9jYXlsaW52dS5naXRodWIuaW8vYmF0dGxlc2hpcC8nLCAnQmF0dGxlc2hpcCBnYW1lIGNyZWF0ZWQgdXNpbmcgSmF2YVNjcmlwdC4gVXNlciBpcyBhYmxlIHRvIHBsYWNlIHNoaXBzIG9uIHRoZSBib2FyZCBhbmQgcGxheSBhZ2FpbnN0IGFuIEFJLiBGaXJzdCB0byBzaW5rIGFsbCA1IHNoaXBzIHdpbnMuJyk7XG5hZGRQcm9qZWN0KCdXZWF0aGVyIEFwcCcsICdpbWFnZXMvd2VhdGhlci1hcHAucG5nJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYXlsaW52dS93ZWF0aGVyYXBwJywgJ2h0dHBzOi8vY2F5bGludnUuZ2l0aHViLmlvL3dlYXRoZXJhcHAvJywgJ1dlYXRoZXIgZm9yZWNhc3Qgc2l0ZSBjcmVhdGVkIHVzaW5nIEphdmFTY3JpcHQgYW5kIGEgd2VhdGhlciBBUEkuIFVzZXIgY2FuIHNlYXJjaCBsb2NhdGlvbnMgdG8gc2VlIGEgYmFzaWMgb3ZlcnZpZXcgb2YgdGhlIGN1cnJlbnQgZm9yZWNhc3QsIGFsb25nIHdpdGggZGFpbHkgYW5kIGhvdXJseSBpbmZvcm1hdGlvbi4nKTtcbmFkZFByb2plY3QoJ1RvIERvIExpc3QnLCAnaW1hZ2VzL3RvLWRvLnBuZycsICdodHRwczovL2dpdGh1Yi5jb20vY2F5bGludnUvdG9kb2xpc3QnLCAnaHR0cHM6Ly9jYXlsaW52dS5naXRodWIuaW8vdG9kb2xpc3QvJywgJ1RvIGRvIGxpc3QgcHJvZ3JhbSBjcmVhdGVkIHVzaW5nIEphdmFTY3JpcHQuIEFsbG93cyB0aGUgdXNlciB0byBjcmVhdGUgcHJvamVjdHMgdG8gYWRkIHRvIGRvIGl0ZW1zIHRvLiBBbGwgdG8gZG8gaXRlbXMgY2FuIGJlIHZpZXdlZCBmcm9tIHRoZSBob21lIHBhZ2UuJyk7XG5hZGRQcm9qZWN0KCdUaWMgVGljIFRvZScsICdpbWFnZXMvdGljdGFjdG9lLnBuZycsICdodHRwczovL2dpdGh1Yi5jb20vY2F5bGludnUvdGljdGFjdG9lJywgJ2h0dHBzOi8vY2F5bGludnUuZ2l0aHViLmlvL3RpY3RhY3RvZS8nLCAnQnJvd3NlciB0aWMgdGFjIHRvZSBnYW1lIGNyZWF0ZWQgdXNpbmcgSmF2YVNjcmlwdC4gQWxsb3dzIFB2UCBwbGF5LCB3aXRoIHBsYXkgYWdhaW5zdCBBSSBjb21pbmcgaW4gdGhlIGZ1dHVyZS4nKTtcbmFkZFByb2plY3QoJ0NhbGN1bGF0b3InLCAnaW1hZ2VzL2NhbGN1bGF0b3IucG5nJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYXlsaW52dS9jYWxjdWxhdG9yJywgJ2h0dHBzOi8vY2F5bGludnUuZ2l0aHViLmlvL2NhbGN1bGF0b3IvJywgJ0NhbGN1bGF0b3IgY3JlYXRlZCB1c2luZyBKYXZhU2NyaXB0LiBBbGxvd3Mgc2ltcGxlIGFkZGl0aW9uLCBzdWJ0cmFjdGlvbiwgbXVsdGlwbGljYXRpb24sIGFuZCBhZGRpdGlvbiwgYWxvbmcgd2l0aCBvdGhlciBiYXNpYyBjYWxjdWxhdG9yIGZ1bmN0aW9uYWxpdHkuJyk7XG5hZGRQcm9qZWN0KCdFdGNoLUEtU2tldGNoJywgJ2ltYWdlcy9ldGNoYXNrZXRjaC5wbmcnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NheWxpbnZ1L2V0Y2hhc2tldGNoJywgJ2h0dHBzOi8vY2F5bGludnUuZ2l0aHViLmlvL2V0Y2hhc2tldGNoLycsICdCcm93c2VyIGV0Y2gtYS1za2V0Y2ggY3JlYXRlZCB1c2luZyBKYXZhU2NyaXB0LiBVc2VyIGNhbiBjaGFuZ2UgZ3JpZCBzaXplIGFuZCB0b2dnbGUgYmV0d2VlbiBjbGFzc2ljIGFuZCByYWluYm93IG1vZGVzLicpO1xuXG4vLyBUTyBET1xuXG4vLyBTVFlMRSBQUk9KRUNUIElORk9cblxuLy8gU1RZTEUgQ09OVEFDVCBJTkZPXG5cbi8vIENSRUFURSBUQUJMRVQgVklFV1xuXG4vLyBDUkVBVEUgTU9CSUxFIFZJRVciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=