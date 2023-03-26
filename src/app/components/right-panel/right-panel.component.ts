import { Component } from '@angular/core';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: [
    './right-panel.component.scss',
    './right-panel.responsive.component.scss',
  ],
})
export class RightPanelComponent {
  imgItem = '../assets/images/news.png';
  imgLastNews = '../assets/images/internet.png';
  imgRobot = '../assets/images/robot.jpg';
  imgTurbine = '../assets/images/turbine.jpg';
}
