import { Component } from '@angular/core';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: [
    './left-panel.component.scss',
    './left-panel.responsive.component.scss',
  ],
})
export class LeftPanelComponent {
  name: string = 'Elder Bilheri';
}
