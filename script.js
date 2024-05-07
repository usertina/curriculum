
var ctx = document.getElementById('idiomas-chart').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Castellano (idioma materno)', 'Euskera', 'Inglés'],
		datasets: [{
			label: ' Idiomas',
			data: [100, 50, 40], 
			backgroundColor: [
				'rgba(255, 99, 132, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(0, 255, 0, 0.5)',  
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(0, 0, 255, 1)',
				'rgba(40, 114, 51, 1)',
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});
