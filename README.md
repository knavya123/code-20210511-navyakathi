# Technical Assessment Solution (Unnamed company)

### To reproduce:
##### Step-1: Clone the repository.
git clone https://github.com/knavya123/code-20210511-navyakathi.git
##### Step-2: Initialize the node package.  
	npm init 
##### Step-3: Run the node server.
	_node server.js_
	This should bring up the server on localhost port 3000.
##### Step-4: Test deployment using Postman or any other API testing platform.
> Create a new collection.
> Create a new request.
> Create a POST request with the URL as localhost:3000
> Add the follow key-value pair to the Headers
	Key: Content-Type
	Value: application/json
> Add the raw JSON file to the body.
	Body -> raw -> JSON
	[
		{ "Gender": "Male", "HeightCm": 175, "WeightKg": 75}, 
		{ "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, 
		{ "Gender": "Male", "HeightCm": 110, "WeightKg": 77 }, 
		{ "Gender": "Female", "HeightCm": 166, "WeightKg": 62}, 
		{ "Gender": "Female", "HeightCm": 150, "WeightKg": 70}, 
		{ "Gender": "Female", "HeightCm": 167, "WeightKg": 82}
	]
	This should return the expected result.

### File Contents
node_modules
	- Folder generated after running the _npm init_ command. 
	- Contains all node-js dependencies required for running the package.

test
	- Folder containing the test file written using the Mocha framework.
	- test.js
		- JavaScript file written using the Mocha framework with basic test functionalities.

.travis.yml
	- Yaml configuration file for Travis-CI

helper.js
	- JavaScript Helper file containing basic functionality to solve the problem.

server.js
	- JavaScript file for running the server (Node.js and Express)

package.json
	- Json configuration for npm (auto-generated using npm init)

### Liberties taken
1. Since the file wasn't very specific on the input-output sections, I went ahead with creating an API that takes a JSON object as a POST request and returns a modified JSON object with the result.
Check Sample Input and Sample Output section for more information.

2. Tried to keep things modular, simple, and clean. Prioritized code-length over space-complexity in a few areas assuming that the overall impact was negligible.  

3. Used Travis-CI for CI-CT-CD pipeline and Heroku for deployment. 
Considered a few other deployment options but felt went ahead with Heroku because I've previously used it once.
Picked Travis-CI as I've heard of it's ease-of-use.

###### Sample Input:
	[
		{ "Gender": "Male", "HeightCm": 175, "WeightKg": 75}, 
		{ "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, 
		{ "Gender": "Male", "HeightCm": 110, "WeightKg": 77 }, 
	]
###### Sample Output:
{
    "data": [
        {
            "Gender": "Male",
            "HeightCm": 175,
            "WeightKg": 75,
            "BMI_value": "24.49",
            "BMI_Category": "Normal Weight",
            "Health_Risk": "Low Risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 161,
            "WeightKg": 85,
            "BMI_value": "32.79",
            "BMI_Category": "Moderately Obese",
            "Health_Risk": "Medium Risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 110,
            "WeightKg": 77,
            "BMI_value": "63.64",
            "BMI_Category": "Very Severely Obese",
            "Health_Risk": "Very High Risk"
        }
    ],
    "num_overweight_people": 0
}