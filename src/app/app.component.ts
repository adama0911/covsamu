import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'sam-covid19';

  public login:boolean = true;

  //unactives login component and actives next component
  vilidationOk(){
      this.login = true;
  }
}
