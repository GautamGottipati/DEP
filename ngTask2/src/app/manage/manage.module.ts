import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCompComponent } from './details-comp/details-comp.component';
import { ManageCompComponent } from './manage-comp/manage-comp.component';
import { Routes, RouterModule } from '@angular/router';
import { StrconcatePipe } from './strconcate.pipe';
import { CreateCompComponent } from './create-comp/create-comp.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditCompComponent } from './edit-comp/edit-comp.component';

const manageRoutes: Routes = [
  {
    path: '',
    component: ManageCompComponent,

    children: [
      { path:'create', component:CreateCompComponent},
      { path: ':id', component: DetailsCompComponent },
      { path: 'edit/:id', component: EditCompComponent}          
              ]
  }
  
];

@NgModule({
  declarations: [DetailsCompComponent, ManageCompComponent, StrconcatePipe, CreateCompComponent, EditCompComponent],
  imports: [
    FormsModule,ReactiveFormsModule,CommonModule,RouterModule.forChild(manageRoutes)
  ],
  exports: [ManageCompComponent, DetailsCompComponent , CreateCompComponent]
})
export class ManageModule { }
