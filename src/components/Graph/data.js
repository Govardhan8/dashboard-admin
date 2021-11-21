//Line chart data

export const Linedata = {
	labels: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	datasets: [
		{
			data: [
				0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
				40000,
			],
			fill: true,
			backgroundColor: '#d2f1f3',
			borderColor: '#4e73df',
			tension: 0.3,
		},
	],
}

//Pie chart data
export const Piedata = {
	labels: ['Direct', 'Social', 'Regerral'],
	datasets: [
		{
			data: [55, 30, 15],
			backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
			hoverOffset: 4,
			cutout: '75%',
			radius: '80%',
		},
	],
}
