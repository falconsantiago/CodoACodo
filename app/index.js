// nav functions
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// nav functions

//activar esto cuando termine con la parte de APIS

// let vid = document.getElementById("myVideo");
// vid.playbackRate = 0.75;
let flag = false;

function openForm() {
	let form = document.getElementById("form");
	if (flag === false) {
		form.style.height = "500px";
		flag = true;
	} else if (flag === true) {
		form.style.height = "0";
		flag = false;
	}
}
//api functions

function apiCall(difficulty) {
	const apiKey = "yx3jbPTs9/VpvjlI+qvb5w==tkZsqvGlhJaACr6g";

	if (difficulty === "beginner") {
		$.ajax({
			method: "GET",
			url:
				"https://api.api-ninjas.com/v1/exercises?type=cardio" +
				"&difficulty=" +
				difficulty,
			headers: { "X-Api-Key": apiKey },
			contentType: "application/json",
			success: async function (result) {
				console.log(result);
				let beginnerRes = result[Math.floor(Math.random() * 9)]; //asdasd

				let markup = `
  				<div class="routine-card" id="routineCard">
  					<h1>Some excercises for this race! </h1>
  					<h3>${beginnerRes.name}</h3>
  					<span>${beginnerRes.muscle}</span>
 				<span>${beginnerRes.equipment}</span>
 				<p>${beginnerRes.instructions}</p>
 			</div>`;
				return (document.getElementById("routineCard").innerHTML = markup);
			},
			error: function ajaxError(jqXHR) {
				console.error("Error: ", jqXHR.responseText);
			},
		});
	} else if (difficulty === "intermediate") {
		$.ajax({
			method: "GET",
			url:
				"https://api.api-ninjas.com/v1/exercises?type=cardio" +
				"&difficulty=" +
				difficulty,
			headers: { "X-Api-Key": apiKey },
			contentType: "application/json",
			success: function (result) {
				console.log(result);
				let intermediateRes = result[Math.floor(Math.random() * 10)]; //asdasd

				let markup = `
  				<div class="routine-card" id="routineCard">
  					<h1>Some excercises for this race!</h1>
  					<h3>${intermediateRes.name}</h3>
  					<span>${intermediateRes.muscle}</span>
 				<span>${intermediateRes.equipment}</span>
 				<p>${intermediateRes.instructions}</p>
 			</div>`;
				return (document.getElementById("routineCard").innerHTML = markup);
			},
			error: function ajaxError(jqXHR) {
				console.error("Error: ", jqXHR.responseText);
			},
			error: function ajaxError(jqXHR) {
				console.error("Error: ", jqXHR.responseText);
			},
		});
	}
}

apiCall("beginner");
apiCall("intermediate");

function routine(e) {
	if (e === "SHORT") {
		console.log(beginnerRes);
	} else {
		console.log(intermediateRes);
	}
}
