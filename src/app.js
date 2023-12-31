// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
let NEG_INF = -1000000
// Progression 2: add 3 variables: title, currIndex, check
// Progression 3: create a function "searchForElement" 
// Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                    // to return the desired output.
const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;
const createPop = (arrayOfNumbers,itemToSearch) => {
  let currIndex=NEG_INF
  let check=false

  const searchForElement = () =>{
    arrayOfNumbers.forEach((element, index) => {
      if (element === itemToSearch) {
        currIndex = index
        check = true
      }
    })
    if(check){
      return function(){
        return `The item is present and is at index ${currIndex}`
    }}
    else{
      return function(){
        return `The item is not present and is at index ${NEG_INF}`
      }
    }
  }
  return searchForElement()
}
createPop(arrayOfNumbers,itemToSearch)
