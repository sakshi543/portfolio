
function openProjectModal(title, description, githubLink) {
    document.getElementById('project-title').innerHTML = title;
    document.getElementById('project-description').innerHTML = description + '<br><br><a href="' + githubLink + '" target="_blank">GitHub Repository</a>';
    document.getElementById('project-modal').style.display = 'block';
}


function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
}
function showDeveloperInfo() {
    document.getElementById('developer-info').style.display = 'block';
}

function hideDeveloperInfo() {
    document.getElementById('developer-info').style.display = 'none';
}