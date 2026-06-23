import { Component, input } from '@angular/core';
import { Resource } from '../resource';

@Component({
  selector: 'app-resource-tracker',
  imports: [],
  templateUrl: './resource-tracker.html',
  styleUrl: './resource-tracker.scss',
})
export class ResourceTracker {
  // You can explicitly declare a type for the input by specifying a generic parameter to the function. If an input without a default value is not set, its value is undefined:
  //Components>accepting data input docs
  selectedResource = input<Resource>();

  get imagePath() {
    // image path is getter optional "chaining"
    const resource = this.selectedResource();
    return resource ? './assets/resources/' + resource.name + 'Icon.png' : '';
  }
}
