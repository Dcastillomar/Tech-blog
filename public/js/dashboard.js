const blogFormHandler = async (event) => {
    event.preventDefault();
  
    const blogName = document.querySelector('#blogName').value;
    const blogDate = document.querySelector('#blogDate').value;
    const blogText = document.querySelector('#blogText').value;
  
    if (blogName && blogDate && blogText) {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({ blogName, blogDate, blogText }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload('');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#blog-form')
  .addEventListener('Submit', blogFormHandler);