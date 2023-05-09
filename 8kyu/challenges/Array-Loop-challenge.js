const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
	for(let i=0;i<synonyms.length; i++){
    console.log(`Have a ${synonyms[i]} day!`)
    let synonym = `Have a ${synonyms[i]} day!`
    greetings.push(synonym)
  }
	console.log(greetings)
// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE