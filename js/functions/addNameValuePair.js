// FUNCTION FOR ADDING NAME=VALUE PAIRS TO THE LIST
/*
 * This function adds new Name=Value pair to the nameValuePairs array and updating the list
 *
 * @param {Array} nameValuePairs - Array that holds all Name=Value pairs
 * @param {HTMLElement} inputField - Input field for adding Name=Value pairs
 * @param {HTMLElement} nameValueList - List element to display Name=Value pairs
 */
export function addNameValuePair(nameValuePairs, inputField, nameValueList) {
	const inputValue = inputField.value.trim();

	// Check if input has "=" and if we have both Name and Value
	if (inputValue.includes("=") && inputValue.split("=").length === 2) {

		// Split the input by "=" to separate Name and Value. Trimming both to ignore spaces
		let [name, value] = inputValue.split("=");
		name = name.trim();
		value = value.trim();

		// Regular expression for checking alphanumeric format
		const alphanumericRegex = /^[a-z0-9]+$/i;

		// Check if input is alphanumeric
		if (alphanumericRegex.test(name) && alphanumericRegex.test(value)) {
			nameValuePairs.push({ name, value });

			// Create a new list item
			const li = document.createElement("li");
			li.innerHTML = `${name} = ${value}`;

			// Add the same 'list-item' class to enable selection on click
			li.classList.add("list-item");

			// Toggle selection state on click
			li.addEventListener("click", function () {
				li.classList.toggle("selected"); // Toggle 'selected' class on click
			});

			// Append the new list item to the list
			nameValueList.appendChild(li);

			// Clear the input field after adding the item
			inputField.value = "";
		} else {

			// Invalid format alert
			alert("Name and value can only be added in alphanumeric format with no spaces");
		}
	} else {
    // Invalid format alert
		alert("Please enter the input in Name=Value format");
	}
}
