"use strict";

const $ = function (selector) {
	return document.querySelector(selector);
};

var totalInvest;
var annualInterest;
var years;

const processEntries = () => {
	totalInvest = parseFloat($("#investment").value);
	annualInterest = parseFloat($("#annual_rate").value);
	years = parseFloat($("#years").value);

	if (isNaN(totalInvest) || totalInvest < 0 || totalInvest >= 100000) {
		$("#investment_error").innerHTML = "Must Be > 0 AND < 100000";
		$("#investment").value = "";
		$("#investment").focus();
	}
	else if (isNaN(annualInterest) || annualInterest < 0 || annualInterest > 12) {
		$("#rate_error").innerHTML = "Must Be > 0 AND <= 12";
		$("#annual_rate").value = "";
		$("#annual_rate").focus();
	}
	else if (isNaN(years) || years < 0 || years > 50) {
		$("#years_error").innerHTML = "Must Be > 0 AND <= 50";
		$("#years").value = "";
		$("#years").focus();
	}
	else {
		calculation();
	}
}

const calculation = () => {
	let futureValue = 0;

	futureValue = parseFloat((totalInvest * (Math.pow((1 + (annualInterest / 100)), years))).toFixed(2));

	$("#future_value").value = (futureValue);

	$("#investment_error").innerHTML = "";
	$("#rate_error").innerHTML = ""
	$("#years_error").innerHTML = "";
}

const clearEntries = () => {
	$("#investment").focus();
	$("#annual_rate").value = "";
	$("#years").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntries);
	$("#calculate").addEventListener("click", processEntries);
});
