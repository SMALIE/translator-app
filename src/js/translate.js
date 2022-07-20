import translate from 'translate';

export const translateText = async (message, country) => {
  translate.engine = 'google';
  return await translate(message, country);
}