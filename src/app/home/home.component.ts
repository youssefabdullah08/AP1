import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
work():void{
 alert("hello");
 
}
x:string="get started"

y:any[]=[
{name:"youssef",age:21,student:true},
{name:"omer",age:25,student:true},
{name:"5aled",age:15,student:false}


]
}
