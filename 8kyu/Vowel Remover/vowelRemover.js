
/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.*/
//Code Wars challange. Remove Vowels from a string.

function shortcut (string) {
  
  let vowels = ['a', 'e', 'i', 'o', 'u']
  return string.split('').filter(item =>!vowels.includes(item)).join('')
  ;
}