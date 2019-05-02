import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common'

import { ToastrService } from 'ngx-toastr';

//importig route related code
import {ActivatedRoute, Router} from '@angular/router'
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentBlog;

  constructor(private _route:ActivatedRoute, private router:Router, public blogService:BlogService,public blogHttpService:BlogHttpService,private toastr: ToastrService,private location:Location) {
    console.log("blog-view constructor is called");
   }

  ngOnInit() {
    console.log("blog-view ngOnInit is called");
    //getting the blogId from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log("Logging data");
        console.log(data);
        this.currentBlog = data["data"];
      },
      error =>{
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.currentBlog);
  }

  ngOnDestroy(){
    console.log("blog-view destroyed.")
  }

  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data)
        this.toastr.success('Blog Deleted successfully', 'Success!')
        setTimeout(() =>{
          this.router.navigate(['/home'])
        },2000)

      },
      error =>{
        console.log("Some error occured")
        console.log(error.errorMessage)
        this.toastr.error('Some error occured', 'Oops!')
      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back()
  }

}
