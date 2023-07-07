const blogId = document.querySelector('input[name="blog-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="blog-title"]').value;
  const text = document.querySelector('textarea[name="blog-body"]').value;
  const date = document.querySelector('input[name="blog-date"]').value;

  await fetch(`/api/newpost/${blogId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      date,
      text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/newpost/${blogId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);