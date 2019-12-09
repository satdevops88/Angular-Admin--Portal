import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { DatePipe } from "@angular/common";
import { NewsApiService } from "services/newsApi";

@Component({
  selector: "app-list-news",
  templateUrl: "./list-news.component.html",
  styleUrls: ["./list-news.component.scss"],
  providers: [DatePipe]
})
export class ListNewsComponent {
  rows = [];
  page = {
    totalElements: 0,
    pageNumber: 0,
    size: 10
  };
  filterVal = "";
  selected = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private newsApi: NewsApiService
  ) {}

  ngOnInit() {
    this.setPage({ offset: 0 });
  }
  onCreateNews() {
    this.router.navigate(["news-management/create-news"]);
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter(event) {
    this.filterVal = event.target.value.toLowerCase();
  }

  onFilter() {
    this.setPage({ offset: 0 });
  }

  onUpdate(rowIndex) {
    this.router.navigate([
      "news-management/update-news/" + this.rows[rowIndex].id
    ]);
  }

  onUpdateNewsStatus(row, status) {
    console.log("row", row, "status", status);
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    var responsePayload = [
      "_id",
      {
        key: "category_id",
        fields: [
          "category_name",
          "category_description",
          {
            key: "news_category_media",
            fields: ["media_url", "height", "width"]
          }
        ]
      },
      "title",
      "slug",
      "news_summary",
      "news_content",
      {
        key: "featured_media",
        fields: ["tags", "media_url", "height", "width"]
      },
      {
        key: "news_media",
        fields: ["tags", "media_url", "height", "width"]
      },
      "tags",
      "status",
      "source",
      "likes",
      "dislikes",
      "comments",
      "bookmarked",
      "view_count",
      "share_count",
      {
        key: "created_by",
        fields: [
          "_id",
          "display_name",
          { key: "profile_image", fields: ["media_url"] }
        ]
      },
      "created_at"
    ];
    if (this.filterVal == "") {
      var params = { page: this.page.pageNumber + 1, limit: 10 };
      this.newsApi
        .getAllNews(responsePayload, params)
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
    } else {
      var filterParams = {
        queryString: this.filterVal,
        page: this.page.pageNumber + 1,
        limit: 10
      };
      this.newsApi
        .filterNews(responsePayload, filterParams)
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
}
