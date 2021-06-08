/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // Code goes here
    // USING A FOR LOOP
    let result = [];
    for(let i=text.length; i>=0; i--){
        result.push(text[i])
    }

    return result.join("");
}



module.exports = reverseString;