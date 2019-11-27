import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {

  rows = [];
  temp = [];
  page = {
    totalElements: 100,
    pageNumber: 0,
    size: 10
  }
  private query: QueryRef<any>;
  GET_ALL_USERS = gql`
    query getAllUsers($page: Int){
      getAllUsers(page: $page, limit: 20) {
        _id
        first_name
        middle_name
        last_name
        display_name
        email_address
        created_at
      }
    }
  `;

  constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('this.page', this.page);
    this.setPage({ offset: 1 })
    this.temp = [...this.rows];
  }

  onEdit(rowIndex) {
    console.log('onEdit', rowIndex);
  }

  onDelete(rowIndex) {
    console.log('onDelete', rowIndex);
  }

  onBlock(rowIndex) {
    this.rows[rowIndex].activated = false;
  }

  onUnblock(rowIndex) {
    this.rows[rowIndex].activated = true;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  setPage(pageInfo) {
    console.log('pageInfo', pageInfo);
    this.page.pageNumber = pageInfo.offset;

    this.query = this.apollo.watchQuery({
      query: this.GET_ALL_USERS,
      variables: {
        page: 2
      },
    });
    this.query.valueChanges.subscribe(result => {
      console.log('result', result);
      this.rows = result.data && result.data.getAllUsers;
    });

  }

}
