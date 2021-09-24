
// tree consturctor code solution by Jubair Saifi
function makeTree(arr) { 
  let c = {};
  let p = {};
  for (let i = 0; i < arr.length; i++){
      let s = arr[i].split('');
      s.pop();
      s.shift();
      let comb = s.join('').replace(", ", ",").split(',');
      c[comb[0]] = (c[comb[0]] || 0) + 1;
      if (c[comb[0]] > 1) return false;
      p[comb[1]] = (p[comb[1]] || 0) + 1;
      if (p[comb[1]] > 2) return false;
  }
  return true; 
}
   
// keep this function call here 
var inputArray=[]
var str=window.prompt("enter string")
inputArray.push(str)
console.log(makeTree(inputArray));