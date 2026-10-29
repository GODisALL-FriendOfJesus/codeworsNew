function longestConsec(strarr, k) {
  const n = strarr.length;
  
  if (n === 0 || k > n || k <= 0) {
    return "";
  }
  
  let longest = "";
  
   
  for (let i = 0; i <= n - k; i++) {
    
    const currentStr = strarr.slice(i, i + k).join("");
    
     
    if (currentStr.length > longest.length) {
      longest = currentStr;
    }
  }
return longest;}
   console.log(longestConsec(['ddd','kk','l','lllllllll'],2))