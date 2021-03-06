import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedCompComponent } from './deleted-comp/deleted-comp.component';
import { DeleteUserPipe } from './delete-user.pipe';



@NgModule({
  declarations: [DeletedCompComponent, DeleteUserPipe],
  imports: [
    CommonModule
  ],
  exports: [DeletedCompComponent]
})
export class DeletedModule { }
