import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-select',
  template: `
    <select (change)="change()">
      <option *ngFor="let option of options"
              [value]="option.id">
        {{option.name}}
      </option>
    </select>
  `,
  styleUrls: ['./my-select.component.scss']

})
export class MySelectComponent implements OnInit {
  @Input() options = [];

  change() {
  }

  constructor() {
  }

  ngOnInit() {
  }

}
