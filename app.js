document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('clickBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      console.log('NameSilo App ready!');
    });
  }
});