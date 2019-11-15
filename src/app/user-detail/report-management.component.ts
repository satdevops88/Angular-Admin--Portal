import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-report-management',
  templateUrl: './report-management.component.html',
  styleUrls: ['./report-management.component.scss']
})
export class ReportManagementComponent {

  rows = [
    { node: 'Sngine', type: 'User', reportedBy: "Rotary Power", reportedCount: 0, time: "5 April 2019", actions: "" },
    { node: '', type: 'Post', reportedBy: "Beutel Ratte", reportedCount: 0, time: "10 May 2019", actions: "" },
    { node: '', type: 'Thread', reportedBy: "Red G Vcf", reportedCount: 0, time: "27 September 2019", actions: "" },
    { node: '', type: 'Thread', reportedBy: "Guiherme Leles", reportedCount: 0, time: "27 September 2019", actions: "" },
    { node: '', type: 'News', reportedBy: "Artem Test", reportedCount: 0, time: "11 November 2019", actions: "" },
    { node: '', type: 'Comment', reportedBy: "Chan Faa", reportedCount: 0, time: "15 May 2019", actions: "" },
    { node: '', type: 'Reply', reportedBy: "Test User", reportedCount: 0, time: "30 October 2019", actions: "" },
    { node: '', type: 'Message', reportedBy: "Guiherme Leles", reportedCount: 0, time: "25 June 2019", actions: "" },
    { node: 'Man Them', type: 'User', reportedBy: "Man Them", reportedCount: 0, time: "15 July 2019", actions: "" },
    { node: 'Guiherme Leles', type: 'User', reportedBy: "Test User", reportedCount: 0, time: "15 July 2019", actions: "" },
  ];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'Node' },
    { name: 'Type' },
    { name: 'ReportedBy' },
    { name: 'ReportedCount' },
    { name: 'Time' },
    { name: 'Actions' },
  ];

  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.temp = [...this.rows];
    this.calcuatereportedCountCount();
  }

  calcuatereportedCountCount() {
    //TODO: calculate the reportedCount count when unique id is ready
    this.rows.forEach((row, index) => {
      this.rows[index].reportedCount = 1
    });
  }

  onMarkSafe(rowIndex) {
    this.toastr.success('Maked as Safe Successfully', 'Success');
    // var removed = this.rows.splice(rowIndex, 1);
  }

  onDelete(rowIndex) {
    if (confirm('Are you sure to delete Admin User ?')) {
      this.toastr.success('Deleted Admin User Successfully', 'Success');
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return (d.node.toLowerCase() + d.type.toLowerCase() + d.reportedBy.toLowerCase()).indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

}
