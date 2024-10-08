import { ICalculatorObserver } from "../interfaces/calculator-observer.interface";

export class CalculatorObserver implements ICalculatorObserver {
    
    public update(message: String): void {
        console.log(message);
    }
}