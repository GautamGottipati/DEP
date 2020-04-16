import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCompComponent } from './active-comp/active-comp.component';
import { ActivePipePipe } from './active-pipe.pipe';



@NgModule({
  declarations: [ActiveCompComponent, ActivePipePipe],
  imports: [
    CommonModule
  ],
  exports: [ActiveCompComponent]
})
export class ActiveModule { }
