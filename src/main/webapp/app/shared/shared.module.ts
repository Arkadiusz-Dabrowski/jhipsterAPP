import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterAppSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterAppSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [JhipsterAppSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterAppSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterAppSharedModule
    };
  }
}
