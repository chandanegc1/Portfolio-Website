function generateArray() {
  const arr = [];
  const totalElements = 85;
  
  for (let i = 0; i < totalElements; i++) {
    arr.push({
      name: "XYZ",
      initialImg: `https://picsum.photos/200/${300 + i}?blur=2`,
      hoverImage: `https://picsum.photos/200/${300 + i}`,
      description: `Description for project${i + 1}`,
      link: ""
    });
  }
  
  return arr;
}

const arr = generateArray();
export default arr;