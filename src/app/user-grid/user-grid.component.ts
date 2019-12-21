import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ClrDatagrid } from "@clr/angular";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit, AfterViewInit {
  socialAccounts = [];
  @ViewChild(ClrDatagrid) datagrid;

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

  ngAfterViewInit() {
    // WORKAROUND
    // this.datagrid.rows.changes.pipe(tap(_ => {
    //   this.datagrid.resize();
    // })).subscribe();
  }

  unlink(socialAccount) {
    this.socialAccounts = this.socialAccounts.filter(i => i.id !== socialAccount.id);
  }

}
