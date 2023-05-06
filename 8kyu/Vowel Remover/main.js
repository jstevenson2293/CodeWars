
//Code Wars challange. Remove Vowels from a string.

function shortcut (string) {
  
  let vowels = ['a', 'e', 'i', 'o', 'u']
  return string.split('').filter(item =>!vowels.includes(item)).join('')
  ;
}