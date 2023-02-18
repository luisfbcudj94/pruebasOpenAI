import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { OpenaiService } from 'src/app/services/openai.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html'
})
export class MainChatComponent {

  title = 'pruebasOpenAi';

  public prompt = '';
  public model = 'text-davinci-003';
  public temperature = 0.2;
  public completion: string = '';
  public max_tokens: number = 2000;

  public apiKey = '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';

  text = '';

  constructor(private openaiService: OpenaiService,
              private http: HttpClient) 
  {
      
  }
  
  ngOnInit() {
   
  }

  public getCompletions() {
    this.openaiService.getCompletions(this.prompt, this.model, this.temperature, this.max_tokens)
      .subscribe((response) => {
        console.log("this.completion: ",response)
        this.completion = response.choices[0].text;
        // this.completion = this.completion.replace(/\n/g, '<br>')
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
