// MAIN JAVASCRIPT FILE
/*
 * This file contains the main logic for handling Name=Value pairs.
 *
 * Imported Functions:
 * - addNameValuePair: Adds a new pair to the list.
 * - sortByName: Sorts pairs by name.
 * - sortByValue: Sorts pairs by value.
 * - deleteItems: Deletes selected items from the list.
 * - showXML: Displays the Name=Value pairs in XML format.
 */
import {
	addNameValuePair,
	sortByName,
	sortByValue,
	deleteItems,
	showXML,
} from "./functions/index.js";

// Assign HTML elements to variables for easier access and readability
const inputField = document.getElementById("nameValueInput");
const addButton = document.getElementById("addButton");

const nameValueList = document.getElementById("nameValueList");
const sortByNameButton = document.getElementById("sortByNameButton");
const sortByValueButton = document.getElementById("sortByValueButton");
const deleteItemsButton = document.getElementById("deleteItemsButton");
const showXMLButton = document.getElementById("showXMLButton");

// Empty array for storing all Name=Value pairs
let nameValuePairs = [];

// Function for focusing on inputField by pressing "/"
document.addEventListener("keypress", function (event) {
	if (event.key === "/") {
		inputField.focus();
		event.preventDefault();
	}
});

// addButton functionality
addButton.addEventListener("click", function () {
	addNameValuePair(nameValuePairs, inputField, nameValueList);
});
inputField.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		addNameValuePair(nameValuePairs, inputField, nameValueList);
	}
});

// Add sortByNameButton functionality
sortByNameButton.addEventListener("click", function () {
	sortByName(nameValuePairs, nameValueList);
});
// Add sortByValueButton functionality
sortByValueButton.addEventListener("click", function () {
	sortByValue(nameValuePairs, nameValueList);
});
// Add deleteItemsButton functionality
deleteItemsButton.addEventListener("click", function () {
	deleteItems(nameValuePairs, nameValueList);
});
// Add showXMLButton functionality
showXMLButton.addEventListener("click", function () {
	showXML(nameValuePairs, nameValueList);
});
