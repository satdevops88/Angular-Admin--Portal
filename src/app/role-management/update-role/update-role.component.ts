import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { RoleApiService } from "services/roleApi";

@Component({
  selector: "app-update-role",
  templateUrl: "./update-role.component.html",
  styleUrls: ["./update-role.component.scss"]
})
export class UpdateRoleComponent {
  roleForm: FormGroup;
  roleID: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private roleApi: RoleApiService
  ) {}

  ngOnInit() {
    this.roleID = this.route.params["value"].roleID;
    this.roleForm = this.formBuilder.group({
      role: ["", Validators.required]
    });

    var responsePayload = [
      "_id",
      "role_name",
      "role_slug",
      "role_permission",
      "created_at"
    ];
    var params = { id: this.roleID };

    this.roleApi.getOneRole(responsePayload, params).then(result => {
      console.log("role result", result);
      this.roleForm.setValue({
        role: result.data.role_name
      });
    });
  }

  onCancel() {
    this.router.navigate(["role-management/roles-management"]);
  }
  onUpdate() {
    if (!this.roleForm.value["role"]) {
      this.toastr.warning("Input the Role Name!", "warning");
    } else {
      var responsePayload = [
        "_id",
        "role_name",
        "role_slug",
        "role_permission",
        "created_at"
      ];
      const data = {
        role_name: this.roleForm.value["role"],
        role_permission: "news.can.read"
      };
      var params = { id: this.roleID, data: data };
      this.roleApi.updateRole(responsePayload, params).then(result => {
        this.router.navigate(["role-management/roles-management"]);
        this.toastr.success("Update Role Successfully", "Success");
      });
    }
  }
}
