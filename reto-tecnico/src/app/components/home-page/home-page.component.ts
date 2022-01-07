import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data: Array<any> = [];
  constructor(private StudentsService:StudentsService) { }

  ngOnInit(): void {
    this.StudentsService.getUsers().subscribe((element) => {
      this.data = element;
      console.log(this.data);
    });
  }

}
