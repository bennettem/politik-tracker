import { Component, input } from '@angular/core';
import { Resource } from '../resource';

@Component({
  selector: 'app-resource-tracker',
  imports: [],
  templateUrl: './resource-tracker.html',
  styleUrl: './resource-tracker.scss',
})
export class ResourceTracker {
  selectedResource = input<Resource>();
  count = 0;
  maxLimit = 20000;

  get imagePath() {
    const resource = this.selectedResource();
    return resource ? './assets/resources/' + resource.name + 'Icon.png' : '';
  }

  handleIncrement() {
    this.count = Math.min(this.count + 1, this.maxLimit);
  }

  handleDecrement() {
    this.count = this.count - 1;
  }
}
