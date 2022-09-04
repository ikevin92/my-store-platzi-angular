import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'my-store';
  name: string = 'Kevin';
  age: number = 29;
  img: string = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled: boolean = true;

  person = {
    name: 'Kevin',
    age: 29,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  };

  names: string[] = ['kevin', 'maria', 'orlando'];
  newName = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(element.value);
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
