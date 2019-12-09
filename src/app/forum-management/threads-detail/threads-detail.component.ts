import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ForumCategoryApiService } from "services/forumCategoryApi";

@Component({
  selector: "app-threads-detail",
  templateUrl: "./threads-detail.component.html",
  styleUrls: ["./threads-detail.component.scss"]
})
export class ThreadsDatailComponent {
  threadID: String = "";
  categoryInfo: String = "";
  subCategoryInfo: String = "";
  threadInfo: any;
  threadPosts: any = [];
  currentPostPage = 0;
  totalPostPage = 0;

  constructor(
    private forumCategoryApi: ForumCategoryApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.threadID = this.route.params["value"].threadID;
    console.log(this.threadID);
    this.retrieveForumThread(this.threadID);
    this.retrieveAllThreadPosts(this.threadID, 1, 10);
  }

  retrieveForumThread(_id: String) {
    var responsePayload = [
      "_id",
      { key: "categoryId", fields: ["category"] },
      { key: "subcategoryId", fields: ["subcategory"] },
      { key: "reference", fields: ["reference_type"] },
      { key: "thread_media", fields: ["tags", "media_url", "height", "width"] },
      "title",
      "content",
      "status",
      "likes",
      "liked",
      "subscribed",
      "posts",
      "views",
      "isDuplicate",
      {
        key: "createdBy",
        fields: [
          "_id",
          "role_id",
          "display_name",
          { key: "profile_image", fields: ["media_url"] }
        ]
      },
      "createdAt"
    ];
    var params = { id: _id };
    this.forumCategoryApi.getOneThread(responsePayload, params).then(result => {
      this.threadInfo = result.data;
      console.log("Thread result => ", result);
    });
  }

  retrieveAllThreadPosts(_id: String, page: Number, limit: Number) {
    var responsePayload = [
      "_id",
      {
        key: "thread_post_media",
        fields: ["tags", "media_url", "height", "width"]
      },
      "content",
      "status",
      "likes",
      "comments",
      {
        key: "createdBy",
        fields: [
          "_id",
          "display_name",
          { key: "profile_image", fields: ["media_url"] }
        ]
      },
      "createdAt"
    ];
    var params = { id: _id, page: page, limit: limit };
    this.forumCategoryApi
      .getAllThreadPost(responsePayload, params)
      .then(result => {
        this.currentPostPage = result.meta.currentPage;
        this.totalPostPage = result.meta.totalPage;
        result.data.forEach(post => {
          this.threadPosts.push(post);
        });
        console.log("Thread Posts => ", this.threadPosts);
      });
  }

  retrieveAllThreadPostComment(_id: String, page: Number, limit: Number) {
    var responsePayload = [
      "_id",
      "content",
      "status",
      "likes",
      {
        key: "createdBy",
        fields: [
          "_id",
          "display_name",
          { key: "profile_image", fields: ["media_url"] }
        ]
      },
      "createdAt"
    ];
    var params = { id: _id, page: page, limit: limit };
    this.forumCategoryApi
      .getAllThreadPostComment(responsePayload, params)
      .then(result => {
        console.log("result", result);
      });
  }

  onUpdatePostStatus(status: String) {}

  onUpdatePostCommentStatus(status: String) {}

  onViewComment(threadPost) {
    console.log(threadPost);
    if (threadPost.comments > 0) {
      if (threadPost.viewComment) {
        threadPost.viewComment = false;
      } else {
        threadPost.viewComment = true;

        var responsePayload = [
          "_id",
          "content",
          "status",
          "likes",
          {
            key: "createdBy",
            fields: [
              "_id",
              "display_name",
              { key: "profile_image", fields: ["media_url"] }
            ]
          },
          "createdAt"
        ];
        var params = { id: threadPost._id, page: 0, limit: 20 };
        var comments: any = [];
        this.forumCategoryApi
          .getAllThreadPostComment(responsePayload, params)
          .then(result => {
            result.data.forEach(comment => {
              comments.push(comment);
            });
            console.log("comment", comments);
            threadPost.commentData = comments;
            console.log("this.threadPosts", this.threadPosts);
          });
      }
    } else {
      this.toastr.warning("There is no Comment!", "warning");
    }
  }
  onBack() {
    this.router.navigate(["forum-management/threads"]);
  }
}
