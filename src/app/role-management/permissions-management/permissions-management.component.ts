import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-permissions-management',
  templateUrl: './permissions-management.component.html',
  styleUrls: ['./permissions-management.component.scss']
})
export class PermissionsManagementComponent {

  rows = [
    { roles: "Manage advertisement placement", type: "title", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Application Notification Management", type: "title", anonymous_admin: true, authenticated_admin: true, administrator: true },
    { roles: "User Post Management", type: "title", anonymous_admin: "none", authenticated_admin: "none", administrator: "none" },
    { roles: "View Reported Posts", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update Thread Post Reply Status (Online, Offline)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Select featured user post", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Create categories user post (Admin use)", type: "content", anonymous_admin: false, authenticated_admin: false, administrator: true },
    { roles: "Forum Management", type: "title", anonymous_admin: "none", authenticated_admin: "none", administrator: "none" },
    { roles: "Create Forum Categories", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update Forum Categories", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Delete Forum Categories", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Create Forum Subcategories", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update Forum Subcategories", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Delete Forum Subcategories", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Combine similar Thread", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Select featured Thread", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Retrieve/Filter Forum Threads", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update Forum Thread Status (Online, Offline)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View Thread Posts", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update Thread Post Status (Online, Offline)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View Thread Post Replies", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update Thread Post Reply Status (Online, Offline)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View Reported threads", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View Reported Posts", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Trigger Thread Push Notification", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "News Management", type: "title", anonymous_admin: "none", authenticated_admin: "none", administrator: "none" },
    { roles: "Create News", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update News", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Trigger News Push Notification", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View Reported News", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update News Status (Published, Draft)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View News Comments and Comment Replies", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View Reported News Comments", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View Reported News Comment Replies", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update News Comment Status (Online, Offline)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update News Comment Reply Status (Online, Offline)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Direct Messages", type: "title", anonymous_admin: "none", authenticated_admin: "none", administrator: "none" },
    { roles: "View user direct messages", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View reported direct messages", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Remove all suspended user direct messages", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Invisible all direct messages by particular user", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "User Management", type: "title", anonymous_admin: "none", authenticated_admin: "none", administrator: "none" },
    { roles: "Create Admin Users", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update Admin Users", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Delete Admin Users", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Block/Unblock Normal Users", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Retrieve/Filter All Users", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View reported Users", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Select featured user", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Create categories of users", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Invisible all user comments (only visible to user)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Invisible all forum thread by user to other users", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Invisible selected user comments", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Invisible all selected forum thread", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Event Management", type: "title", anonymous_admin: "none", authenticated_admin: "none", administrator: "none" },
    { roles: "Create event", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Update event", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Delete event", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View all event", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "View all event reaction (Interested and going)", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Suspend an event", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Select featured event", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },
    { roles: "Create categories of events", type: "content", anonymous_admin: false, authenticated_admin: true, administrator: true },

  ];
  temp = [];
  columns = [
    { name: 'Roles' },
    { name: 'Admin' },
    { name: 'Moderator' },
    { name: 'Admin User' }
  ];
  selected = [];
  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {

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
      return d.roles.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
}
