import axios from 'axios';

const getData = async (page: number) => {
	return await axios
		.get(`https://rickandmortyapi.com/api/character?page=${page}`)
		.then(({ data }) => ({
			info: {
				pages: data.info.pages,
			},
			results: data.results.map((result: any) => ({
				id: result.id,
				name: result.name,
				status: result.status,
				type: result.type,
				species: result.species,
				gender: result.gender,
				image: result.image,
			})),
		}));
};

export default getData;
