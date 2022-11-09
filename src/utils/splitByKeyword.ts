const splitByKeyword = (keyword: string, text: string) => {
  const slicedTextArray = text.split(keyword);
  slicedTextArray.splice(1, 0, keyword);
  return slicedTextArray;
};

export default splitByKeyword;
