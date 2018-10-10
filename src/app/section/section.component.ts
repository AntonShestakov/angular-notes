import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  private sectionsUrl = 'sections'; // URL to web api

  sections: Section[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  readSections() {
    this.getSections().subscribe(sections=>{  this.sections=sections;  });
  }

  getSections(): Observable<Section[]> {
    return this.http.get(this.sectionsUrl)
      .map(response => response.json() as Section[]);
  }

}


interface Section {
  _id: string;
  title: string;
}
