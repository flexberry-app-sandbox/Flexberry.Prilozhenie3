import {
  defineNamespace,
  defineProjections,
  Model as РегистрОборотMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-регистр-оборот';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрОборотMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
