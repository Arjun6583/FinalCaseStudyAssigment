function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown.style.display === 'none') {
    if((document.getElementById('radixSortDropdown').style.display)!=='none')
    {
      document.getElementById('radixSortDropdown').style.display = 'none';
    }
      
    if( (document.getElementById('bucketSortDropdown').style.display)!=='none')
    {
      document.getElementById('bucketSortDropdown').style.display = 'none';
    }
      
    if((document.getElementById('countingSortDropdown').style.display)!=='none')
    {
      document.getElementById('countingSortDropdown').style.display='none';
    }

    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}