// FUNCTION FOR RENDERING THE LIST IN UI
/*
 * This function renders all elements from nameValuePairs as unordered list
 *
 * @param {Array} nameValuePairs - Array that holds all Name=Value pairs
 * @param {HTMLElement} nameValueList - List element to display Name=Value pairs
 */
export function renderList(nameValuePairs, nameValueList) {

   // Delete all existing list items
	nameValueList.innerHTML = "";

  // Add new list item for each element inside nameValuePairs array
	nameValuePairs.forEach((pair, index) => {
		const li = document.createElement("li");
		li.innerHTML = `${pair.name} = ${pair.value}`;

		// Add a class to track selection state
		li.classList.add("list-item");

		// Toggle selection state on click
		li.addEventListener("click", function () {
			li.classList.toggle("selected"); // Toggle 'selected' class on click
		});

    // Appendeing a new list element to nameValueList
		nameValueList.appendChild(li);
	});
}
