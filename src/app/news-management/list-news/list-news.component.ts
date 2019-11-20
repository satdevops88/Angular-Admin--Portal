import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent {

  rows = [
    { title: "Buhari, Obasanjo meet, shake hands, as President presides over National Council of State [PHOTOS]", author: "Audrey Mike", categories: "Local", comments: "3", date: "3 months ago", id: "213342", views: "1210", active: true },
    { title: "FG plans to shutdown internet access to rig the 2019 election- Gov Wike alleges", author: "Audrey Mike", categories: "Politics", comments: "3", date: "a month ago", id: "213323", views: "1800", active: false },
    { title: "FG asks Chief Justice of Nigeria Walter Onnoghen to vacate office over his refusal to declare his assets, to be arraigned in court on Monday Jan 14th", author: "Audrey Mike", categories: "Local", comments: "2", date: "a month ago", id: "3342", views: "99", active: true },
    { title: "2019 presidency: Buhari enjoys ‘cult-like’ followership; Ekweremadu, PDP govs supporting him – BMO", author: "Audrey Mike", categories: "Politics", comments: "1", date: "2 months ago", id: "123456", views: "90", active: true },
    { title: "Breaking: Justice Walter Onnoghen absent as CCT proceedings begin", author: "Audrey Mike", categories: "Local", comments: "3", date: "6 months ago", id: "212121", views: "7500", active: true }
  ];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'Title' },
    { name: 'Author' },
    { name: 'Categories' },
    { name: 'Comments' },
    { name: 'Date' },
    { name: 'ID' },
    { name: 'Views' },
    { name: 'Active' },
    { name: 'Actions' }
  ];
  selected = [];

  constructor(private router: Router, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.temp = [...this.rows];
  }
  onCreateNews() {
    this.router.navigate(['news-management/create-news'])
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

  onUpdate(rowIndex) {
    this.router.navigate(['news-management/update-news/' + this.rows[rowIndex].id])
  }

  onPublish(rowIndex) {
    this.rows[rowIndex].active = false;
  }

  onDraft(rowIndex) {
    this.rows[rowIndex].active = true;
  }


}
