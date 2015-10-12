# readableUI.js
Handy methods to help make your data user-friendly and back again

## Methods

### downStyle
`readable.downStyle(string)`

Converts a string into a "Down style" headline where only the first word in the string is capitalized. Accepts a string type.

### upStyle
`readable.upStyle(string)`

Converts a string into an "Up Style" headline where the first letter in each word of the string is capitalized. Accepts a string type.

### convertChars
`readable.convertChars(string)`

Converts variables from common ways of writing (camelCase, underscore or hyphen separation) into a human readable string. Accepts a string type.

### addCommas
`readable.addCommas(number)`

Adds a comma to a number after every third digit from right to left. Parameter can be a number or string type.

### removeCommas
`readable.removeCommas(string)`

Removes all commas from a string.

### toCurrency
`readable.toCurrency(number)`

Returns a formatted number rounded to two decimal places, e.g. 1,000.12. Parameter can be a number or string type.

### fromCurrency
`readable.fromCurrency(string, boolean)`

Takes a numeral formatted as a currency (see above example) and returns an integer. First parameter is the numeral to be formatted, as a string type. The second parameter is a boolean to determine if the integer should be rounded.

### toPercentage
`readable.toPercentage(number, number)`

Takes a decimal and returns a string as a percentage. For instance, 0.54 becomes 54%. First parameter is the decimal, as a number type or string type. The second parameter is a number type to determine the number of decimal places to return.

### fromPercentage
`readable.fromPercentage(number)`

Takes a percentage and converts it back to a decimal in a number format. Accepts a string or number format.

### index
`readable.index(number)`

Converts a JS 0 based index to a 1 based index. Accepts a number type and returns a number type.
