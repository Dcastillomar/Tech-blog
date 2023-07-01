const blogFormHandler = async (event) => {
  event.preventDefault();

  const blogName = document.querySelector('#blogName').value;
  const blogDate = document.querySelector('#blogDate').value;
  const blogText = document.querySelector('#blogText').value;
  const userId = document.querySelector('#userId').value;

  if (blogName && blogDate && blogText && userId) {
    const response = await fetch('/dashboard', {
      method: 'POST',
      body: JSON.stringify({ blogName, blogDate, blogText, userId }),
      headers: { 'Content-Type': 'application/json' },
    });

  //   if (response.ok) {
  //     document.location.reload('');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
};
}

document.querySelector('.blog-form').addEventListener('submit', blogFormHandler);