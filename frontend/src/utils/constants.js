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
        img:[`https://picsum.photos/id/${200+i}/700/400`,`https://picsum.photos/id/${230+i}/700/400`,`https://picsum.photos/id/${300+i}/700/400`],
        description: `at FlowParserMixin.parseExprSubscripts (C:\Users\lavku\Desktop\Github Clone\Portfolio-Website\frontend\node_modules\@babel\parser\lib\index.js:10568:23)
    at FlowParserMixin.parseUpdate (C:\Users\lavku\Desktop\Github Clone\Portfolio-Website\frontend\node_modules\@babel\parser\lib\index.js:10551:21)`,
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
        img:[`https://picsum.photos/id/${200+i}/700/400`,`https://picsum.photos/id/${230+i}/700/400`,`https://picsum.photos/id/${360+i}/700/400`,`https://picsum.photos/id/${330+i}/700/400`,`https://picsum.photos/id/${400+i}/700/400`],
        description: `at FlowParserMixin.parseExprSubscripts (C:\Users\lavku\Desktop\Github Clone\Portfolio-Website\frontend\node_modules\@babel\parser\lib\index.js:10568:23)
    at FlowParserMixin.parseUpdate (C:\Users\lavku\Desktop\Github Clone\Portfolio-Website\frontend\node_modules\@babel\parser\lib\index.js:10551:21)`,
      }
    });
  }
  
  return arr;
}
export const arr1 = generateArray1();