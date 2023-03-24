const small = document.querySelector(".small"),
	big = document.querySelector(".big"),
	preload = document.querySelector(".preload")

setInterval(() => {
	let difference = new Date("23 august 2068") - new Date()
	let mins = Math.floor(difference / 1000 / 60)

	let secs = Math.floor((difference / 1000) % 60)
	let years = Math.floor(difference / 1000 / 60 / 60 / 24 / 30.42 / 12)
	let months = Math.floor((difference / 1000 / 60 / 60 / 24 / 30.42) % 12)
	let days = Math.floor((difference / 1000 / 60 / 60 / 24) % 12)
	small.textContent = `
	  ${zero(mins.toString().replace(/(?=(?:.{3})*$)/g, " "))} : ${zero(secs)}
	`

	big.textContent = `${years}y ${months}m ${days}d`
	preload.style.display = "none"
}, 1000)

function zero(x) {
	return x < 10 ? `0${x}` : x
}
