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

addProject('Battleship', 'images/battleship.png', 'https://github.com/caylinvu/battleship', 'https://caylinvu.github.io/battleship/', 'Battleship game created using Javascript. User is able to place ships on the board and play against an AI.');

// TO DO

// CREATE MY PROJECTS

// FILL IN PROJECT INFO

// STYLE ABOUT ME

// STYLE PROJECT INFO

// STYLE CONTACT INFO

// CREATE TABLET VIEW

// CREATE MOBILE VIEW
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXByb2plY3RzJyk7XG5cbmNvbnN0IGFkZFByb2plY3QgPSAobmFtZSwgaW1nTG9jLCByZXBvTGlua0xvYywgbGl2ZUxpbmtMb2MsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IGltZ0xvYztcbiAgICBpbWcuY2xhc3NOYW1lID0gJ3Byb2plY3QtaW1nJztcblxuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgcmVwb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcmVwb0xpbmsuaHJlZiA9IHJlcG9MaW5rTG9jO1xuXG4gICAgY29uc3QgbGl2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGl2ZUxpbmsuaHJlZiA9IGxpdmVMaW5rTG9jO1xuXG4gICAgY29uc3QgZ2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2hJY29uLnNyYyA9ICdpbWFnZXMvZ2l0aHViLnN2Zyc7XG4gICAgZ2hJY29uLmNsYXNzTmFtZSA9ICdpY29uJztcblxuICAgIGNvbnN0IGV4dGVybmFsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGV4dGVybmFsSWNvbi5zcmMgPSAnaW1hZ2VzL29wZW4taW4tbmV3LnN2Zyc7XG4gICAgZXh0ZXJuYWxJY29uLmNsYXNzTmFtZSA9ICdpY29uJztcblxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChyZXBvTGluayk7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQobGl2ZUxpbmspO1xuICAgIHJlcG9MaW5rLmFwcGVuZENoaWxkKGdoSWNvbik7XG4gICAgbGl2ZUxpbmsuYXBwZW5kQ2hpbGQoZXh0ZXJuYWxJY29uKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG59XG5cbmFkZFByb2plY3QoJ0JhdHRsZXNoaXAnLCAnaW1hZ2VzL2JhdHRsZXNoaXAucG5nJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYXlsaW52dS9iYXR0bGVzaGlwJywgJ2h0dHBzOi8vY2F5bGludnUuZ2l0aHViLmlvL2JhdHRsZXNoaXAvJywgJ0JhdHRsZXNoaXAgZ2FtZSBjcmVhdGVkIHVzaW5nIEphdmFzY3JpcHQuIFVzZXIgaXMgYWJsZSB0byBwbGFjZSBzaGlwcyBvbiB0aGUgYm9hcmQgYW5kIHBsYXkgYWdhaW5zdCBhbiBBSS4nKTtcblxuLy8gVE8gRE9cblxuLy8gQ1JFQVRFIE1ZIFBST0pFQ1RTXG5cbi8vIEZJTEwgSU4gUFJPSkVDVCBJTkZPXG5cbi8vIFNUWUxFIEFCT1VUIE1FXG5cbi8vIFNUWUxFIFBST0pFQ1QgSU5GT1xuXG4vLyBTVFlMRSBDT05UQUNUIElORk9cblxuLy8gQ1JFQVRFIFRBQkxFVCBWSUVXXG5cbi8vIENSRUFURSBNT0JJTEUgVklFVyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==