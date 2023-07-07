const blogFormHandler = async (event) => {
  event.preventDefault();
 
  const name = document.querySelector('textarea[name="blogName"]').value;
  const date = document.querySelector('textarea[name="blogDate"]').value;
  const text = document.querySelector('textarea[name="blogText"]').value;
  

 

  if (blogName && blogDate && blogText) {
    const response = await fetch('/api/newpost', {
      method: 'POST',
      body: JSON.stringify({ name, date, text }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');;
    } else {
      alert(response.statusText);
    }
  }
};


document.querySelector('#blog-form').addEventListener('submit', blogFormHandler);

