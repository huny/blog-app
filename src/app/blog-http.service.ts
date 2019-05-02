import { Injectable } from '@angular/core';
//importing httpCLient to make the requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
//importing Observables related code
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  private authToken:string = 'ZmVkNjg4MjdmNGMyN2U5ZTM1ZWI0OTg0YWU5OTRhY2I4YmIxNjBkNzgxZTQyNWQ4ZGY1YmIxYmVhY2M4YzU4NmI0ODZiMzg5OGE1Yjk1MDlhMjk4MDcyYmNkOTQ5MmRjMWEyZmIwYWMyMzc4N2MwZGI2YzcyNTc5ZTNmZGU0ZjUyYg==';
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs'

    //method to return all the blogs
    public getAllBlogs():any{
    let myResponse =this._http.get(this.baseUrl + '/all' + '?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
    }

  constructor(private _http:HttpClient) { 
    console.log("blog-http service is called")

  }

  //Exception Handler
  private handleError(err:HttpErrorResponse){
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId):any{
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);    
    console.log(myResponse);
    return myResponse;

  }//end getSingleBlogInformation function 

  public createBlog(blogData):any{
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken,blogData);
    return myResponse;
  }//end create blog

  public deleteBlog(blogId):any{
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return myResponse;
  }//end delete blog

  public editBlog(blogId, blogData):any{
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken,blogData);
    return myResponse;
  }//end edit blog
  
}
