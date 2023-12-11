import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банк: DS.attr('i-i-s-prilozhenie-банк'),
  бИК: DS.attr('number'),
  дата: DS.attr('date'),
  иНН: DS.attr('number'),
  сумма: DS.attr('decimal'),
  счет: DS.attr('number'),
  поставщики: DS.belongsTo('i-i-s-prilozhenie-поставщики', { inverse: null, async: false }),
  финансисты: DS.belongsTo('i-i-s-prilozhenie-финансисты', { inverse: null, async: false }),
  переченьМат: DS.hasMany('i-i-s-prilozhenie-перечень-мат', { inverse: 'расходДенег', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банк: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.банк.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  бИК: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.бИК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  счет: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.счет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поставщики: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.поставщики.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  финансисты: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.финансисты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьМат: {
    descriptionKey: 'models.i-i-s-prilozhenie-расход-денег.validations.переченьМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасходДенегE', 'i-i-s-prilozhenie-расход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    банк: attr('Банк', { index: 2 }),
    счет: attr('Счет', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    бИК: attr('БИК', { index: 5 }),
    поставщики: belongsTo('i-i-s-prilozhenie-поставщики', 'Поставщик', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    финансисты: belongsTo('i-i-s-prilozhenie-финансисты', 'Финансисты', {
      фИО: attr('Финансисты ФИО', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фИО' }),
    сумма: attr('Сумма', { index: 10 }),
    переченьМат: hasMany('i-i-s-prilozhenie-перечень-мат', 'Перечень мат', {
      материалы: belongsTo('i-i-s-prilozhenie-материалы', 'Материалы', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('РасходДенегL', 'i-i-s-prilozhenie-расход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    банк: attr('Банк', { index: 2 }),
    счет: attr('Счет', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    бИК: attr('БИК', { index: 5 }),
    сумма: attr('Сумма', { index: 6 }),
    поставщики: belongsTo('i-i-s-prilozhenie-поставщики', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    финансисты: belongsTo('i-i-s-prilozhenie-финансисты', 'ФИО', {
      фИО: attr('ФИО', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
