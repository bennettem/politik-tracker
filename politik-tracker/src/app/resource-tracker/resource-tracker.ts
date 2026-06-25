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
  holdTimeout: any = null;
  holdInterval: any = null;
  isHolding = false;
  readonly HOLD_DELAY = 400;
  readonly HOLD_INTERVAL = 100;

  get imagePath() {
    const resource = this.selectedResource();
    return resource ? './assets/resources/' + resource.name + 'Icon.png' : '';
  }

  //TODO: update counter in "real time" so a user can visually see how much it's jumping up by
  startCounter(val: string) {
    this.isHolding = false;
    this.handleCounter(val, 1);

    //delay
    this.holdTimeout = setTimeout(() => {
      this.isHolding = true;
      this.holdInterval = setInterval(() => {
        //change # based on how little/much you want to increament by
        this.handleCounter(val, 5);
      }, this.HOLD_INTERVAL);
    }, this.HOLD_DELAY);
  }

  stopCounter() {
    clearTimeout(this.holdTimeout);
    clearInterval(this.holdInterval);
    this.isHolding = false;
  }

  handleCounter(val: string, step: number = 1) {
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
