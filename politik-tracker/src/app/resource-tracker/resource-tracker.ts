import { Component, input, resource } from '@angular/core';

@Component({
  selector: 'app-resource-tracker',
  imports: [],
  templateUrl: './resource-tracker.html',
  styleUrl: './resource-tracker.scss',
})
export class ResourceTracker {
  selectedResource = input();

  get imagePath() {
    return '/assets/resources/' + this.selectedResource.name + 'Icon.png';
  }
}
