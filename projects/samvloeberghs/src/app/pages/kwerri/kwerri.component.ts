import { Component } from '@angular/core';

@Component({
  selector: 'sv-kwerri',
  templateUrl: './kwerri.component.html',
  styleUrls: ['./kwerri.component.scss'],
})
export class KwerriComponent {

  generalConditionsShown = false;

  toggleGeneralConditionsShown($event) {
    $event.preventDefault();
    this.generalConditionsShown = !this.generalConditionsShown;
  }

}
