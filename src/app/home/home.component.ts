import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private newLabel? = 'New label';
  public contactForm : any|FormGroup

  constructor(private toastr:ToastrService ,
              private formbuilder:FormBuilder                          
    ) {
    Chart.register(Annotation) 
    this.formInitialization()
  }

  ngOnInit(): void {
  }

  public runToaster(){
    this.toastr.success(`Very Weldone It's Working 😏`);
 
  }
  private formInitialization(){
    this.contactForm = this.formbuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(11), Validators.maxLength(11)]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)])
    })
  }
  public submitContactForm(){
    let result = this.contactForm.value
    console.log(result);
    
  }

  





//**----------------------------------->> Line-Chart <<-------------------------------------------**//
public lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      label: 'Series A',
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    },
    {
      data: [ 28, 48, 40, 19, 86, 27, 90 ],
      label: 'Series B',
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      fill: 'origin',
    },
    {
      data: [ 180, 480, 770, 90, 1000, 270, 400 ],
      label: 'Series C',
      yAxisID: 'y1',
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    }
  ],
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
};

public lineChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.5
    }
  },
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    y:
      {
        position: 'left',
      },
    y1: {
      position: 'right',
      grid: {
        color: 'rgba(255,0,0,0.3)',
      },
      ticks: {
        color: 'red'
      }
    }
  },

  plugins: {
    legend: { display: true },
    annotation: {
      annotations: [
        {
          type: 'line',
          scaleID: 'x',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            display: true,
            position: 'center',
            color: 'orange',
            content: 'LineAnno',
            font: {
              weight: 'bold'
            }
          }
        },
      ],
    }
  }
};

public lineChartType: ChartType = 'line';

@ViewChild(BaseChartDirective) chart?: BaseChartDirective;

private static generateNumber(i: number): number {
  return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
}

public randomize(): void {
  for (let i = 0; i < this.lineChartData.datasets.length; i++) {
    for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
      this.lineChartData.datasets[i].data[j] = HomeComponent.generateNumber(i);
    }
  }
  this.chart?.update();
}

// events
public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  console.log(event, active);
}

public hideOne(): void {
  const isHidden = this.chart?.isDatasetHidden(1);
  this.chart?.hideDataset(1, !isHidden);
}

public pushOne(): void {
  this.lineChartData.datasets.forEach((x, i) => {
    const num = HomeComponent.generateNumber(i);
    x.data.push(num);
  });
  this.lineChartData?.labels?.push(`Label ${ this.lineChartData.labels.length }`);

  this.chart?.update();
}

public changeColor(): void {
  this.lineChartData.datasets[2].borderColor = 'green';
  this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

  this.chart?.update();
}

public changeLabel(): void {
  const tmp = this.newLabel;
  this.newLabel = this.lineChartData.datasets[2].label;
  this.lineChartData.datasets[2].label = tmp;

  this.chart?.update();
}
//**----------------------------------->> Line-Chart <<-------------------------------------------**//
}
  
