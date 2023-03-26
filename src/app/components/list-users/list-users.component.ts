import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: [
    './list-users.component.scss',
    './list-users.responsive.component.scss',
  ],
})
export class ListUsersComponent {
  @Input()
  name: string = '';
  @Input()
  profession: string = '';
}
