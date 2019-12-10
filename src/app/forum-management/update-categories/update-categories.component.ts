import { Component, ViewChild } from "@angular/core";
import { ApiService } from "app/shared/api/api.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CATEGORIES } from "../forum-categories.config";
import { ToastrService } from "ngx-toastr";
import { NgForm, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ForumCategoryApiService } from "services/forumCategoryApi";

@Component({
  selector: "app-update-categories",
  templateUrl: "./update-categories.component.html",
  styleUrls: ["./update-categories.component.scss"]
})
export class UpdateCategoriesComponent {
  categoryID: String;
  subCategoryID: String;
  categoryForm: FormGroup;
  categories: boolean;
  imageLabel: String = "Choose File";
  fileToUpload: any;
  mediaInfo: any;
  constructor(
    private forumCategoryApi: ForumCategoryApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      category: ["", Validators.required]
    });
    this.categoryID = this.route.params["value"].category;
    if (this.route.params["value"].subcategory == "all") {
      this.categories = true;
      var responsePayload = [
        "_id",
        "category",
        "slug",
        {
          key: "forum_category_media",
          fields: ["media_url", "height", "width", "thumbnail_url"]
        },
        "threads",
        "createdAt"
      ];
      var params = { id: this.categoryID };
      this.forumCategoryApi
        .getOneForumCategories(responsePayload, params)
        .then(result => {
          this.mediaInfo = result.data.forum_category_media;
          this.categoryForm = this.formBuilder.group({
            category: [result.data.category]
          });
        });
    } else {
      this.categories = false;
      this.subCategoryID = this.route.params["value"].subcategory;
      var responseSubPayload = [
        "_id",
        {
          key: "categoryId",
          fields: [
            "category",
            {
              key: "forum_category_media",
              fields: ["media_url", "width", "height"]
            },
            "threads"
          ]
        },
        {
          key: "forum_subcategory_media",
          fields: ["media_url", "height", "width", "tags"]
        },
        "subcategory",
        "threads",
        "subscribed",
        "createdAt"
      ];
      var params = { id: this.subCategoryID };
      this.forumCategoryApi
        .getOneForumSubCategories(responseSubPayload, params)
        .then(result => {
          this.categoryForm = this.formBuilder.group({
            category: [result.data.subcategory]
          });
        });
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
      this.imageLabel = this.fileToUpload.name;
    }
  }

  onCancel() {
    this.router.navigate(["forum-management/categories"]);
  }
  onUpdate() {
    if (this.categoryForm.value["category"] == "") {
      this.toastr.warning("Please input Category Name", "Warning");
    } else {
      if (this.categories) {
        var responsePayload = [
          "_id",
          "category",
          "slug",
          "createdAt",
          {
            key: "forum_category_media",
            fields: ["media_url", "height", "width"]
          }
        ];
        var params = { data: this.categoryForm.value, id: this.categoryID };
        this.forumCategoryApi
          .updateForumCategory(responsePayload, params, this.fileToUpload)
          .then(result => {
            this.mediaInfo = result.data.forum_category_media;
            this.toastr.success("Updated Successfully", "Success");
            this.router.navigate(["forum-management/categories"]);
          })
          .catch(error => {
            console.log("error", error);
          });
      } else {
        var responsePayload = [
          "_id",
          { key: "categoryId", fields: ["category"] },
          "subcategory",
          {
            key: "forum_subcategory_media",
            fields: ["media_url", "height", "width"]
          }
        ];
        var data: any = {
          subcategory: this.categoryForm.value["category"]
        };
        var params = { data: data, id: this.subCategoryID };
        this.forumCategoryApi
          .updateForumSubCategory(responsePayload, params)
          .then(result => {
            // this.mediaInfo = result.data.forum_category_media;
            this.toastr.success("Updated Successfully", "Success");
            this.router.navigate(["forum-management/categories"]);
          })
          .catch(error => {
            console.log("error", error);
          });
      }
    }
  }
}
