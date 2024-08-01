import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AttempttestComponent } from './student/attempttest/attempttest.component';
import { ShowtestComponent } from './student/showtest/showtest.component';
import { QuestionmgmtComponent } from './trainer/questionmgmt/questionmgmt.component';
import { TestmgmtComponent } from './trainer/testmgmt/testmgmt.component';
import { AnswerverificationComponent } from './trainer/answerverification/answerverification.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TrainerComponent,
    AttempttestComponent,
    ShowtestComponent,
    QuestionmgmtComponent,
    TestmgmtComponent,
    AnswerverificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
