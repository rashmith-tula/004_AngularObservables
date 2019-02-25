import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { controller } from '../control.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit, OnDestroy {
  myObsSubscr: Subscription;
  constructor(private btnControl: controller) { }

  ngOnInit() {
    const myObservable = Observable.create(
      (obs: Observer<string>) => {
        setTimeout(()=> {obs.next("after 2 seconds")}, 2000);
        setTimeout(() => {obs.next("after 4 seconds")}, 4000);
        setTimeout(() => {obs.next("after 4 seconds")}, 4000);
        setTimeout(() => {obs.next("after 4 seconds")}, 4000);
        setTimeout(() => {obs.next("after 4 seconds")}, 4000);
        setTimeout(() => {obs.next("after 4 seconds")}, 4000);
        setTimeout(() => {obs.next("after 4 seconds")}, 4000);
        setTimeout(() => {obs.next("after 4 seconds")}, 4000);
        setTimeout(() => {obs.next("after 4 seconds")}, 4000);
        setTimeout(() => {obs.error("error after 6 seconds")}, 6000);
      });

    this.myObsSubscr= myObservable.subscribe(
      (data: string)=> {console.log(data)},
      (error: string)=> {console.log(error)},
    );
  }

  onClick() {
      this.btnControl.buttonClick.next("clicked");
  }

  ngOnDestroy() {
    this.myObsSubscr.unsubscribe();
  }
}
