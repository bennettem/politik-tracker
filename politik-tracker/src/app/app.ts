import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResourceTracker } from './resource-tracker/resource-tracker';
import { HeaderComponent } from './header-component/header-component';
import { Resource } from './resource';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResourceTracker, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('politik-tracker');

  protected readonly resources: Resource[] = [
    { name: 'Carbon', index: 0 },
    { name: 'Food', index: 1 },
    { name: 'Capital', index: 2 },
  ];

  getResources() {
    return this.resources;
  }
}
