const logout = async function() {
    const response = await fetch('/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out');
    }
  };
  
  document.querySelector('#logOutButton').addEventListener('click', logout);