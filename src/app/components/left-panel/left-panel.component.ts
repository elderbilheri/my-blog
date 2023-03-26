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

  imgUser = '../assets/images/user.png';

  //icones
  feedIcon = '../assets/images/icons/feed.svg';
  followIcon = '../assets/images/icons/follow.svg';
  searchIcon = '../assets/images/icons/search.svg';
  statisticsIcon = '../assets/images/icons/statistics.svg';
  helpIcon = '../assets/images/icons/help.svg';
  bellpIcon = '../assets/images/icons/bell.svg';
}
