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

  isLoading: boolean = false;



  title = 'pruebasOpenAi';

  prompt = '';
  model = 'text-davinci-003';
  // model = 'code-davinci-002'
  temperature = 0.2;
  completion: string = '';
  max_tokens: number = 3900;

  

  apiKey = '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';

  text = '';

  constructor(private openaiService: OpenaiService,
              private http: HttpClient) 
  {
      
  }
  
  ngOnInit() {
   
  }

  public getCompletions() {
    this.isLoading = true;
    this.openaiService.getCompletions(this.prompt, this.model, this.temperature, this.max_tokens)
      .subscribe((response) => {
        console.log("this.completion: ",response)
        this.completion = response.choices[0].text;

        this.isLoading = false;
        // this.completion = this.completion.replace(/\n/g, '<br>')
        console.log("this.completion: ",this.completion)
      }, (error) => {
        console.log(error);
        this.isLoading = false;
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
    this.isLoading = true;

    console.log(num_images)

  
    this.openaiService.getImages(prompt,num_images).subscribe(
      (response) => {
        console.log(response)
        this.imagenesArray = response.data.map((item: any) => item.url);
        console.log(this.imagenesArray)
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  onCheckboxChange(event: any) {
    this.imagenesArray = [];
    this.isCheckedImage = !this.isCheckedImage;
    console.log('Checkbox changed', event.target.checked);
  }
  

  
}
