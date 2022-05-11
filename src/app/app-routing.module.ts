import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './create-game/create-game.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "login-form", component: LoginComponent},
  {path: "create-game", component: CreateGameComponent},
  {path: "**", component: GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
