import { Component, OnInit } from '@angular/core';
import { AppHelperFunction } from 'src/app/helpers/app-helper.functions';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public plans = [
    {
      title: 'Group Owner - monthly',
      price: 50,
      priceDisplayValue: '',
      frequency: 'monthly',
      isBestValue: false,
      description: 'You can cancel at any time after year one. No fees paid by family and friends. Subscriptions can be transferred to another group member.',
      planProperties: [
        'Cancel anytime after year one. Family and friends free.',
        'Manage Group: Control privacy, design, and admin rights.',
        'Create unlimited number of albums',
        'Themed Galleries: Customize photo and video albums.',
        'Interactive Content: Participate in comments and discussions'
      ]
    },
    {
      title: 'Group owner: Lifetime activation',
      price: 1500,
      frequency: 'once',
      isBestValue: true,
      description: 'Once-off activation fee. No extra fees for family and friends.',
      planProperties: [
        'Once off payment. No charges to family and friends.',
        'Ad-Free Experience: No ads in your space.',
        'Manage Group: Control privacy, design, and admin rights.',
        'Create unlimited number of albums',
        'Themed Galleries: Customize photo and video albums.',
        'Interactive Content: Participate in comments and discussions'
      ]
    },
    {
      title: 'Group member',
      price: 0,
      frequency: 'once',
      isBestValue: false,
      description: 'Join a group as an active participant, free of charge.</br></br>Free Plan',
      planProperties: [
        'Interactive Content: Participate in comments and discussions',
        'Add Media: Upload your photos and videos.',
        'Privacy Controls- comment and engage in safe space',
        'Ad-Free Experience: No ads in your space',
        "Download Media: Save shared albums' media."
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    this.plans.forEach(x => {
      x.priceDisplayValue = AppHelperFunction.thousandSeporatorWithComma(`${x.price}`);
    });
  }

}
