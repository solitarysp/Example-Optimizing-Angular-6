import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Skill} from './model/Skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'optimizingAngular';
  optionss = [new Skill(1, 'JS app'), new Skill(2, 'CSS app'), new Skill(3, 'Angular app')];

  trigger() {
  }
  changeAPP() {
  }
}
