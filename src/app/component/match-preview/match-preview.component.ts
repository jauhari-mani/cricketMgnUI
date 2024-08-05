import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/interfaces/match';

@Component({
  selector: 'app-match-preview',
  templateUrl: './match-preview.component.html',
  styleUrls: ['./match-preview.component.less']
})
export class MatchPreviewComponent implements OnInit {

  @Input() match: Match = new Match();
  constructor() { }

  ngOnInit(): void {
  }

}
