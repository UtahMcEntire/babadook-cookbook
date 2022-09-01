import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  @Output() featureSeleted = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSeleted.emit(feature);  
  }
}
