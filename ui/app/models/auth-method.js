// @ts-check
import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class AuthMethodModel extends Model {
  @attr('string') name;
  @attr('string') type;
  @attr('string') tokenLocality;
  @attr('string') maxTokenTTL;
  @attr('boolean') default;
  @attr('date') createTime;
  @attr('number') createIndex;
  @attr('date') modifyTime;
  @attr('number') modifyIndex;

  getAuthURL(params) {
    return this.store.adapterFor('authMethod').getAuthURL(params);
  }
}
