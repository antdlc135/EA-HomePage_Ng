import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderNavAsideComponent } from './header-nav-aside/header-nav-aside.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { PreFooterComponent } from './home-page/pre-footer/pre-footer.component';
import { SelectLanguageComponent } from './footer/select-language/select-language.component';
import { SelectLangMobileComponent } from './footer/select-lang-mobile/select-lang-mobile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavAsideComponent,
    HomePageComponent,
    FooterComponent,
    PreFooterComponent,
    SelectLanguageComponent,
    SelectLangMobileComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
