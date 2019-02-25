import { Component, OnInit, OnDestroy } from '@angular/core';
import { controller } from '../control.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  display: boolean = false;
  btnSubscribe: Subscription;
  content: string[] = ["Hare Krishna", 
                       "Hare Rama",
                       "Hare Krishna",
                       "Hare Rama"];

  constructor(private btnControl: controller) { }

  ngOnInit() {
    this.btnSubscribe = this.btnControl.buttonClick
    .subscribe(()=> { this.display = !this.display })
  }

  ngOnDestroy() {
    this.btnSubscribe.unsubscribe();
  }

}
