import { Component } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {SearchService} from '../../../core/services';

export interface Keyword {
  name: string;
}

@Component({
  selector: 'app-search-capsule-page',
  templateUrl: './search-capsule-page.component.html',
  styleUrls: ['./search-capsule-page.component.scss']
})
export class SearchCapsulePageComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  keywords: Keyword[] = [];

  results = [];


  constructor(private searchService: SearchService) {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our keyword
    if ((value || '').trim()) {
      this.keywords.push({name: value.trim()});
      this.searchKeywords(this.keywords.map(value1 => value1.name));
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(keyword: Keyword): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
      this.searchKeywords(this.keywords.map(value1 => value1.name));
    }
  }

  searchKeywords(keywords: string[]) {
    this.searchService.textSearch(keywords)
      .subscribe(value => {
        this.results = value;
      });
  }
}
