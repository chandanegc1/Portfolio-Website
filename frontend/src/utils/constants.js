function generateArray() {
  const arr = [];
  const totalElements = 100;
  
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

export const arr = generateArray();

function generateArray1() {
  const arr = [];
  const totalElements = 40;
  
  for (let i = 0; i < 20; i++) {
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
export const arr1 = generateArray1();