import { ParameterTypeEnum } from "./filter-parameter-type.enum";

export interface IPlanetFilterModel {
  name?: string | null,
  parameterType?: ParameterTypeEnum | null,
  from?: number | null,
  to?: number | null
}