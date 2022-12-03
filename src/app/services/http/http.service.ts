import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl ='http://fundoonotes.incubation.bridgelabz.com/api';

  constructor(private httpClient: HttpClient) { }

  postService(url: string, requestData: any, token: boolean= false , httpOptions: any= {} ) {
   return this.httpClient.post(this.baseUrl+url, requestData, token && httpOptions)
  }
}
