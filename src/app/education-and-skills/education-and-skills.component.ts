import { Component, OnInit } from '@angular/core';
import { ColorService } from '../utils/color.service';
import techIconsData from '../utils/tech-icons.json';

@Component({
  selector: 'app-education-and-skills',
  templateUrl: './education-and-skills.component.html',
  styleUrls: ['./education-and-skills.component.scss']
})
export class EducationAndSkillsComponent implements OnInit {
  lifeEvents: any = [
    {
      date: 'November 2021 - February 2022',
      title: '"Junior Web Developer" Internship',
      subtitle: 'INNOVATOR, Varna',
      certificate: {
        src: '../../assets/images/certificate.png',
        show: false
      } 
    },
    {
      date: 'February 2018',
      title: "Bachelor's Degree - Finance",
      subtitle: 'University of Economics, Varna'
    },
    {
      date: 'May 2013',
      title: 'High School Diploma',
      subtitle: 'High School of Mathematics Dr. Petar Beron, Varna'
    },
    {
      date: 'October 1994',
      title: 'Hello World'
    },
  ];

  techIconGroups: any;

  viewInit: boolean = false;

  constructor(public colorService: ColorService) { }


  ngOnInit(): void {
    setTimeout(() => {this.viewInit = true},0);
    this.techIconGroups = techIconsData
  }

}
