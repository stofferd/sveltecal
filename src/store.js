import { readable, writable } from 'svelte/store';

export const date = writable(new Date());

const getDateRange = (start, end = start + 4, month, year) => {
	const count = end - start;
	const dates = [];
	for (let i = 0; i <= count; i++) {
		const thisDay = start + i;
		const padDay = String(thisDay).length === 1 ? '0' + thisDay : thisDay;
		dates.push(`${padDay}-${month}-${year}`);
	}
	return dates;
};

const dateArray = [
	'13-12-2021',
	'14-12-2021',
	'15-12-2021',
	'16-12-2021',
	'17-12-2021',
	...getDateRange(3, undefined, '01', 2022),
	...getDateRange(10, undefined, '01', 2022),
	...getDateRange(17, undefined, '01', 2022),
	...getDateRange(24, undefined, '01', 2022),
	...getDateRange(31, 31, '01', 2022),

	...getDateRange(1, 4, '02', 2022),
	...getDateRange(7, undefined, '02', 2022),
	...getDateRange(14, undefined, '02', 2022),
	...getDateRange(21, undefined, '02', 2022),
	...getDateRange(28, 28, '02', 2022)
];

export const availability = readable(dateArray, () => {
	return dateArray;
});
