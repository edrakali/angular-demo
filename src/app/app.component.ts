import { Component } from '@angular/core';
import { FavoriteOnChangeEventArgs } from './components/favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app3';
  title2 = "hell";


  // tslint:disable-next-line: typedef
  onFavoriteChanged(eventArgs: FavoriteOnChangeEventArgs){
    console.log('On favorite changed triggered: ', eventArgs.newValue);
  }
}
