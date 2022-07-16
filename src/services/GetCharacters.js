import axios from 'axios';

/*
 ** Get All Characters from Api
 */
const getCharacters = () => {
  return new Promise((res, rej) => {
    axios
      .get('https://breakingbadapi.com/api/characters')
      .then(function (response) {
        // handle success
        // console.log(response);
        res(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        rej(error);
      });
  });
};

export default getCharacters;
