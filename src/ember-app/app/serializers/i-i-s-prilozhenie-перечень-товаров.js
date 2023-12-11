import { Serializer as ПереченьТоваровSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-перечень-товаров';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПереченьТоваровSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
