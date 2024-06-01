import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';


const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'reports', component: MainContentComponent }, // You can replace with actual components
  { path: 'settings', component: MainContentComponent } // You can replace with actual components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
