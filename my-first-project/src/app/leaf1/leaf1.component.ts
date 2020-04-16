import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaf1',
  templateUrl: './leaf1.component.html',
  styleUrls: ['./leaf1.component.css']
})
export class Leaf1Component implements OnInit {

  serverName = "Gautam";
  clicked = "Din't click";
  clickCount = 0;
  check = true;
  add = false;
  userName = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClicking(giftName : HTMLInputElement){
  	this.clicked = "YOu have just clicked";
  	this.clickCount++;
  	this.userName = giftName.value;
  	if(this.clickCount>20){
  		this.check = false;
  		this.clicked = "Button is disabled";
  		this.add = true;
  	} 
  }

  onChange(event :any){
  	console.log(event);
  }

}
