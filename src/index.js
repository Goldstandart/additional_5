module.exports = function check(str, bracketsConfig) {
  if(!str) return undefined;
  
	var array = [];
  var openedBrackets = { '{': '}', '[': ']', '(': ')' };
  var closedBrackets = { '}': true, ']': true, ')': true };
  var element;
  
  for (var i = 0; i < str.length; i ++) {
    element = str[i];
    if (openedBrackets[str[i]]) {
      array.push(str[i])
    }
    else if (closedBrackets[str[i]]) {
      if (openedBrackets[array.pop()] !== str[i]) return false
    }
  }
  return array.length === 0;
}
