import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pearl',
  templateUrl: './pearl.component.html',
  styleUrls: ['./pearl.component.css']
})
export class PearlComponent implements OnInit {
  // website title
  title = 'pearl documentaries';
   /**
    * For the slides at the homepage
    */
  images: any[] = [
    { source: '../assets/images/mabira.jpg', title: 'Mabira', description: 'It is the largest forest in Uganda'},
    { source: '../assets/images/muhabura.jfif', title: 'Mount Muhabura', description: 'It has a crater lake at the top'},
    { source: '../assets/images/victoria.jfif', title: 'Lake Victoria', description: 'It is shared by 3 east African countries'},
  ];
  /**
   * Physical features array
   */
  features: any[] = [
    { title: 'Lakes', description: 'Uganda has beautiful lakes' },
    { title: 'Rivers', description: 'There are amzing Rivers there in Uganda' },
    { title: 'Mountains', description: 'Mountains with crater lakes are there too' }
  ];
  /**
   * cultures and crafts array
   */
  cultures: any[] = [
    { title: 'Bafumbira', source: '../assets/images/bafumbira.jpg', desc: 'These are people who speak Rufumbira. Their language is similar to Runyarwanda but the difference is in accent.'},
    { title: 'Baganda', source: '../assets/images/baganda.jpg', desc: 'These are people who speak Ruganda. Their king is titled Kabaka and their kingdom is among the strongest kings.'},
    { title: 'Banyankole', source: '../assets/images/banyankle.png', desc: 'These are people who speak Runyankole. Their language is similar to Rukiiga but the difference is in accent.'},
    { title: 'Banyoro', source: '../assets/images/banyoro.png', desc: 'These are people who speak Runyoro. The have a king and other cultures believe that they have spirits'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
