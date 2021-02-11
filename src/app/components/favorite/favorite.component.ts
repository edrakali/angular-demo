import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite'], // not necessary and not best practice. Use @Input('is-favorite') instead
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite(){
    this.isFavorite = ! this.isFavorite;
    console.log('clicked');
    this.change.emit({newValue: this.isFavorite});
  }

}

export interface FavoriteOnChangeEventArgs {newValue: boolean;}
