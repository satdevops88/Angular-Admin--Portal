import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent {

  events = [
    { name: "event1", avatar: "assets/img/portrait/medium/avatar-m-22.png", img: "assets/img/gallery/2.jpg" },
    { name: "event2", avatar: "assets/img/portrait/medium/avatar-m-21.png", img: "assets/img/gallery/3.jpg" },
    { name: "event3", avatar: "assets/img/portrait/medium/avatar-m-20.png", img: "assets/img/gallery/4.jpg" },
    { name: "event4", avatar: "assets/img/portrait/medium/avatar-m-19.png", img: "assets/img/gallery/5.jpg" },
    { name: "event5", avatar: "assets/img/portrait/medium/avatar-m-18.png", img: "assets/img/gallery/6.jpg" },
    { name: "event6", avatar: "assets/img/portrait/medium/avatar-m-17.png", img: "assets/img/gallery/7.jpg" },
  ];
  temp = [];
  selected = [];
  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.temp = [...this.events];
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.events = temp;
  }

  onUpdateEvent(row) {
    this.router.navigate(['event-management/update-event/133223']);
  }

  onDeleteEvent(row) {
    this.toastr.success('Deleted Successfully', 'Success');
  }

  onCreateRole() {
    this.router.navigate(['event-management/create-event']);
  }
}
