import { Component, inject } from '@angular/core';
import { ResearcherService } from '../shared/researcher.service';

@Component({
  selector: 'app-researcher',
  imports: [],
  templateUrl: './researcher.component.html',
  styleUrl: './researcher.component.css',
})
export class ResearcherComponent {
  private readonly api= inject(ResearcherService);
  protected researchers:any;

  ngOnInit() {
    this.getResearchers();
  }

  getResearchers() {
    this.api.getResearchers().subscribe({
      next: (res:any) => {
        this.researchers = res; 
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}