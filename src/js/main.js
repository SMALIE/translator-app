import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { translateText } from './translate';
import { addOptions } from './createOptions';
import { showTranslatedMessage } from './submitMessage';

addOptions()
document.querySelector('#button').addEventListener('click', showTranslatedMessage);
