import { Component } from '@angular/core';
import { WidgetData } from '../widget-model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 
  widgets:WidgetData[]=[{
    title:'widget 1',content:'content for widget 1'},
    {title:'widget 2',content:'content for widget 2'},
    {title:'widget 3',content:'content for widget 3'}

  ];

  widgetTitle='';
  widgetContent ='';

  addWidget(){
   this.widgetTitle='';
   this.widgetContent ='';
  }

  createWidget(){
    if(this.widgetTitle && this.widgetContent){
      this.widgets.push({title:this.widgetTitle,content:this.widgetContent})
      this.widgetTitle='';
      this.widgetContent= '';
    }
  }

  removeWidget(index:number){
    this.widgets.splice(index,1);


  }
  editWidget(data:WidgetData,index:number){
    this.widgets[index]=data;
  }


}
