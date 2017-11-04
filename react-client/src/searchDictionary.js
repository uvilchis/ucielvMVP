import DICTIONARY_API_KEY from '../config/dictionary.js';
import Dictionary from 'oxford-dictionary-api';
let app_id = '04797489';
let app_key = DICTIONARY_API_KEY;

let dictionaryApi = new Dictionary(app_id, app_key);

dictionaryApi.find('atlas', (err, data) => {
  if (err) {
    return console.error(err);
  }
console.log(data)
})

export default dictionaryApi
