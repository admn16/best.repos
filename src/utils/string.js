export const capitalize = str => str.split(/(\s|-)/g).map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join('');
export const toTitle = str => capitalize(str).replace(/(\s|-)/g, ' ');
