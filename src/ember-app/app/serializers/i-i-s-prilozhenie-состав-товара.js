import { Serializer as СоставТовараSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-состав-товара';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставТовараSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
