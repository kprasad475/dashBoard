import { Component, Input, Output, EventEmitter, OnInit, output } from '@angular/core';
import { WidgetData } from '../widget-model';
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent implements OnInit{
@Input() data:any;
@Output() removing = new EventEmitter();
@Output() editing = new EventEmitter<WidgetData>();



 
  editableData!: WidgetData;

  ngOnInit(): void {
    this.editableData = { ...this.data };
    console.log(this.editableData)

  }

  save(){
    this.removing.emit(this.editableData);
  }

  remove(){
    this.editing.emit();
  }
}
