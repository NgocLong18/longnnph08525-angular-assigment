import { Component, OnInit } from "@angular/core";
import { JumbotronService } from "../../services/jumbotron.service";
import { Jumbotron } from "../../model/Jumbotron";


@Component({
  selector: "app-jumbotron-manager",
  templateUrl: "./jumbotron-manager.component.html",
  styleUrls: ["./jumbotron-manager.component.css"]
})
export class JumbotronManagerComponent implements OnInit {
  selected: Jumbotron;
  jumbotron: Jumbotron[];
  constructor(
    private jumbotronService: JumbotronService
    ) {}

  ngOnInit(): void {
    this.getJumbotron();
  }

  getJumbotron() {
    this.jumbotronService.getJumbotron().subscribe(data => {
      console.log(data);
      this.jumbotron = data;
     });
  }
}
