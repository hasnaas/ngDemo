import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastsService } from 'shared/services/toasts.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.scss'],
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastsContainerComponent implements OnInit {

  constructor(public toastsService: ToastsService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit() {
  }

}
