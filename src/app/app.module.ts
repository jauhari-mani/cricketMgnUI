import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PlayerTileComponent } from './component/player-tile/player-tile.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HttpClientModule} from '@angular/common/http';
//import { authInterceptorProviders } from './interceptor/token.interceptor';
import { MatchFormComponent } from './views/match-form/match-form.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { SelectPlayersComponent } from './component/select-players/select-players.component';
import { SelectCarsInMatchComponent } from './component/select-cars-in-match/select-cars-in-match.component';
import { MatchPreviewComponent } from './component/match-preview/match-preview.component';
import { MatchesComponent } from './views/matches/matches.component';
import { MatchDetailComponent } from './views/match-detail/match-detail.component';
import { AddPlayerComponent } from './views/add-player/add-player.component';
import { PlayersComponent } from './views/players/players.component';
import { PlayerForSelectionComponent } from './component/player-for-selection/player-for-selection.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TreasurerComponent } from './views/treasurer/treasurer.component';
import { MonthlyChargesComponent } from './views/monthly-charges/monthly-charges.component';
import { SelectActivePlayersForMonthlyChargesComponent } from './component/select-active-players-for-monthly-charges/select-active-players-for-monthly-charges.component';
import { EditPlayersDataComponent } from './views/edit-players-data/edit-players-data.component';
import { UpdatePhotoPopUpComponent } from './component/update-photo-pop-up/update-photo-pop-up.component';
import { PlayerTransactionComponent } from './views/player-transaction/player-transaction.component';
import { TreasurerTransactionComponent } from './views/treasurer-transaction/treasurer-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    PlayerTileComponent,
    HomePageComponent,
    MatchFormComponent,
    PlayerDetailsComponent,
    SelectPlayersComponent,
    SelectCarsInMatchComponent,
    MatchPreviewComponent,
    MatchesComponent,
    MatchDetailComponent,
    AddPlayerComponent,
    PlayersComponent,
    PlayerForSelectionComponent,
    TreasurerComponent,
    MonthlyChargesComponent,
    SelectActivePlayersForMonthlyChargesComponent,
    EditPlayersDataComponent,
    UpdatePhotoPopUpComponent,
    PlayerTransactionComponent,
    TreasurerTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  // providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
