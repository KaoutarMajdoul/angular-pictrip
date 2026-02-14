import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PicComponent } from './pic/pic.component';
import { Pic } from './models/pic';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PicComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  pics!: Pic[];

  myPic!: Pic;
  mySecondPic!: Pic;
  myThirdPic!: Pic;
  myOtherPic!: Pic;

  ngOnInit(): void {

  this.pics = [
    new Pic(
      "Escapade à la plage",
      "Soleil, eau turquoise et sable fin 🏝️",
      new Date(),
      12,
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    ),

    new Pic(
      "Aventure en montagne",
      "Randonnée au sommet avec une vue incroyable 🏔️",
      new Date(),
      8,
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ),

    new Pic(
      "City trip",
      "Nouvelle ville 🌆",
      new Date(),
      15,
      "https://media.istockphoto.com/id/1406960186/fr/photo/lhorizon-de-new-york-%C3%A9tats-unis.jpg?s=612x612&w=0&k=20&c=ZBHoWDoiYZVKbJyLqI33AHI_YUcMitNdEoEtOddkI6g="
    )
  ];

  this.pics[0].setLocation('Plage tropicale');
  this.pics[1].setLocation('Alpes');
  this.pics[2].setLocation('New York');
  }

}
