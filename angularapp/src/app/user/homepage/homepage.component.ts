import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/admin/AddTheme/theme.service';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/Services/cartservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Themes: any[] = [];
  searchBox: string;

  constructor(private themeService: ThemeService, private router: Router,private cartservice: CartserviceService) {}

  ngOnInit(): void {
    this.fetchThemes();
    this.cartservice.setCartData('event', []);
    this.cartservice.setCartData('foodmenu', []);
    this.cartservice.setCartData('theme', []);
    this.cartservice.setCartData('addon', []);
  }

  fetchThemes() {
    this.themeService.GetTheme((res) => {
      console.log("HomePage GetTheme res =", res);
      this.Themes = res;
    });
  }

  searchThemes() {
    if (this.searchBox) {
      const filteredThemes = this.Themes.filter(theme =>
        theme.themeName.toLowerCase().startsWith(this.searchBox.toLowerCase())
      );
      this.Themes = filteredThemes.length ? filteredThemes : [];
    } else {
      this.fetchThemes();
    }
  }

  selecttheme(id: number) {
    this.router.navigate(['user/selecttheme/{' + id + '}']);
    this.themeService.singleThemeId = id;
  }

}
