import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilesServices } from '../services/files.service'

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss']
})
export class ListFileComponent implements OnInit {

  constructor(private router: ActivatedRoute
              private filesServices: FilesServices) { }

  asset_id : int;
  
  ngOnInit() {
  	  this.asset_id = this.router.snapshot.params['asset_id'];

      this.fileServices.getFiles().subscribe((data) => {
        this.files = data
      });
  }

  showFiles() {
  	  if(asset_id != '') {
  	  	return true;
  	  } else {
  	  	return false;
  	  }
  }
}
