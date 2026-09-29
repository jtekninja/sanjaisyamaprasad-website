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
