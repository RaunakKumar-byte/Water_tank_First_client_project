import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { register as registerSwiperElements } from 'swiper/element/bundle'

registerSwiperElements();
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
