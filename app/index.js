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
// let flag = false;

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
			success: function (result) {
				console.log(result);
				return (beginnerRes = result[2]);
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
				return (intermediateRes = result[2]);
			},
			error: function ajaxError(jqXHR) {
				console.error("Error: ", jqXHR.responseText);
			},
		});
	}
}

// let beginnerRes = apiCall("beginner")[2];
apiCall("beginner");
apiCall("intermediate");
// apiCall("expert");

let markup = `
  				<div class="routine-card" id="routineCard">
  					<h1>Some excercises for this race!</h1>
  					<h3>${beginnerRes.name}</h3>
  					<span>${beginnerRes.muscle}</span>
 				<span>${beginnerRes.equipment}</span>
 				<p>${beginnerRes.instructions}</p>
 			</div>`;

function routine(e) {
	if (e === "SHORT") {
		console.log(beginnerRes);
	} else if (e === "MID") {
		console.log(intermediateRes);
	} else {
		console.log("expert");
	}
}
//el expert no tiene data

document.body.innerHTML = "";
