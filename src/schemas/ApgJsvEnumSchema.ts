/** -----------------------------------------------------------------------
 * @module [JSV]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.4.0 [APG 2018/10/20]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/19] Porting to Deno
 * @version 0.9.0 [APG 2022/08/16] New JVal and Json schema files removal
 * @version 0.9.2 [APG 2022/11/13] Github Beta
 * -----------------------------------------------------------------------
 */
import { Uts } from '../../deps.ts';
import { IApgJsvSchema } from '../interfaces/IApgJsvSchema.ts';

const rawSchema: IApgJsvSchema = {
  $schema: "http://json-schema.org/schema#",
  $id: "IApgJsvEnum#",
  type: "object",
  definitions: {
    enumTypeDef: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: [
            "string",
            "integer"
          ]
        },
        enum: {
          type: "array"
        }
      },
      required: [
        "type",
        "enum"
      ]
    },
    definitionsDef: {
      type: "object",
      properties: {
        enumType: {
          $ref: "#/definitions/enumTypeDef"
        }
      },
      required: [
        "enumType"
      ]
    }
  },
  properties: {
    $schema: {
      type: "string"
    },
    $id: {
      type: "string"
    },
    definitions: {
      $ref: "#/definitions/definitionsDef"
    }
  },
  additionalProperties: false,
  allErrors: true,
  required: [
    "$schema",
    "$id",
    "definitions",
  ],
};

export const ApgJsv_ENUM_SCHEMA = Uts.ApgUtsObj.DeepFreeze(rawSchema) as IApgJsvSchema;





