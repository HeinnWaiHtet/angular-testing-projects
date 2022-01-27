import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {

  year : number = 0;
  month : number = 0;

  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap;
    this.year = Number(param.get('year'));
    this.month = Number(param.get('month'));
  }

  submit(){
    this.router.navigate(['/']);
  }

}
