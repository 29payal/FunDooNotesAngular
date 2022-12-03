import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
constructor (private router: Router, private user: UserService){

}
ngOnInit(): void {
  
}
Logout()
{
  this.router.navigateByUrl("/login")
  console.log("Logout Successfully..!")
}
trash(){
  this.router.navigateByUrl("/home/trash")
}
archive(){
  this.router.navigateByUrl("/home/archive")
}

searchNote(event:any){
  
}

}
