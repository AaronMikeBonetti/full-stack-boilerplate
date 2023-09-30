import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Omni-Sound';
  one = [1,2,3,0,0,0]
  two = [1,2,3]
  n = 3 
  m = 3 + this.n

  constructor(){}

  merge(one:Array<number>, m:number, two:Array<number>, n:number): void{
    for(let i = m, j = 0; j < n ; i++, j++){
      one[i] = two[j]
    }
    // let j = 0
    // one.sort((a,b) => a - b )
    // for(let i = 0; i < one.length + 1; i++){
    //   one[i] === 0 ? j++ : null
    // }
    // this.one = one.slice(j, one.length + 2) 
    one.sort((a,b) => b - a )
    for(let i = 0; i < one.length + 1; i++){
      one[i] === 0 ? this.one = one.splice(0,i): null
    }
  }
  ngOnInit(){
    this.merge(this.one, this.m, this.two, this.n)
    console.log("final result", this.one)
  }
  
}

