import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({required:true}) itemName: string = "";

  @Input({required:true}) itemIndex: number | undefined = undefined;


  @Output("clearClick") buttonClearClikedEmitter = new EventEmitter<number>();

  onClearButtonClick(){
    this.buttonClearClikedEmitter.emit(this.itemIndex);    
  }
}
