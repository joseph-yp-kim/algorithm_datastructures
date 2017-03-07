// the function takes in a string written in camel case and returns all lowercase in kebab format
// ex: kebabCase('camelCaseStr') => 'camel-case-str'

function kebabCase(str) {
  if (typeof str !== 'string') return undefined;
  if (!str.length) return '';
  let kebab = '';
  for (let i = 0; i < str.length; i += 1) {
    if (/[a-z]/.test(str[i])) {
      kebab += str[i];
    } else {
      if (/[A-Z]/.test(str[i])) {
        kebab += '-';
        kebab += str[i].toLowerCase();
      }
    }
  }
  if (kebab[0] === '-') return kebab.slice(1);
  return kebab;
}

module.exports = kebabCase;