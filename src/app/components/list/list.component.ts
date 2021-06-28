import {Component, Input} from '@angular/core';
import {Cart} from './list.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() lists: Cart[];
}
