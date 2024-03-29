import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects/projects.component';
import { UtilsModule } from '../utils/utils.module';
import { ProjectsSliderComponent } from './projects-slider/projects-slider.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsSliderComponent,
    ProjectPreviewComponent,
    ProjectDescriptionComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    HttpClientModule
  ], 
  exports: [ ProjectsComponent ]
})
export class ProjectsModule { }
