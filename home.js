function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}