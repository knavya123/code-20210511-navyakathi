function calculate_BMI(BMI_value) {
	var res = [];
	if(BMI_value <= 18.4) {
		res.push("Underweight");
		res.push("Malnutrition");
	}
	else if (BMI_value >= 18.5 && BMI_value <= 24.9) {
		res.push("Normal Weight");
		res.push("Low Risk");
	}
	else if (BMI_value >= 25 && BMI_value <= 29.9) {
		res.push("Overweight");
		res.push("Enhanced Risk");
	}
	else if (BMI_value >= 30 && BMI_value <= 34.9) {
		res.push("Moderately Obese");
		res.push("Medium Risk");
	}
	else if (BMI_value >= 35 && BMI_value <= 39.9) {
		res.push("Severely Obese");
		res.push("High Risk");
	}
	else {
		res.push("Very Severely Obese");
		res.push("Very High Risk");
	}

	return res;
}

function add_entries(data) {
	var Overweight_people = 0;
	//data = JSON.parse(data);

	data.forEach((obj) => {
		var HeightM = obj.HeightCm / 100;

		var BMI_value = (obj.WeightKg/(HeightM * HeightM)).toFixed(2);
		var res = calculate_BMI(BMI_value);
		obj.BMI_value = BMI_value;
		obj.BMI_Category = res[0];
		obj.Health_Risk = res[1];

		if(res[0] == "Overweight")
			Overweight_people += 1;
	});

	result = {
		'data': data,
		'num_overweight_people': Overweight_people
	};

	return result;
}

module.exports = {add_entries};
