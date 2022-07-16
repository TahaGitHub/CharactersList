const INSERT_CHARACTERS = 'INSERT.CHARACTERS';

const setCharacters = characters => {
  return {
    type: INSERT_CHARACTERS,
    characters,
  };
};

export default {
  INSERT_CHARACTERS,

  setCharacters,
};
