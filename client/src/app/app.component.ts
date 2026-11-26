import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';

interface ApiResponse {
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <p class="eyebrow">Angular + Node.js</p>
      <h1>Your starter project is ready.</h1>
      <p class="description">Message from the API:</p>
      <p class="message" aria-live="polite">{{ message() }}</p>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly http = inject(HttpClient);
  readonly message = signal('Connecting...');

  ngOnInit(): void {
    this.http.get<ApiResponse>('/api/hello').subscribe({
      next: (response) => this.message.set(response.message),
      error: (error: unknown) => {
        console.error('Could not reach the API:', error);
        this.message.set('Could not connect to the API. Is the server running?');
      },
    });
  }
}
