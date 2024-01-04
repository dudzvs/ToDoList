const switchTheme = document.getElementById('theme');

switchTheme.addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', 
    e.target.checked ? 'light' : 'dark')
})