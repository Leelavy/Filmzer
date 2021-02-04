import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './models/users';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(user: Users[], searchUser: string): Users[] {

    if (!user || !searchUser)
      return user;

    return user.filter(users =>
      users.username.type.toLocaleLowerCase().indexOf(searchUser.toLocaleLowerCase()) !== -1);

  }
}


