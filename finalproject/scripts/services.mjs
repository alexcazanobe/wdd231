export function setupServiceDialogs() {
  document.querySelectorAll('.service-info-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dialog = document.getElementById(btn.dataset.dialog);
      if (dialog) dialog.showModal();
    });
  });

  document.querySelectorAll('.close-dialog').forEach(btn => {
    btn.addEventListener('click', (e) => {
      btn.closest('dialog').close();
    });
  });
}