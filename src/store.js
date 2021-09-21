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

const _ = undefined;

const dateArray = [
	'13-12-2021',
	'14-12-2021',
	'15-12-2021',
	'16-12-2021',
	'17-12-2021',
	...getDateRange(3, _, '01', 2022),
	...getDateRange(10, _, '01', 2022),
	...getDateRange(17, _, '01', 2022),
	...getDateRange(24, _, '01', 2022),
	...getDateRange(31, 31, '01', 2022),

	...getDateRange(1, 1, '04', 2022),
	...getDateRange(4, _, '04', 2022),
	...getDateRange(11, _, '04', 2022),
	...getDateRange(18, _, '04', 2022),
	...getDateRange(25, 29, '04', 2022),

	...getDateRange(1, _, '05', 2022),
	...getDateRange(8, _, '05', 2022),
	...getDateRange(15, _, '05', 2022),
	...getDateRange(22, _, '05', 2022),
	...getDateRange(29, 31, '05', 2022),

	...getDateRange(1, 3, '06', 2022),
	...getDateRange(6, _, '06', 2022),
	...getDateRange(13, _, '06', 2022),
	...getDateRange(20, _, '06', 2022),
	...getDateRange(27, 30, '06', 2022)
];

export const availability = readable(dateArray, () => {
	return dateArray;
});
