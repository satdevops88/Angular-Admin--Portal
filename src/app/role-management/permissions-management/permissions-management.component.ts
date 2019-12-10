import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { RoleApiService } from "services/roleApi";

@Component({
  selector: "app-permissions-management",
  templateUrl: "./permissions-management.component.html",
  styleUrls: ["./permissions-management.component.scss"]
})
export class PermissionsManagementComponent {
  rows = [
    {
      permission: "Manage advertisement placement",
      permission_slug: "ad.can.manage",
      type: "title",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Application Notification Management",
      permission_slug: "noti.can.manage",
      type: "title",
      anonymous_admin: true,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "User Post Management",
      permission_slug: "post.can.manage",
      type: "title",
      anonymous_admin: "none",
      authenticated_admin: "none",
      administrator: "none"
    },
    {
      permission: "View Reported Posts",
      permission_slug: "post.can.read",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update Thread Post Reply Status (Online, Offline)",
      permission_slug: "post.can.updatestatus",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Select featured user post",
      permission_slug: "post.can.selectfeatured",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Create categories user post (Admin use)",
      permission_slug: "post.can.create",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: false,
      administrator: true
    },
    {
      permission: "Forum Management",
      permission_slug: "forum.can.manage",
      type: "title",
      anonymous_admin: "none",
      authenticated_admin: "none",
      administrator: "none"
    },
    {
      permission: "Create Forum Categories",
      permission_slug: "forum.can.createCategory",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update Forum Categories",
      permission_slug: "forum.can.updateCategory",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Delete Forum Categories",
      permission_slug: "forum.can.deleteCategory",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Create Forum Subcategories",
      permission_slug: "forum.can.createSubcategory",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update Forum Subcategories",
      permission_slug: "forum.can.updateSubategory",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Delete Forum Subcategories",
      permission_slug: "forum.can.deleteSubategory",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Combine similar Thread",
      permission_slug: "forum.can.combineSimilar",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Select featured Thread",
      permission_slug: "forum.can.threadSelect",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Retrieve/Filter Forum Threads",
      permission_slug: "forum.can.retrieveThread",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update Forum Thread Status (Online, Offline)",
      permission_slug: "forum.can.updateThreadStatus",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View Thread Posts",
      permission_slug: "forum.can.read",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update Thread Post Status (Online, Offline)",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View Thread Post Replies",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update Thread Post Reply Status (Online, Offline)",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View Reported threads",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View Reported Posts",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Trigger Thread Push Notification",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "News Management",
      type: "title",
      anonymous_admin: "none",
      authenticated_admin: "none",
      administrator: "none"
    },
    {
      permission: "Create News",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update News",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Trigger News Push Notification",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View Reported News",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update News Status (Published, Draft)",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View News Comments and Comment Replies",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View Reported News Comments",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View Reported News Comment Replies",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update News Comment Status (Online, Offline)",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update News Comment Reply Status (Online, Offline)",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Direct Messages",
      type: "title",
      anonymous_admin: "none",
      authenticated_admin: "none",
      administrator: "none"
    },
    {
      permission: "View user direct messages",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View reported direct messages",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Remove all suspended user direct messages",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Invisible all direct messages by particular user",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "User Management",
      type: "title",
      anonymous_admin: "none",
      authenticated_admin: "none",
      administrator: "none"
    },
    {
      permission: "Create Admin Users",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update Admin Users",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Delete Admin Users",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Block/Unblock Normal Users",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Retrieve/Filter All Users",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View reported Users",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Select featured user",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Create categories of users",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Invisible all user comments (only visible to user)",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Invisible all forum thread by user to other users",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Invisible selected user comments",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Invisible all selected forum thread",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Event Management",
      type: "title",
      anonymous_admin: "none",
      authenticated_admin: "none",
      administrator: "none"
    },
    {
      permission: "Create event",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Update event",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Delete event",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View all event",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "View all event reaction (Interested and going)",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Suspend an event",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Select featured event",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    },
    {
      permission: "Create categories of events",
      type: "content",
      anonymous_admin: false,
      authenticated_admin: true,
      administrator: true
    }
  ];
  temp = [];
  roles = [];
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private roleApi: RoleApiService
  ) {}

  ngOnInit() {
    this.temp = [...this.rows];
    var responsePayload = [
      "_id",
      "role_name",
      "role_slug",
      "role_permission",
      "created_at"
    ];
    var params = null;
    this.roleApi
      .getAllRoles(responsePayload, params)
      .then(result => {
        console.log("result", result);
        this.roles = result.data;
      })
      .catch(error => {
        console.log("error", error);
        this.roles = [];
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.permission.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
}
