import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpObj:HttpClient) { }

  userBhSubject = new BehaviorSubject(null)

  searchTerm = new BehaviorSubject(null)

  productData=new BehaviorSubject(null)


  getUserData(){
    return this.userBhSubject
  }

  //signUp
  userPost(userObj):Observable<any>{
    return this.httpObj.post("http://localhost:5000/user/createusers",userObj)
  }

  //login 
  loginObj(loginObj):Observable<any>{
    return this.httpObj.post("http://localhost:5000/user/login",loginObj)
  }

    //logout
    logout(){
      localStorage.removeItem("token")
      this.getUserData().next(null)
    }


    //get all books
    allBooks():Observable<any>{
      return this.httpObj.get("https://newsapi.org/v2/everything?q=tesla&from=2022-05-08&sortBy=publishedAt&apiKey=7d833cf9112647098900bf708ddda9a8")
    }
}
