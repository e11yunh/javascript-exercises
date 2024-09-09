const removeFromArray = function() {
    const args = [...arguments];
    const input_arr = args[0];
    const removed_items = args.slice(1);

    let output_arr = [...input_arr];

    for (item of removed_items) {
        while (output_arr.includes(item)) {
            // Locate the index of the item to be removed
            const item_index = output_arr.indexOf(item);
            output_arr.splice(item_index, 1);
        }
    }

    return output_arr;

}

console.log(removeFromArray([1, 2, 2, 3], 2))
// Do not edit below this line
module.exports = removeFromArray;
