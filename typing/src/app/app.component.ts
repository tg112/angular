import { Component } from '@angular/core';
import { lorem } from "faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomSentence = lorem.sentence();
  inputedValue = "";

  compareValues() {
    if (this.randomSentence === this.inputedValue) {
      return true;
    }
    return false;
  }

  compareEachLetter(original: string, input: string) {
    if(!input) {
      return 'pending';
    }

    return original === input ? "correct" : "incorrect"
  }
}
