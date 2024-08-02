// extract id from url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

const projects = [{"Title": "ShotPerfect","Description":"","Category": "Web App", 

},{},{},{},{},{}]


document.querySelector('.page-title h1').innerHTML = projects[id].Title;