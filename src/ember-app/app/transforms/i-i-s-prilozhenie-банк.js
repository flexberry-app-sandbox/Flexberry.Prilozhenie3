import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import БанкEnum from '../enums/i-i-s-prilozhenie-банк';

export default FlexberryEnum.extend({
  enum: БанкEnum,
  sourceType: 'IIS.Prilozhenie.Банк'
});
