import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OpenaiService } from './services/openai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebasOpenAi';

  public prompt = '';
  public model = 'text-davinci-003';
  public temperature = 0.2;
  public completion: string = '';
  public max_tokens: number = 2000;

  constructor(private openaiService: OpenaiService,
              private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  public getCompletions() {


    this.openaiService.getCompletions(this.prompt, this.model, this.temperature, this.max_tokens)
      .subscribe((response) => {
        console.log("this.completion: ",response)
        this.completion = response.choices[0].text;
        console.log("this.completion: ",this.completion)
      }, (error) => {
        console.log(error);
      });
  }

  onSubmit(message: string){
    console.log(message);
    this.prompt = message;
    this.getCompletions();
  }
  

}
