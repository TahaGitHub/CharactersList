import {Characher} from '../src/models/CharacterModel';

import getCharacters from '../src/services/GetCharacters';

describe('Test Api Services', () => {
  const mocker = jest.fn(getCharacters);

  let globalRequestData = [];

  // it('Just to make test more fast because request api take time -_-', () => {
  //   expect(true);
  // });
  // return;

  beforeEach(() => {
    return mocker().then(data => {
      globalRequestData = [...data];
    });
  }, 10000);

  test('Check api is called \
    shoul return is called', () => {
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(1);
  });

  test('Check data state from api \
    should set in defined and length more than 0', async () => {
    expect(globalRequestData).toBeDefined();
    expect(globalRequestData.length).toBeGreaterThan(0);
  });

  test('Check data type from apis \
    should be the coming data same Character model', () => {
    let character = new Characher(globalRequestData[0]);

    expect(character).toEqual(globalRequestData[0]);
    expect(character.name).toEqual(globalRequestData[0].name);
    expect(character.name).not.toEqual('taha');
  });
});
