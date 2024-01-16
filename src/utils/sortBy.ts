import { Data, SortingValue } from './interfaces';

const sortBy = (data: Data | null, type: SortingValue) =>
	data && type !== 'none'
		? {
				...data,
				results: data.results.sort((a, b) => a[type].localeCompare(b[type])),
		  }
		: data;

export default sortBy;
