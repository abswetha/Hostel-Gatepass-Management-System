import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AmsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AmsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AmsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AmsSharedModule {
  static forRoot() {
    return {
      ngModule: AmsSharedModule
    };
  }
}
