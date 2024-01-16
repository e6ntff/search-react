import { Character, Data } from './interfaces';

const search = (data: Data | null, query: string) =>
	data && query
		? {
				info: data && data.info,
				results:
					data &&
					data.results.filter((character: Character) =>
						character.name.toLowerCase().includes(query.toLowerCase())
					),
		  }
		: data;

// const search = (data: Data | null, query: string) => data

export default search;
