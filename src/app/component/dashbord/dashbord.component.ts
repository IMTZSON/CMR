import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopCardsComponent } from './top-cards/top-cards.component';
import { ChartComponent } from './chart/chart.component';
@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [NavbarComponent, TopCardsComponent, ChartComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {
  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Project Cost Breakdown"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Labour" },
		  { y: 10, name: "Legal" },
		  { y: 20, name: "Production" },
		  { y: 15, name: "License" },
		  { y: 23, name: "Facilities" },
		  { y: 17, name: "Taxes" },
		  { y: 12, name: "Insurance" }
		]
	  }]
	}
}
