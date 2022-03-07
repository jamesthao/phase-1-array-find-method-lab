function superbowlWin(array) {
    if (array.result === "W"){
        return array.year
    } else{
        return undefined
    }
}

array.find(superbowlWin).year



function superbowlWin(arr) {
    arr.find(function search(element) {
      if(element.result === "W") {
        console.log(element.year) 
        console.log(typeof element.year) 
        return element.year
      }
    });
  }; 