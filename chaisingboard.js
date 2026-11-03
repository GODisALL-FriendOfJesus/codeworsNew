function whiteBlackAreas(cols, rows) {
  let rseven=0;let rsodd=0;
  let cseven=0;let csodd=0;
  
  for(let i=0;i< rows.length;i++){
    if(i%2 === 0){
      rseven +=rows[i];
    }else{
      rsodd +=rows[i];
    }
  }
  
  for(let j=0; j < cols.length ; j++){
    if(j %2 ===0){
      cseven +=cols[j];
    }else{
      csodd +=cols[j];
    }
  }
  
  const white=(rseven * cseven) +(rsodd *csodd);
  const black=(rsodd *cseven) +(rseven * csodd);
  
  
  return [white,black]
}
  const cs = [3, 1, 2, 7, 1];
const rs = [1, 8, 4, 5, 2];

console.log(whiteBlackAreas(cs, rs));