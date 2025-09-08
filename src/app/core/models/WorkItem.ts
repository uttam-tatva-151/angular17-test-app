export interface WorkItem {
  id: string;
  workItem: string;
  project: string;
  actions: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
  startDate: Date;
  endDate: Date;
 }
