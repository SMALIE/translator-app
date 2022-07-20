export const showAlert = () => {
  const alert = document.querySelector('.alert');
  alert ? alert.remove() : null;

  const template = `<div class="alert alert-danger mt-3" role="alert">
  <strong>Error!</strong> Please, use other language.
</div>`;
  document
    .querySelector('.container')
    .insertAdjacentHTML('beforeend', template);
};
