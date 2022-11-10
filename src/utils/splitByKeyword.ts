const splitByKeyword = (query: string, text: string) => {
  if (text.toUpperCase().includes(query.trim().toUpperCase())) {
    return text.split(new RegExp(`(${query})`, 'gi'));
  }
};

export { splitByKeyword };
