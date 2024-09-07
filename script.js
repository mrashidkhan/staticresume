document.addEventListener('DOMContentLoaded', function () {
    var skillsButton = document.getElementById('toggle-skills');
    var mySection = document.getElementById('skills');
    if (skillsButton && mySection) {
        skillsButton.addEventListener('click', function () {
            mySection.classList.toggle('hidden');
        });
    }
    else {
        console.error('Required elements not found in the DOM');
    }
});
