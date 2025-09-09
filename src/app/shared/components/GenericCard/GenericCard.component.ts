import { CountUpAnimationDirective } from './../../directives/count-up-animation.directive';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardConfig } from '../../../core/models/CardConfig';

@Component({
  selector: 'test-generic-card',
  standalone: true,
  imports: [CommonModule,CountUpAnimationDirective],
  templateUrl: './GenericCard.component.html',
  styleUrl: './GenericCard.component.css'
})
export class GenericCardComponent {
  @Input() config!: CardConfig;
 }
