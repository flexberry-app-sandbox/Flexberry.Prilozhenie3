import { Serializer as ПереченьМатSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-перечень-мат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПереченьМатSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
