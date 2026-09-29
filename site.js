const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
favicon.href = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/resources/') ? '../favicon.svg' : 'favicon.svg';
document.head.appendChild(favicon);

const menuButton = document.querySelector('[data-menu]');
const nav = document.querySelector('.nav-links');
if (menuButton && nav) menuButton.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.copyEmail;
    const status = button.parentElement.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(email);
      if (status) status.textContent = 'Email copied.';
    } catch {
      if (status) status.textContent = 'Copy unavailable—please use the email link.';
    }
  });
});
