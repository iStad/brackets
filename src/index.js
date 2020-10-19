module.exports = function check(str, bracketsConfig) {
  const formatedBracketsConfig = bracketsConfig.map(el => el.join(''));

  function deletePairs(bracketsString) {
    if (!bracketsString.length) return true;
  
    const formatedString = formatedBracketsConfig.reduce((acc, rule) => acc.replace(rule, ''), bracketsString);
  
    if (formatedString === bracketsString) return false;
  
    return deletePairs(formatedString);
  };

  return deletePairs(str);
};