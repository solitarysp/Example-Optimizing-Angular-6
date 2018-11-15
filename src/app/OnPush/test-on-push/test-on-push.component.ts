import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Skill} from '../../model/Skill';

@Component({
  selector: 'app-test-on-push',
  templateUrl: './test-on-push.component.html',
  styleUrls: ['./test-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush


})
export class TestOnPushComponent implements OnInit {
  skills = [new Skill(1, 'JS'), new Skill(2, 'CSS'), new Skill(3, 'Angular')];

  constructor() { }

  ngOnInit() {
  }

  trigger() {
  }
}

