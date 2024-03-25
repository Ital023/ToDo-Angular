import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({required:true}) itemName: string = "";

  @Output("clearClick") buttonClearClikedEmitter = new EventEmitter<true>();

  onClearButtonClick(){
    console.log("funcionando emmiter");
    this.buttonClearClikedEmitter.emit(true);
  }
}
