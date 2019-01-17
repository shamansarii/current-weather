function getWeather() {
	document.querySelector(".weather-info").style.display = "block";
	const cityName = document.querySelector("input").value;

	$.ajax({
		url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d0a4d68a835b937430166246c26b61de&units=metric`,
		success: function (data) {
			console.log(data);
			document.querySelector(".city-name").innerHTML = data.name;
			document.querySelector(".temp > span").innerHTML = data.main.temp;
			document.querySelector(".icons").innerHTML = `<div>${data.weather[0].description}'</div>`;
			document.querySelector(".description").innerHTML = data.weather[0].main;
			document.querySelector(".min").innerHTML = data.main.temp_min;
			document.querySelector(".max").innerHTML = data.main.temp_max;

			console.log(data.weather[0].description)
			console.log(data.weather[0].main)
			console.log(data.weather[0].id)
			console.log(data.dt)

			let body = document.querySelector("body");
			let date = new Date();
			let dayTime = new Date(data.sys.sunrise * 1000);
			let nightTime = new Date(data.sys.sunset * 1000);
			console.log(date)

			if (nightTime > date && dayTime < date ) {
				$("body").css("background-color", "orange");
				$("body").css("color", "black");

			} else{
				$("body").css("background-color", "black");
				$("body").css("color", "white");
			}

			let weatherIcon = data.weather[0].description
			if (weatherIcon == "haze") {
				document.querySelector(".description").innerHTML = `<i class="wi wi-day-haze"></i>`;

			} else if(weatherIcon == "smoke"){
				document.querySelector(".description").innerHTML = `<i class="wi wi-smoke"></i>`;

			} else if(weatherIcon == "few clouds"){
				document.querySelector(".description").innerHTML = `<i class="wi wi-cloudy-gusts"></i>`;

			} else if(weatherIcon == "broken clouds"){
				document.querySelector(".description").innerHTML = `<i class="wi wi-day-cloudy"></i>`;

			} else if(weatherIcon == "clear sky"){
				document.querySelector(".description").innerHTML = `<i class="wi wi-day-cloudy-high"></i>`;

			} else {
				document.querySelector(".description").innerHTML = `<i class="wi wi-day-sunny"></i>`;
			}

		},
		error: function (err) {
			alert(data.error);
		}
	});
}