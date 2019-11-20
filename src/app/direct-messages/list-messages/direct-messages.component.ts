import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.scss']
})
export class DirectMessagesComponent {

  rows = [
    { user1: "Defiant America", user2: "Audrey Mike", lastDate: "3 months ago", status: "Visible" },
    { user1: "Cliff Clarke", user2: "Siboy Siboy", lastDate: "1 months ago", status: "Invisible" },
  ];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'User1' },
    { name: 'User2' },
    { name: 'LastDate' },
    { name: 'Content' },
    { name: 'Status' },
    { name: 'Actions' }
  ];
  selected = [];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.temp = [...this.rows];
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return (d.title + d.author).toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  onViewMessages() {
    this.router.navigate(['direct-message/view-details'])
  }

}
