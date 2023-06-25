let body = document.getElementById('body');
const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
const darkModePreference = localStorage.getItem('dark');

if (isDarkModePreferred && !darkModePreference) {
  body.classList.add('dark');
} 
else if (darkModePreference === 'true') {
  body.classList.add('dark');
}

document.addEventListener('DOMContentLoaded', () => {
  let darkModeToggler = document.getElementById('dark-mode-toggler');
  let darkModeButton = document.querySelector('.swap');
  darkModeToggler.addEventListener('click', toggleTheme);
  
  if (body.classList.contains('dark')) {
    darkModeButton.classList.add('swap-active');
  }

  function toggleTheme() {
    darkModeButton = document.querySelector('.swap');
    if (darkModeButton.classList.contains('swap-active')) {
      darkModeButton.classList.remove('swap-active')
      body.classList.remove('dark');
      localStorage.setItem('dark', 'false');
    } else {
      darkModeButton.classList.add('swap-active');
      body.classList.add('dark');
      localStorage.setItem('dark', 'true');
    }
  }


  const toggleButton = document.getElementById('toggleButton');
  const content = document.getElementById('content');
  const arrow = document.getElementById('accordion-arrow-down');
  const ariaExpandedLine = document.getElementById("aria-expanded-line");
  const ariaHiddenLine = document.getElementById("aria-hidden-line");

  toggleButton.addEventListener('click', toggleContent);

  function toggleContent() {
    arrow.classList.toggle('rotate-180');
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    const hidden = content.getAttribute('aria-hidden') === 'true';
    toggleButton.setAttribute('aria-expanded', !expanded);
    content.setAttribute('aria-hidden', !hidden);
    content.classList.toggle('hidden');
    
    if (ariaExpandedLine.innerText.includes('false')) {
      ariaExpandedLine.innerText = ariaExpandedLine.innerText.replace("false", "true");
      ariaHiddenLine.innerText = ariaHiddenLine.innerText.replace("true", "false");
    } else {
      ariaExpandedLine.innerText = ariaExpandedLine.innerText.replace("true", "false");
      ariaHiddenLine.innerText = ariaHiddenLine.innerText.replace("false", "true");
    }
    
  }
})