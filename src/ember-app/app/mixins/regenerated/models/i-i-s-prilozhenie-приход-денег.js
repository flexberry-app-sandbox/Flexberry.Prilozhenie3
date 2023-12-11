import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата: DS.attr('date'),
  сумма: DS.attr('decimal'),
  типПрихода: DS.attr('i-i-s-prilozhenie-тип-прихода'),
  клиенты: DS.belongsTo('i-i-s-prilozhenie-клиенты', { inverse: null, async: false }),
  финансисты: DS.belongsTo('i-i-s-prilozhenie-финансисты', { inverse: null, async: false }),
  переченьТоваров: DS.hasMany('i-i-s-prilozhenie-перечень-товаров', { inverse: 'приходДенег', async: false }),
  переченьУслуг: DS.hasMany('i-i-s-prilozhenie-перечень-услуг', { inverse: 'приходДенег', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-prilozhenie-приход-денег.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-prilozhenie-приход-денег.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-prilozhenie-приход-денег.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типПрихода: {
    descriptionKey: 'models.i-i-s-prilozhenie-приход-денег.validations.типПрихода.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-prilozhenie-приход-денег.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  финансисты: {
    descriptionKey: 'models.i-i-s-prilozhenie-приход-денег.validations.финансисты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьТоваров: {
    descriptionKey: 'models.i-i-s-prilozhenie-приход-денег.validations.переченьТоваров.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  переченьУслуг: {
    descriptionKey: 'models.i-i-s-prilozhenie-приход-денег.validations.переченьУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриходДенегE', 'i-i-s-prilozhenie-приход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типПрихода: attr('Тип прихода', { index: 2 }),
    клиенты: belongsTo('i-i-s-prilozhenie-клиенты', 'Клиенты', {
      фИО: attr('Клиент ФИО ', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    финансисты: belongsTo('i-i-s-prilozhenie-финансисты', 'Финансисты', {
      фИО: attr('Финансист ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    сумма: attr('Сумма', { index: 7 }),
    переченьТоваров: hasMany('i-i-s-prilozhenie-перечень-товаров', 'Перечень товаров', {
      товары: belongsTo('i-i-s-prilozhenie-товары', 'Товары', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    }),
    переченьУслуг: hasMany('i-i-s-prilozhenie-перечень-услуг', 'Перечень услуг', {
      услуги: belongsTo('i-i-s-prilozhenie-услуги', 'Услуги', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ПриходДенегL', 'i-i-s-prilozhenie-приход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типПрихода: attr('Тип прихода', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    клиенты: belongsTo('i-i-s-prilozhenie-клиенты', 'Клиент ФИО', {
      фИО: attr('Клиент ФИО', { index: 4 })
    }, { index: -1, hidden: true }),
    финансисты: belongsTo('i-i-s-prilozhenie-финансисты', 'Финансист ФИО', {
      фИО: attr('Финансист ФИО', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
