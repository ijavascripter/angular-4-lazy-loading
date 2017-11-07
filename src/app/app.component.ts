import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading:boolean;
  constructor(private router: Router){
    this.loading=true;
  }
  ngOnInit() {
    //This is mimicking service call in a sense say REST Call
    setTimeout(()=>{
        this.router.navigate(['/lazy/load-movie']);
        
        },3000);
        this.loading=false;
  }

  title = 'Lazy Load Demo!';
}
