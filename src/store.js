import { readable, writable } from 'svelte/store';

export const date = writable(new Date());

export const availability = readable([
	// new Date(2021, 12, 01),
	// new Date(2021, 12, 02),
	// new Date(2021, 12, 03),
	// new Date(2021, 12, 04),
	// new Date(2021, 12, 05)
	'01-09-2021',
	'24-09-2021',
	'11-12-2021',
	'12-12-2021',
	'13-12-2021'
]);
