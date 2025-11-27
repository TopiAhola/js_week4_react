const fetchData = async (url, options = {}) => {

  //console.log('fetching data from url: ', url, options);

  const response = await fetch(url, options);

  if (!response.ok) {
    // console.log('json', json);
    if (json.message) {
      throw new Error(json.message);
    }
    throw new Error(`Error ${response.status} occured`);
  }
  const json = await response.json();
  return json;
};

export {fetchData};
