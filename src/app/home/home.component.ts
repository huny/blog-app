//this is a by deefault statement
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

//a simple class
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs

  
  constructor(public blogHttpService:BlogHttpService) { 
    console.log("Home constructor called.")
  }

  ngOnInit() {
    console.log("Home ngOnInit called.")
    //this.allBlogs = this.blogService.allBlogs;
    this.blogHttpService.getAllBlogs().subscribe(
      data =>{
        console.log("Logging data");
        console.log(data);
        this.allBlogs = data["data"];
      },
      error =>{
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.allBlogs);
  }

  ngOnDestroy() {
    console.log("Home destroyed.")
  }

}
