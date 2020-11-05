import { Component, OnInit } from '@angular/core';
import { WidgetServices } from '../services/widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor(private widgetService: WidgetServices) { }

  private $widgets
  ngOnInit() {
  	this.widgetService.getWidgets().subscribe((data) => {
  		this.$widgets = data
  	});
  }

}
