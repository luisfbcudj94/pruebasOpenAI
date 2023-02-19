import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { OpenaiService } from 'src/app/services/openai.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html'
})
export class MainChatComponent {

  imagenesArray: string[] = [];
  isCheckedImage: boolean = false;
  valueSelect: string = '';



  title = 'pruebasOpenAi';

  prompt = '';
  // model = 'text-davinci-003';
  model = 'code-davinci-002'
  temperature = 0.2;
  completion: string = '';
  max_tokens: number = 2000;

  

  apiKey = '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';

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

    if(this.isCheckedImage){
      this.getImages(this.prompt,parseInt(this.valueSelect));
    }
  

  }

  public getImages(prompt: string, num_images: number) {

    console.log(num_images)

  
    this.openaiService.getImages(prompt,num_images).subscribe(
      (response) => {
        console.log(response)
        this.imagenesArray = response.data.map((item: any) => item.url);
        console.log(this.imagenesArray)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCheckboxChange(event: any) {
    this.imagenesArray = [];
    this.isCheckedImage = !this.isCheckedImage;
    console.log('Checkbox changed', event.target.checked);
  }
  

  
}
