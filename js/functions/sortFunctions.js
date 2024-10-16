// FUNCTIONS FOR SORTING NAME=VALUE PAIRS
/*
 * This file contains functions for sorting array and displaying it's changes
 *
 * Imported Functions:
 * - renderItem: displaying Name=Value pairs inside list element
 */
import { renderList } from "./renderList.js";

// FUNCTION FOR SORTING NAME=VALUE PAIRS BY NAME
/*
 * This function sorts nameValuePairs array by name and displays sorted array as unordered list
 *
 * @param {Array} nameValuePairs - Array that holds all Name=Value pairs
 * @param {HTMLElement} nameValueList - List element to display Name=Value pairs
 */
export function sortByName(nameValuePairs, nameValueList) {

  // Check if array is empty
	if (nameValuePairs.length === 0) {
		alert("The list is empty.");
		return;
	}

	// Create a copy of the array for comparison after sorting
	const originalArray = [...nameValuePairs];

	// Sort the nameValuePairs array elements by name
	nameValuePairs.sort((a, b) => a.name.localeCompare(b.name));

	// Check if the sorted array is the same as the original array
	const isSorted = originalArray.every((item, index) => {
		return item.name === nameValuePairs[index].name;
	});

	// If the array is already sorted, do nothing
	if (isSorted) {
		console.log("The list is already sorted. No need to re-render.");
		return;
	}

  // If array is not sorted, render the new list
	renderList(nameValuePairs, nameValueList);
}

// FUNCTION FOR SORTING NAME=VALUE PAIRS BY VALUE
/*
 * This function sorts nameValuePairs array by value and displays sorted array as unordered list
 *
 * @param {Array} nameValuePairs - Array that holds all name=value pairs
 * @param {HTMLElement} nameValueList - List element to display name=value pairs
 */
export function sortByValue(nameValuePairs, nameValueList) {
	if (nameValuePairs.length === 0) {

		// Check if array is empty
		alert("The list is empty.");
		return;
	}

	// Create a copy of the array for comparison after sorting
	const originalArray = [...nameValuePairs];

	// Sort the nameValuePairs array elements by name
	nameValuePairs.sort((a, b) => a.value.localeCompare(b.value));

	// Check if the sorted array is the same as the original array
	const isSorted = originalArray.every((item, index) => {
		return item.name === nameValuePairs[index].name;
	});

	// If the array is already sorted, do nothing
	if (isSorted) {
		console.log("The list is already sorted. No need to re-render.");
		return;
	}

  // If array is not sorted, render the new list
	renderList(nameValuePairs, nameValueList);
}