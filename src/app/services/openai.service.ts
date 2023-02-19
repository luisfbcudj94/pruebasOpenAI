import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiUrl = 'https://api.openai.com/v1/completions';
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  public getCompletions(prompt: string, model: string, temperature: number,max_tokens: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });


    const body = {
      'prompt': prompt,
      'model': model,
      'temperature': temperature,
      'max_tokens': max_tokens
    };

    return this.http.post<any>(this.apiUrl, body, { headers: headers});
    // return this.http.post<any>(this.apiUrl, body, { headers: headers }).pipe(
    //   timeout(10000)
    // );
  }

  public getImages(prompt: string, num_images: number): Observable<any> {
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      'model': 'image-alpha-001',
      'prompt': prompt,
      'num_images': num_images,
      'size': '256x256',
    };

    const url = 'https://api.openai.com/v1/images/generations';
    return this.http.post<any>(url, body, { headers: headers });
  }
  
}
