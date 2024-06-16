function generateArray() {
  const arr = [];
  const totalElements = 100;
  
  for (let i = 0; i < totalElements; i++) {
    arr.push({
      name: "XYZ",
      initialImg: `https://picsum.photos/200/${300 + i}?blur=2`,
      hoverImage: `https://picsum.photos/200/${300 + i}`,
      data: {
        name:"HOUSE-M",
        category:"DESIGN",
        year:2000+i,
        status:"COMPLETE",
        location:"INDIA",
        img:["url","url","url"],
        description: `Description for project${i + 1}`,
      }
    });
  }
  return arr;
}
export const arr = generateArray();


function generateArray1() {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push({
      name: "XYZ",
      initialImg: `https://picsum.photos/200/${300 + i}?blur=2`,
      hoverImage: `https://picsum.photos/200/${300 + i}`,
      data: {
        name:"HOUSE-M",
        category:"DESIGN",
        year:2000+i,
        status:"COMPLETE",
        location:"INDIA",
        img:["url","url","url"],
        description: `Description for project${i + 1}`,
      }
    });
  }
  
  return arr;
}
export const arr1 = generateArray1();