import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'test-work-items',
  standalone: true,
  imports: [],
  template: `<p>workItems works!</p>`,
  styleUrl: './workItems.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkItemsComponent { }
