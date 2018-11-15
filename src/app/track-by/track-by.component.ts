import {Component, OnInit} from '@angular/core';
import {Skill} from '../model/Skill';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent implements OnInit {
  title = 'optimizingAngular';
  optionssNotTrackBy = [new Skill(1, 'JS app'), new Skill(2, 'CSS app'), new Skill(3, 'Angular app')];
  optionssHaveTrackBy = [new Skill(2, 'JS app'), new Skill(3, 'CSS app'), new Skill(1, 'Angular app')];

  constructor() {
  }

  ngOnInit() {
  }

  addNewNotTrackBy() {
    this.optionssNotTrackBy = [];
    const  optionssNew = [new Skill(1, 'JS app'), new Skill(2, 'CSS app'), new Skill(3, 'Angular app')];
    optionssNew.push(new Skill(4, 'Typescript'));

    this.optionssNotTrackBy = optionssNew;
  }
  addNewHaveTrackBy() {
    this.optionssHaveTrackBy = [];
    const  optionssNew = [new Skill(2, 'JS app'), new Skill(3, 'Angular app')];
    optionssNew.push(new Skill(4, 'Typescript'));
    this.optionssHaveTrackBy = optionssNew;
  }
  trackByFn(index, item) {
    return item.id; // or item.id
  }
}
