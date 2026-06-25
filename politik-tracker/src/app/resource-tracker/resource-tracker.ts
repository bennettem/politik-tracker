import { Component, input } from '@angular/core';
import { Resource } from '../resource';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resource-tracker',
  imports: [FormsModule],
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

  handleCounter(val: string) {
    if (val == 'minus') {
      //number cannot be less than 0
      this.count = Math.max(this.count - 1, 0);
    } else {
      if (val == 'plus') {
        //number cannot be greater than set max limit
        this.count = Math.min(this.count + 1, this.maxLimit);
      }
    }
  }

  //keeps the user from typing over or under the limits set
  onInputChange() {
    this.count = Math.min(Math.max(this.count, 0), this.maxLimit);
  }
}
