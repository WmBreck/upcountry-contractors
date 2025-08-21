import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { RouterOutlet } from '@angular/router';

=======
import { provideRouter, withInMemoryScrolling, RouterOutlet } from '@angular/router';
>>>>>>> bb77dbf (Update services and pages, replace logo, update footer and routes)
import { appRoutes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [
<<<<<<< HEAD
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    )
  ]
});
=======
    provideRouter(appRoutes, withInMemoryScrolling({
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }))
  ]
});
>>>>>>> bb77dbf (Update services and pages, replace logo, update footer and routes)
