import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {
  socialAccounts = [];

  constructor() { }

  ngOnInit() {
    this.socialAccounts = [{
      id: 1,
      name: 'Egor',
      provider: 'facebook',
    }, {
      id: 2,
      name: 'Inokentiy',
      provider: 'Google'
    }];
  }

  unlink(socialAccount) {
    this.socialAccounts = this.socialAccounts.filter(i => i.id !== socialAccount.id);
  }

}
