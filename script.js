const small = document.querySelector('.small'),
	big = document.querySelector('.big'),
	preload = document.querySelector('.preload')

setInterval(() => {
	let difference = new Date('23 august 2068') - new Date()
	let mins = (difference / 1000 / 60).toFixed(0)
	let secs = ((difference / 1000) % 60).toFixed(0)
	let years = (difference / 1000 / 60 / 60 / 24 / 30.42 / 12).toFixed(0)
	let months = ((difference / 1000 / 60 / 60 / 24 / 30.42) % 12).toFixed(0)
	days = ((difference / 1000 / 60 / 60 / 24) % 12).toFixed(0)
	small.textContent = `
	  ${zero(mins.replace(/(?=(?:.{3})*$)/g, ' '))} : ${zero(secs)}
	`
	big.textContent = `${years}y ${zero(months)}m ${zero(days)}d`
	preload.style.display = 'none'
}, 1000)

function zero(x) {
	return x < 10 ? `0${x}` : x
}
