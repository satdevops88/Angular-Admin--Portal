import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';

const GET_ALL_USERS = gql`
  {
    getAllUsers(page: 10, limit: 10) {
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

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {

  // rows = [
  // { name: 'Zamblek Author', username: 'zamblek', joined: '4 April 2019', activated: true, actions: '' },
  // { name: 'Demo Admin', username: 'demo.admin', joined: '4 April 2019', activated: true, actions: '' },
  // { name: 'Lucas Lucas', username: 'lucaslucas', joined: '12 September 2019', activated: false, actions: '' },
  // { name: 'Estre Seryrey', username: 'wrtwetewt', joined: '12 September 2019', activated: false, actions: '' },
  // { name: 'Michael Wijaya', username: 'michaelwijaya', joined: '12 September 2019', activated: true, actions: '' },
  // { name: 'Jzofer Lamans', username: 'lamans', joined: '4 April 2019', activated: true, actions: '' },
  // { name: 'Air Cat', username: 'AirCat', joined: '29 July 2019', activated: false, actions: '' },
  // { name: 'Ronaldo Reis', username: 'sprinth', joined: '26 July 2019', activated: true, actions: '' },
  // { name: 'Dmas Mad', username: 'Damsmas18', joined: '4 April 2019', activated: true, actions: '' },
  // { name: 'Dmas Mad', username: 'Damsmas18', joined: '4 April 2019', activated: true, actions: '' },
  // { name: 'Dmas Mad', username: 'Damsmas18', joined: '4 April 2019', activated: true, actions: '' },
  // { name: 'Dmas Mad', username: 'Damsmas18', joined: '4 April 2019', activated: true, actions: '' },
  // { name: 'Dmas Mad', username: 'Damsmas18', joined: '4 April 2019', activated: true, actions: '' },
  // ];
  rows = [];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'Name' },
    { name: 'Username' },
    { name: 'Joined' },
    { name: 'Activated' },
    { name: 'Actions' }
  ];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: GET_ALL_USERS,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      this.rows = result.data && result.data.getAllUsers;
      console.log('this.rows', this.rows);
    });
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

}
