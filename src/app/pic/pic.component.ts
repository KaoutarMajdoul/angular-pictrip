import { Component, Input, OnInit } from '@angular/core';
import { Pic } from '../models/pic';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pic',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    DatePipe
  ],
  templateUrl: './pic.component.html',
  styleUrl: './pic.component.scss'
})
export class PicComponent implements OnInit{
  @Input() pic!: Pic;

  userHasLiked!: boolean;
  likeButtonText!: String;

  ngOnInit(): void {
      this.userHasLiked = false;
      this.likeButtonText = "Like";
    
    }

    onLike(): void {
      if (this.userHasLiked) {
        this.unlike();
      } else {
        this.like();
      }
    }

    unlike() {
        this.pic.removeLike();
        this.likeButtonText = "Like";
        this.userHasLiked = false;
    }

    like() {
        this.pic.addLike();
        this.likeButtonText = "Unlike";
        this.userHasLiked = true;
    }

}
