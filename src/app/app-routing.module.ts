import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ActionListComponent } from './components/action-list/action-list.component';


// Define the routes for the application
const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route to Landing Page
  { path: 'actions', component: ActionListComponent }// Route to Action List Component
  
];

@NgModule({
  // Import the RouterModule with the defined routes
  imports: [RouterModule.forRoot(routes)],
  // Export the RouterModule for use in the app module
  exports: [RouterModule],
})
export class AppRoutingModule {}

