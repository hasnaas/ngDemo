import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { ToastsService } from 'shared/services/toasts.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'shared/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  currentProduct: Product = {
    "title": "",
    "price": 0,
    "category": "",
    "imageUrl": "",
    "key": ""
  };
  currentKey: string = "";
  categories = [];
  DataS: Subscription;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private toastService: ToastsService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.DataS = this.productService.categories$.subscribe(cs => this.categories = cs);
    this.currentKey = this.route.snapshot.paramMap.get('key') || '';
    if (this.currentKey)
      this.productService.fetchProduct(this.currentKey).subscribe(p => this.currentProduct = p);
  }

  ngOnDestroy() {
    this.DataS.unsubscribe();
  }


  async update(errorTemplate) {
    if (this.currentKey) {
      try {
        await this.productService.updateProduct(this.currentKey, this.currentProduct);
        this.toastService.show("Product successfully updated", { classname: 'bg-success text-light' });
        let _this = this;
        setTimeout(function () {
          _this.router.navigate(["/admin/products/"]);
        }, 2500);
      }
      catch (error) {
        this.toastService.show(errorTemplate, { classname: 'bg-danger text-light', delay: 3000 });
        console.log(error);
      }
    }
    else {
      try {
        let toAdd = {};
        Object.assign(toAdd, this.currentProduct);
        delete toAdd["key"];
        await this.productService.addProduct(toAdd);
        this.toastService.show("Product successfully added", { classname: 'bg-success text-light' });
        let _this = this;
        setTimeout(function () {
          _this.router.navigate(["/admin/products/"]);
        }, 2500);
      }
      catch (error) {
        this.toastService.show(errorTemplate, { classname: 'bg-danger text-light', delay: 3000 });
        console.log(error);
      }
    }
  }

  delete(errorTemplate) {
    if (this.currentKey) {

      let modalRef = this.modalService.open(NgbdModalConfirm);
      modalRef.result.then((response) => {
        this.productService.deleteProduct(this.currentKey).then(() => {
          this.router.navigate(["/admin/products/"]);
        }).catch(error => {
          this.toastService.show(errorTemplate, { classname: 'bg-danger text-light', delay: 3000 });
          //console.log(error);
        })
      }
      ).catch((rejection) => { });

    }
    else {
      this.currentProduct = {
        "title": "",
        "price": 0,
        "category": "",
        "imageUrl": "",
        "key": ""
      };
    }
  }
}

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Product deletion</h4>
    <!--button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button-->
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">this product</span>?</strong></p>
    <p>
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close('Ok')">Yes</button>
  </div>
  `
})
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}
