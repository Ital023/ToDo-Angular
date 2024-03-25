import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  inputValue = "";


  toDoList: any= [
    
  ]

  booleanLengthToDoList(){
    if(this.toDoList.length === 0){
      return false;
    }
    return true;
  }

  attInput(input: string){
    this.inputValue = input
    console.log(this.toDoList.length);
    
  }

  addList(itemName:string){
    const item = {
      name: itemName
    }
    
    if(item.name != ""){
      this.toDoList.push(item);
    }    

  }

  clearTask(valueEmitted: boolean,item:any){
    this.toDoList.pop(item);
  }
  
}
