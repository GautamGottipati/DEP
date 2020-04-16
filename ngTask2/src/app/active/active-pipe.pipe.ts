import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'activePipe'
})
export class ActivePipePipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.filter(item => {
        return !item.isDeleted;
    });
}

}
