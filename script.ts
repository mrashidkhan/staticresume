document.addEventListener('DOMContentLoaded', () => {
    const skillsButton = document.getElementById('toggle-skills');
    const mySection = document.getElementById('skills');
  
    if (skillsButton && mySection) {
      skillsButton.addEventListener('click', () => {
        mySection.classList.toggle('hidden');
      });
    } else {
      console.error('Required elements not found in the DOM');
    }
  });
