import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strconcate'
})
export class StrconcatePipe implements PipeTransform {

  transform(user : any): string {
    return user.firstName + ' ' + user.lastName;
  }

}
