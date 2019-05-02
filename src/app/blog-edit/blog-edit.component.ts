import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import { ToastrService } from 'ngx-toastr';

import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog:any
  public possibleCategories:string[] = ["Comedy", "Drama", "Action", "Technology"]

  constructor(private blogHttpService:BlogHttpService, private _route: ActivatedRoute, private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
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
  }//end on init

  public editThisBlog():any{
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data =>{
        console.log(data)
        this.toastr.success('Blog edited successfully', 'Success!')
        setTimeout(() =>{
          this.router.navigate(['/blog',this.currentBlog.blogId])
        },2000)

      },
      error =>{
        console.log("Some error occured")
        console.log(error.errorMessage)
        this.toastr.error('Some error occured', 'Oops!')
      }
    )
  }

}
