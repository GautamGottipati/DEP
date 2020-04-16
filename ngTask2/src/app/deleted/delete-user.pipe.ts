import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteUser'
})
export class DeleteUserPipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.filter(item => {
        return item.isDeleted;
    });
}

}
