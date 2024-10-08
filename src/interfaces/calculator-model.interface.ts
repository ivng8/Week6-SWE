
import { NumericKeys, OperatorKeys, ActionKeys } from '../enums';
import { ICalculatorObserver } from './calculator-observer.interface';

export interface ICalculatorModel {
  attach(observer: ICalculatorObserver): void;

  detach(observer: ICalculatorObserver): void;
  // numeric key pressed <0, 1, 2, 3, 4, 5, 6, 7, 8, 9>
  pressNumericKey(key: NumericKeys): void;

  // operator key pressed <+, -, *, />
  pressOperatorKey(key: OperatorKeys): void;

  // action key pressed <C, =, .>
  pressActionKey(key: ActionKeys): void;

  // returns the contents of the calculator's display
  display(): string;

}
