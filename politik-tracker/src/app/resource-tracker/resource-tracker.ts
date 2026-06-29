import { Component, input } from '@angular/core';
import { Resource } from '../resource';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-resource-tracker',
  imports: [FormsModule],
  templateUrl: './resource-tracker.html',
  styleUrl: './resource-tracker.scss',
})
export class ResourceTracker {
  selectedResource = input<Resource>();
  // count = 0;
  count = signal(0);
  maxLimit = 20000;

  //start: add mouse events
  private holdTimeout: any;
  private repeatInterval: any;

  get imagePath() {
    const resource = this.selectedResource();
    return resource ? './assets/resources/' + resource.name + 'Icon.png' : '';
  }

  //adding safety net for handler
  handleCounter(val: 'plus' | 'minus') {
    if (val == 'minus') {
      //number cannot be less than 0
      this.count.set(Math.max(this.count() - 1, 0));
    } else {
      //number cannot be greater than set max limit
      this.count.set(Math.min(this.count() + 1, this.maxLimit));
    }
  }

  // active button hold counter
  startCounter(val: 'plus' | 'minus') {
    this.handleCounter(val);

    // create a timeout
    this.holdTimeout = setTimeout(() => {
      this.repeatInterval = setInterval(() => {
        this.handleCounter(val);
      }, 75);
    }, 400);
  }

  //stop counter after hold
  stopCounter() {
    clearTimeout(this.holdTimeout);
    clearInterval(this.repeatInterval);
  }

  //keeps the user from typing over or under the limits set
  onInputChange() {
    // this.count = Math.min(Math.max(this.count, 0), this.maxLimit);
    this.count.set(Math.min(Math.max(this.count(), 0), this.maxLimit));
  }
}
