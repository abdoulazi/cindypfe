import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss']
})
export class ListFileComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  asset_id : int;

  files : any = [
  	{
  		name: 'fichier1.csv',
  		path: 'file/',
  		size: '30KB',
  		updated_at: '01-12-2020 - 12:00:12'
  	},
  	{
  		name: 'fichier2.csv',
  		path: 'file/',
  		size: '30KB',
  		updated_at: '01-12-2020 - 12:00:12'
  	},
  	{
  		name: 'fichier3.csv',
  		path: 'file/',
  		size: '30KB',
  		updated_at: '01-12-2020 - 12:00:12'
  	},
  	{
  		name: 'fichier4.csv',
  		path: 'file/',
  		size: '30KB',
  		updated_at: '01-12-2020 - 12:00:12'
  	},
  ];

  ngOnInit() {
  	  this.asset_id = this.router.snapshot.params['asset_id'];
  }

  showFiles() {
  	  if(asset_id != '') {
  	  	return true;
  	  } else {
  	  	return false;
  	  }
  }
}
