import clear from "clear";
import inquirer from "inquirer";

import Calculator from "./calculator";

export default class Menu {
  private askMenuList(): Promise<{ equation: string }> {
    const questions = [
      {
        name: "equation",
        type: "input",
        message: "Fill in the equation",
      }
    ];
    return inquirer.prompt(questions);
  }

  private askContinue(): Promise<{ equation: string }> {
    const questions = [
      {
        name: "equation",
        type: "input",
        message: "Fill in the equation",
        choice: ["Continue"],
        default: "Continue"
      }
    ];
    return inquirer.prompt(questions);
  }

  async run(): Promise<void> {
    clear();
    const { equation } = await this.askMenuList();
    const calculator = new Calculator(equation);
    const isValid = calculator.isValidCharacter();
    if (isValid) {
      calculator.execute();
      console.log(`result is: ${calculator.getResult()}`);
      console.log("Tree structure:")
      console.log("=============================")
      calculator.printTree();
      console.log("=============================")
    } else {
      console.log("not a valid equation")
    }
    await this.askContinue();
    this.run();
  }
}
