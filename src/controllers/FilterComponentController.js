import React, {useState} from 'react';

/*
 ** Local Imports
 */
import FilterComponentView from '../views/FilterComponentView';

export default ({dataSource, setFilteredDataSource}) => {
  const [search, setSearch] = useState('');
  const [checkedList, setcheckedList] = useState([1, 2, 3, 4, 5]);

  let checkboxs = [1, 2, 3, 4, 5, 'All'];

  const searchFilterFunction = (text, checkedbox) => {
    let _checkedList = [];
    if (checkedbox) {
      if (checkedbox === 'All') {
        _checkedList = [...checkboxs];
      } else if (!checkedList.includes(checkedbox)) {
        _checkedList = [...checkedList, checkedbox];
      } else {
        _checkedList = checkedList.filter(item => item !== checkedbox);
      }
      setcheckedList(_checkedList);
    }
    // console.log(text + ' ' + search + ' ' + checkedbox);
    if (text || (checkedbox && search)) {
      let _text = text || search;
      let __checkedList = checkedbox ? _checkedList : checkedList;
      // console.log(_text + ' ' + __checkedList);
      const newData = dataSource.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = _text.toUpperCase();
        return (
          itemData.indexOf(textData) > -1 &&
          item.appearance.some(v => __checkedList.includes(v))
        );
      });
      setFilteredDataSource(newData);
      setSearch(_text);
    } else if (checkedbox) {
      const newData = dataSource.filter(item =>
        item.appearance.some(v => _checkedList.includes(v)),
      );
      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(dataSource);
      setSearch(text);
    }
  };

  // console.log('Rendiring FilterComponentController');
  return (
    <FilterComponentView
      searchFilterFunction={searchFilterFunction}
      setSearch={setSearch}
      checkboxs={checkboxs}
      checkedList={checkedList}
    />
  );
};
