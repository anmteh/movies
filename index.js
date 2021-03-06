const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: '57c78fd6',
			s: searchTerm
		}
	});
	if (response.data.Error) return [];
	return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async (e) => {
	const movies = await fetchData(e.target.value);
	for (movie of movies) {
		const div = document.createElement('div');

		div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}<h1>
    `;
		document.querySelector('#target').appendChild(div);
	}
};

input.addEventListener('input', debounce(onInput, 1000));
