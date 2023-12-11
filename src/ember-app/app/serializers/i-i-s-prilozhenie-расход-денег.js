import { Serializer as РасходДенегSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-расход-денег';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасходДенегSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
