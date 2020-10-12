import { expectType } from "tsd";
import isProcess from ".";

let pro = process;

if (isProcess(pro)) {
  expectType<NodeJS.Process>(pro);
}
