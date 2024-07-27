import { Component } from '@angular/core';

import { SvrServiceService } from './svr-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SVR_App';

  feature :number |  null = null;
  prediction? :number |  null = null;

  constructor(private predictionService: SvrServiceService) {}

//   onSubmit(){
//     this.predictionService.getPrediction(this.feature).subscribe({
//      next : (response)=>{
// this.prediction = response.data;
//      },
//     error :(error)=>{
//       console.error('There was an error ', error)
//     }

      
//     })
//   }

onSubmit(event:Event) {
  if (this.feature !== null) {
  
  this.predictionService.getPrediction(this.feature).subscribe({
    next: (response) => {
      this.prediction = response.prediction; 
    },
    error: (error) => {
      console.error('There was an error!', error);
    }
  });
}else {
  console.error('Feature value is null');
}
}
}


