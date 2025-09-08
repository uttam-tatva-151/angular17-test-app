import { Component } from '@angular/core';
import { ProjectsDataComponent } from "./components/projects-data/projects-data.component";
import { WorkItemsComponent } from "./components/workItems/workItems.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProjectsDataComponent, WorkItemsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent { }
