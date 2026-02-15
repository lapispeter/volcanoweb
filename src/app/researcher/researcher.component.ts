/*
* File: researcher.component.ts
* Author: Lapis Péter
* Copyright: 2026, Lapis Péter
* Group: SzoftII-E
* Date: 2026-02-15
* Github: https://github.com/lapispeter/
* Licenc: MIT
*/

import { Component, inject } from '@angular/core';
import { ResearcherService } from '../shared/researcher.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-researcher',
  imports: [ReactiveFormsModule],
  templateUrl: './researcher.component.html',
  styleUrl: './researcher.component.css',
})
export class ResearcherComponent {
  private readonly api= inject(ResearcherService);
  private readonly builder =inject(FormBuilder);

  protected researchers:any;
  protected researcherform = this.builder.group({
    full_name: '',
    specialization: ''
  });

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

  save() {
    console.log("save");
    console.log(this.researcherform.value);
    this.api.addResearcher(this.researcherform.value).subscribe({
      next: (res:any) => {
        console.log(res);
        this.getResearchers();
        this.closeModal();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}