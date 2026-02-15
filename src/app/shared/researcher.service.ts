/*
* File: researcher.service.ts
* Author: Lapis Péter
* Copyright: 2026, Lapis Péter
* Group: SzoftII-E
* Date: 2026-02-15
* Github: https://github.com/lapispeter/
* Licenc: MIT
*/

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResearcherService {

    private readonly http = inject(HttpClient);
    private readonly url = 'http://localhost:8000/api/researchers';
  
  getResearchers() {
    return this.http.get(this.url);
  }

  addResearcher(researcher: any) {
    return this.http.post(this.url, researcher);
  }


}
