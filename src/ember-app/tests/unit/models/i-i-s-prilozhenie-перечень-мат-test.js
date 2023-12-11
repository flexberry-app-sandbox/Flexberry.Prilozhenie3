import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-перечень-мат', 'Unit | Model | i-i-s-prilozhenie-перечень-мат', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-клиенты',
    'model:i-i-s-prilozhenie-материалы',
    'model:i-i-s-prilozhenie-перечень-мат',
    'model:i-i-s-prilozhenie-перечень-товаров',
    'model:i-i-s-prilozhenie-перечень-услуг',
    'model:i-i-s-prilozhenie-поставщики',
    'model:i-i-s-prilozhenie-приход-денег',
    'model:i-i-s-prilozhenie-расход-денег',
    'model:i-i-s-prilozhenie-регистр-оборот',
    'model:i-i-s-prilozhenie-состав-товара',
    'model:i-i-s-prilozhenie-товары',
    'model:i-i-s-prilozhenie-услуги',
    'model:i-i-s-prilozhenie-финансисты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
