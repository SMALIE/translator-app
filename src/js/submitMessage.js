import { translateText } from './translate';
import { showAlert } from './showAlert';

const createResponse = (translatedMessage) => {
  const output = document.querySelector('.output');
  output ? output.remove() : null;
  const template = `<div class="output form-floating mt-5">
  <textarea class="form-control" placeholder="Leave a message here" id="output" style="height: 100px" readonly>${translatedMessage}</textarea>
  <label for="output">Output</label>
  </div>`;

  document
    .querySelector('.container')
    .insertAdjacentHTML('beforeend', template);
};

export const showTranslatedMessage = async () => {
  const message = document.getElementById('message').value;
  const country = document.getElementById('countryId').value;

  if (!message || country == '-') return showAlert();

  try {
    const alert = document.querySelector('.alert');
    alert ? alert.remove() : null;
    
    const translatedMessage = await translateText(message, country);
    createResponse(translatedMessage);
  } catch (err) {
    return showAlert();
  }
};
