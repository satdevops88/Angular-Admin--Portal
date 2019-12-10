import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NewsApiService } from "services/newsApi";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.scss"]
})
export class NewsDetailsComponent {
  newsID: String;
  newsInfo: any;
  news_summary: any;
  news_content: any;
  newsComments = [];

  constructor(
    private newsApi: NewsApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.newsID = this.route.params["value"].newsID;
    this.retrieveNews(this.newsID);
    this.retrieveAllNewsComments(this.newsID, 1, 20);
    console.log("this.newsID", this.newsID);
  }

  retrieveNews(id: String) {
    var responsePayload = [
      "_id",
      { key: "category_id", fields: ["category_name"] },
      "title",
      "slug",
      "news_summary",
      "news_content",
      {
        key: "featured_media",
        fields: ["tags", "media_url", "height", "width"]
      },
      { key: "news_media", fields: ["tags", "media_url", "height", "width"] },
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
    var params = { id: id };
    this.newsApi.getOneNews(responsePayload, params).then(result => {
      this.newsInfo = result.data;
      console.log("newsInfo result => ", result);
      this.news_summary = this.newsInfo.news_summary;
      this.news_content = this.newsInfo.news_content;
    });
  }

  retrieveAllNewsComments(_id: String, page: Number, limit: Number) {
    var responsePayload = [
      "_id",
      "comment_content",
      "likes",
      "dislikes",
      "replies",
      "status",
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
    var params = { id: _id, page: page, limit: limit };
    this.newsApi.getNewsComments(responsePayload, params).then(result => {
      result.data.forEach(post => {
        this.newsComments.push(post);
      });
      console.log("newsComments => ", this.newsComments);
    });
  }

  onViewReplies(newsComment) {
    if (newsComment.replies > 0) {
      if (newsComment.viewReplies) {
        newsComment.viewReplies = false;
      } else {
        newsComment.viewReplies = true;
        var responsePayload = [
          "reply_content",
          "likes",
          "dislikes",
          "status",
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
        var params = { id: newsComment._id, page: 1, limit: 20 };
        var comments: any = [];
        this.newsApi
          .getNewsCommentReplies(responsePayload, params)
          .then(result => {
            result.data.forEach(reply => {
              comments.push(reply);
            });
            newsComment.repliesData = comments;
          });
      }
    } else {
      this.toastr.warning("There is no Replies!", "warning");
    }
  }
  onBack() {
    this.router.navigate(["news-management/news"]);
  }
}
