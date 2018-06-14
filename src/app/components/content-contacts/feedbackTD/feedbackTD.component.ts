import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-feedback-td',
  templateUrl: './feedbackTD.component.html',
  styleUrls: ['./feedbackTD.component.scss']
})
export class FeedbackTDComponent implements OnInit {
  constructor() {
  }

  public name = 'Vasilij';
  public phone = '29612349';
  public email = 'vasilij.zhkov@gmail.com';
  public message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis debitis et id, nulla qui temporibus! Ad assumenda cupiditate doloremque eveniet expedita facilis inventore molestiae quae ratione? Quia, suscipit. ';

  private homePhone: string;

  ngOnInit() {
  }
}
