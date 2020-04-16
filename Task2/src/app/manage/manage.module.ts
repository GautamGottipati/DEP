import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCompComponent } from './details-comp/details-comp.component';
import { ManageCompComponent } from './manage-comp/manage-comp.component';
import { Routes, RouterModule } from '@angular/router';

const manageRoutes: Routes = [
  {
    path: '',
    component: ManageCompComponent,

    children: [{ path: ':id', component: DetailsCompComponent }]
  }
];

@NgModule({
  declarations: [DetailsCompComponent, ManageCompComponent],
  imports: [
    CommonModule,RouterModule.forChild(manageRoutes)
  ],
  exports: [ManageCompComponent, DetailsCompComponent]
})
export class ManageModule { }
