// FUNCTION FOR SHOWING NAME=VALUE PAIRS AS XML
/*
 * This function shows all Name=Value pairs as XML inside alert window
 *
 * @param {Array} nameValuePairs - Array that holds all Name=Value pairs
 */
export function showXML(nameValuePairs) {

  // Output formatting
	let xmlOutput = "<pairs>\n";
	nameValuePairs.forEach((pair) => {
		xmlOutput += `  <pair>\n    <name>\n      ${pair.name}\n    </name>\n    <value>\n      ${pair.value}\n    </value>\n  </pair>\n`;
	});
	xmlOutput += "</pairs>";

  // XML showing
	alert(xmlOutput);
}
