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
  showModal = false;
  addMode=true;

  ngOnInit() {
    this.getResearchers();
  }

  getResearchers() {
    this.api.getResearchers().subscribe({
      next: (res:any) => {
        this.researchers = res.data; 
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  startAddResearcher() {
    console.log("test");
    this.showModal = true;

    
  }

  closeModal() {
    this.showModal = false;
  }
}