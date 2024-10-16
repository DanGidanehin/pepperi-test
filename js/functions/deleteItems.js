// FUNCTIONS FOR DELETING NAME=VALUE PAIRS
/*
 * This file contains function for deleting selected list elements
 *
 * Imported Functions:
 * - renderItem: displaying Name=Value pairs inside list element
 */
import { renderList } from "./renderList.js";
// FUNCTION FOR DELETING NAME=VALUE PAIRS
/*
 * This function deletes all selected nameValuePairs pairs by index and displays new array as unordered list
 *
 * @param {Array} nameValuePairs - Array that holds all Name=Value pairs
 * @param {HTMLElement} nameValueList - List element to display Name=Value pairs
 */
export function deleteItems(nameValuePairs, nameValueList) {

	// Assign list items to a variable for readability and simplicity
	const listItems = document.querySelectorAll(".list-item");

	// Check if there are any selected items
	const selectedItems = Array.from(listItems).filter((item) =>
		item.classList.contains("selected")
	);

  // If no items are selected, show an alert
	if (selectedItems.length === 0) {
		alert("No items selected for deletion.");
		return;
	}

	// Check if the user has opted out of seeing the confirmation dialog
	const showConfirmation = localStorage.getItem("showDeleteConfirmation");

	if (showConfirmation !== "false") {

		// Cinfirmation dialog
		const confirmDelete = confirm(
			"Are you sure you want to delete these elements? Any selected elements will be removed."
		);

		// If the user cancels, exit the function
		if (!confirmDelete) {
			return;
		}

		// Optionally store user preference to skip confirmation
		const dontShowAgain = confirm("Do you want to skip this confirmation in the future?");
		if (dontShowAgain) {
			localStorage.setItem("showDeleteConfirmation", "false");
		}
	}

	// Filter out the selected items and update the nameValuePairs array
	const updatedPairs = nameValuePairs.filter((_, index) => {
		return !listItems[index].classList.contains("selected");
	});

	// Update the original nameValuePairs array
	nameValuePairs.length = 0;
	nameValuePairs.push(...updatedPairs);

	// Render the updated list
	renderList(nameValuePairs, nameValueList);
}
