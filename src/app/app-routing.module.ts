import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsGuard } from './guards/product-details.guard';
import { HomePageComponent } from './views/home-page/home-page.component';
import {LoginComponent} from './views/login/login.component';
import { MatchFormComponent } from './views/match-form/match-form.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { MatchesComponent } from './views/matches/matches.component';
import { MatchDetailComponent } from './views/match-detail/match-detail.component';
import { AddPlayerComponent } from './views/add-player/add-player.component';
import { PlayersComponent } from './views/players/players.component';
import { TreasurerComponent } from './views/treasurer/treasurer.component';
import { MonthlyChargesComponent } from './views/monthly-charges/monthly-charges.component';
import { EditPlayersDataComponent } from './views/edit-players-data/edit-players-data.component';
import { PlayerTransactionComponent } from './views/player-transaction/player-transaction.component';
import { TreasurerTransactionComponent } from './views/treasurer-transaction/treasurer-transaction.component'

const routes: Routes = [
 {
  path: 'login',
  component: LoginComponent
 },
 {
  path: '',
  component: HomePageComponent
 },
 {
  path: 'playerDetail/:code',
  component: PlayerDetailsComponent
 },
 {
  path: 'newMatch',
  component: MatchFormComponent
 },
 {
  path: 'matches',
  component: MatchesComponent
 },
 {
  path: 'matchDetails/:code',
  component: MatchDetailComponent
 },
 {
  path: 'addPlayer',
  component: AddPlayerComponent
 },
 {
  path: 'players',
  component: PlayersComponent
 },
 {
  path: 'treasurer',
  component: TreasurerComponent
 },
 {
  path: 'monthly-charges',
  component: MonthlyChargesComponent
 },
 {
  path : 'edit-player/:code',
  component: EditPlayersDataComponent
 },
 {
  path: 'player-transaction/:code',
  component: PlayerTransactionComponent
 },
 {
  path: 'treasurer-transaction',
  component: TreasurerTransactionComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
