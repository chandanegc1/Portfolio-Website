
export const transformTo2DArray = (sortedArray , path) => {
    const result = [];
    let currentElement =sortedArray[0];
    let currentRow = [];
   
    sortedArray.forEach(element => {
      if (element.data[path] !== currentElement.data[path]) {
        if (currentRow.length > 0) {
          result.push(currentRow);
        }
        currentElement = element;
        currentRow = [element];
      } else {
        currentRow.push(element);
      }
    });
  
    if (currentRow.length > 0) {
      result.push(currentRow);
    }
  
    return result;
  };
  