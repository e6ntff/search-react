export interface Data {
	info: Info;
	results: Character[];
}

export interface Info {
	pages: number;
}

export interface Character {
	id: number;
	name: string;
	status: string;
	type: string;
	species: string;
	gender: string;
	image: string;
}

export type SortingValue =
	| 'none'
	| 'name'
	| 'status'
	| 'type'
	| 'species'
	| 'gender';
