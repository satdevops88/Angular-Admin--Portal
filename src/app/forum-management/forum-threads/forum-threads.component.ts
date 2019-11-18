import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forum-threads',
  templateUrl: './forum-threads.component.html',
  styleUrls: ['./forum-threads.component.scss']
})
export class ForumThreadsComponent {

  rows = [
    { categories: "Technology", subcategories: "Technology Market", title: "what is the technology market?", content: "Technology market is the market of Technology", date: "3 months ago" },
    { categories: "Technology", subcategories: "Technology Market", title: "Testing", content: "This is the testing Thread", date: "yesterday" },
    { categories: "Entertainment", subcategories: "Literature", title: "what is the Literature?", content: "Literature is the Literature", date: "2 months ago" },
    { categories: "Entertainment", subcategories: "Gaming", title: "what is the Gaming?", content: "Gaming is the Gaming of Entertainment", date: "8 months ago" },
  ];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'Categories' },
    { name: 'Subcategories' },
    { name: 'Title' },
    { name: 'Content' },
    { name: 'Attachements' },
    { name: 'Date' }
  ];
  selected = [];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.temp = [...this.rows];
  }
  onCombineThreads() {
    if (this.selected.length < 2) {
      this.toastr.warning('Select at leact 2 Threads', 'Warning');
    } else {
      this.toastr.success('Combined Successfully', 'Success');
    }
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return (d.title + d.content).toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

}
