import { Component } from "@angular/core";
import { ApiService } from "app/shared/api/api.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { RoleApiService } from "services/roleApi";

@Component({
  selector: "app-roles-management",
  templateUrl: "./roles-management.component.html",
  styleUrls: ["./roles-management.component.scss"]
})
export class RolesManagementComponent {
  rows = [];
  page = {
    totalElements: 0,
    pageNumber: 0,
    size: 10
  };
  filterVal = "";

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private roleApi: RoleApiService
  ) {}

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  onDeleteRole(row) {
    if (confirm('Are you sure to delete "' + row.role_name + '" Role ?')) {
      var responsePayload = [
        "_id",
        "role_name",
        "role_slug",
        "role_permission",
        "created_at"
      ];
      var params = { id: row._id };
      this.roleApi.deleteRole(responsePayload, params).then(result => {
        this.toastr.success("Deleted Successfully", "Success");
        this.setPage({ offset: 0 });
      });
    }
  }

  onUpdateRole(row) {
    this.router.navigate(["role-management/update-role/", row._id]);
  }

  onCreateRole() {
    this.router.navigate(["role-management/create-role"]);
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
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
        this.rows = result.data;
        this.page.totalElements = result.meta.totalDocument;
      })
      .catch(error => {
        console.log("error", error);
        this.rows = [];
        this.page.totalElements = 0;
      });
  }
}
