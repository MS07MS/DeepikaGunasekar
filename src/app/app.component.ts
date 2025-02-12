import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { timeComponents } from './Interfaces/timeComponent.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Deepika Gunasekar';
  public timeLeft$: Observable<timeComponents>;
  //constructor(){this.timeLeft$=}
  constructor() {
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.calcDateDiff()),
      shareReplay(1)
    );
  }



   calcDateDiff(): timeComponents {
  const currentYear = new Date().getFullYear();
  let dDay = new Date(currentYear, 1, 13).valueOf(); // February 13 of the current year

  // If the current date is past this year's birthday, set the target to next year
  if (Date.now() >= dDay) {
    dDay = new Date(currentYear + 1, 1, 13).valueOf(); // February 13 of the next year
  }


    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = Math.floor(
      timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );

    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
        hoursInADay
    );

    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
        secondsInAMinute
    );

    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }

}
