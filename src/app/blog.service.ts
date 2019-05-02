import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

   //declare a dummy blog varible here
   public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"2019-04-27T09:56:47.8543",
      "created":"2019-04-27T09:56:47.8543",
      "tags":[],
      "author":"Admin",
      "category": "Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    },
    {
      "blogId":"2",
      "lastModified":"2019-04-28T09:56:47.8543",
      "created":"2019-04-28T09:56:47.8543",
      "tags":[],
      "author":"Admin",
      "category": "Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"<h1>this is big text</h1><p>small text</p>",
      "description":"this is blog the description of blog 2",
      "title":"this is blog 2"
    },
    {
      "blogId":"3",
      "lastModified":"2019-03-28T09:56:47.8543",
      "created":"2019-03-28T09:56:47.8543",
      "tags":[],
      "author":"Admin",
      "category": "Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"<h1>this is big text</h1><p>small text</p>",
      "description":"Some Description of blog 3",
      "title":"this is blog 3"
    }
    
  ];

  public currentBlog;

  //method to return all the blogs
  public getAllBlogs():any{
    return this.allBlogs;
  }

  constructor() { 
    console.log("Blog Service constructor called")
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId):any{
    //using a for of loop fromtypescript

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;

  }//end getSingleBlogInformation function 

}
