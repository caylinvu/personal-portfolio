/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktcHJvamVjdHMnKTtcblxuY29uc3QgYWRkUHJvamVjdCA9IChuYW1lLCBpbWdMb2MsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IGltZ0xvYztcblxuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgZ2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2hJY29uLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9naXRodWIuc3ZnJztcbiAgICBnaEljb24uY2xhc3NOYW1lID0gJ2ljb24nO1xuXG4gICAgY29uc3QgbGlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGlJY29uLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9saW5rZWRpbi5zdmcnO1xuICAgIGxpSWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBteVByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoZ2hJY29uKTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChsaUljb24pO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbn1cblxuLy8gVE8gRE9cblxuLy8gQ1JFQVRFIE1ZIFBST0pFQ1RTXG5cbi8vIEZJTEwgSU4gUFJPSkVDVCBJTkZPXG5cbi8vIFNUWUxFIEFCT1VUIE1FXG5cbi8vIFNUWUxFIFBST0pFQ1QgSU5GT1xuXG4vLyBTVFlMRSBDT05UQUNUIElORk9cblxuLy8gQ1JFQVRFIFRBQkxFVCBWSUVXXG5cbi8vIENSRUFURSBNT0JJTEUgVklFVyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==