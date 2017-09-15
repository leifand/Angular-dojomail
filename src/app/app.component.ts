import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';

  users = [{ address: "BILL.GATES@MICROSOFT.COM", importance: true, subject: "Windows 10 sucks!!!", content: "We need to fire some devs."},
  { address: "caleb@deker.com", importance: false, subject: "Get off my lawn!", content: "These kids need to get the hell off my lawn!!!!1"},
  { address: "trump@us.gov", importance: false, subject: "it's gonna be huge", content: "It's gonna be the biggest best ever!!!!"}];
}
