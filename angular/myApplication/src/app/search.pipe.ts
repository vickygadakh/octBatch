import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tableData:any, inputboxValue:any): any {
   console.log('tbdata',tableData)
   console.log('inputboxValue',inputboxValue);
   
   
    // return null;
    let inpVal = inputboxValue.toLowerCase();

    console.log('inpVal',inpVal);
    return tableData.filter((item:any)=>{
    return JSON.stringify(item).toLowerCase().includes(inpVal)
  })
    
  }

}
