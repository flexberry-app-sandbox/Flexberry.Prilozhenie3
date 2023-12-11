import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипПриходаEnum from '../enums/i-i-s-prilozhenie-тип-прихода';

export default FlexberryEnum.extend({
  enum: ТипПриходаEnum,
  sourceType: 'IIS.Prilozhenie.ТипПрихода'
});
