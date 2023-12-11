import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-состав-товара', 'Unit | Serializer | i-i-s-prilozhenie-состав-товара', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-состав-товара',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-prilozhenie-банк',
    'transform:i-i-s-prilozhenie-единицы',
    'transform:i-i-s-prilozhenie-тип-прихода',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
