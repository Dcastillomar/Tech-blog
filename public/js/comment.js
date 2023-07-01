const commentFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const text = document.querySelector('#text').value;
  
  if (name && text) {
    const blogId = window.location.pathname.split('/').pop();
    console.log(blogId, name, text )

    const response = await fetch(`/api/comment/blogs/${blogId}`, {
      method: 'POST',
      body: JSON.stringify({ name, text }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to comment');
    }
  }
};

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);