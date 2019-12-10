import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { RoleApiService } from "services/roleApi";

@Component({
  selector: "app-create-role",
  templateUrl: "./create-role.component.html",
  styleUrls: ["./create-role.component.scss"]
})
export class CreateRoleComponent {
  roleForm: FormGroup;

  constructor(
    private router: Router,
    private roleApi: RoleApiService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      role: ["", Validators.required]
    });
  }

  onCancel() {
    this.router.navigate(["role-management/roles-management"]);
  }
  onCreate() {
    console.log("this.roleForm.value", this.roleForm.value["role"]);
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
      var params = { data: data };
      this.roleApi.createNewRole(responsePayload, params).then(result => {
        this.router.navigate(["role-management/roles-management"]);
        this.toastr.success("Created Role Successfully", "Success");
      });
    }
  }
}
