let body = document.body;
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
  darkModeToggler.addEventListener('click', toggleTheme);
  
  if (body.classList.contains('dark')) {
    darkModeToggler.checked = true;
  }

  function toggleTheme() {
    darkModeToggler = document.getElementById('dark-mode-toggler');
    if (darkModeToggler.checked) {
      body.classList.add('dark');
      localStorage.setItem('dark', 'true');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('dark', 'false');
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

  let forms = document.querySelectorAll('.form');
  Array.from(forms).forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
    })
  })
})