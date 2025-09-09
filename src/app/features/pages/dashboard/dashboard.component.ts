import { Component } from '@angular/core';
import { ProjectsDataComponent } from "./components/projects-data/projects-data.component";
import { WorkItemsComponent } from "./components/workItems/workItems.component";
import { GreatingsComponent } from "./components/greatings/greatings.component";
import { WorkGroupsComponent } from "./components/workGroups/workGroups.component";
import { TrainingCalenderComponent } from "./components/trainingCalender/trainingCalender.component";
import { GenericCardComponent } from "../../../shared/components/GenericCard/GenericCard.component";
import { CardConfig } from '../../../core/models/CardConfig';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProjectsDataComponent, WorkItemsComponent, GreatingsComponent, WorkGroupsComponent, TrainingCalenderComponent, GenericCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  workLogConfig: CardConfig = {
    title: 'Work Log',
    icon: 'fa fa-edit',
    background: 'bg-purple',
    stats: [
      { label: 'Total Hrs', value: '48:00' },
      { label: 'Work Log', value: '00:00' },
      { label: 'Rem. Hrs', value: '48:00' },
    ]
  };

  monthlyLeavesConfig: CardConfig = {
    title: 'Monthly Leaves',
    icon: 'fa fa-user-slash',
    background: 'bg-pink',
    stats: [
      { label: 'Leaves', value: '0' },
      { label: 'Full/Half', value: '0/0' },
      { label: 'Total', value: '0' },
    ]
  };

  quickLinksConfig: CardConfig = {
    title: 'Quick Links',
    icon: 'fa fa-link',
    background: 'bg-blue',
    links: [
      { text: 'Self Attendance ↗', url: '/attendance' }
    ]
  };

  newsConfig: CardConfig = {
    title: 'News & Events',
    icon: 'fa fa-calendar',
    background: 'bg-green',
    footerButton: {
      text: 'Holiday List',
      action: () => console.log('Holiday List clicked')
    }
  };

}
