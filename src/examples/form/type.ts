import { OptionSet } from "../../common/form/type";

export interface Data {
  married: boolean;
  firstName: string;
  age: number;
  description?: string;
  permit: number;
  permit2: string;
  permit3: OptionSet<number>;
  birthdate: Date;
}
