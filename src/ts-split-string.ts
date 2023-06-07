export function splitStringToArray(word: string): string[]{
  let result = []
  let splited = word.split('');
 
  for (let i = 0; i <= splited.length; i+=2) {
    if(i < splited.length/2+2){
      if(splited[i] !== splited[splited.length-1]){
        result.push(`${splited[i]}${splited[i+1]}`)
      }else{ 
        result.push(`${splited[i]}_`)
      }
    }
    
  }

  return splited.length >0 ? result : [];
}