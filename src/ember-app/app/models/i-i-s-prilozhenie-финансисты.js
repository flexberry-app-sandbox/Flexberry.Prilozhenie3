import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФинансистыMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-финансисты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФинансистыMixin, Validations, {
});

defineProjections(Model);

export default Model;
