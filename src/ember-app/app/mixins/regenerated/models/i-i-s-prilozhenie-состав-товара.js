import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-prilozhenie-единицы'),
  количество: DS.attr('number'),
  материалы: DS.belongsTo('i-i-s-prilozhenie-материалы', { inverse: null, async: false }),
  товары: DS.belongsTo('i-i-s-prilozhenie-товары', { inverse: 'составТовара', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-товара.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-товара.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-товара.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-товара.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставТовараE', 'i-i-s-prilozhenie-состав-товара', {
    материалы: belongsTo('i-i-s-prilozhenie-материалы', 'Материалы', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' }),
    количество: attr('Количество', { index: 2 }),
    единицы: attr('Единицы', { index: 3 })
  });
};
