//
// This Class is for a basic Calculator
//
// It encapsulates (consists of) all off the data that it needs to work and stores
// them in 'properties'. Things like current result for the last calculation.
//
// And provides methods (functions in classes) to perform some basic calculations that
// Human might want to perform with a standard calculator.
//

// START CLASS DEFINITION
class Calculator_class {
    constructor() {
        this.clear_calculation_result(); // Start with empty total
    }

    // This method is used to update the total for a running calculation
    update_current_calculation_result(calc_result) {
        this.current_calculation_result += calc_result;
        return this.current_calculation_result; // Return the changed result value
    }

    // This Getter method simply gets the current result and returns it to the
    // place where the method was called from in the code
    get_current_calculation_result() {
        return this.current_calculation_result;
    }

    /********************************************************************************/
    /*
        CALCULATOR OPERATION METHODS
     */
    /********************************************************************************/

    // This method is used to reset current calc total to get
    // ready for next calculation
    clear_calculation_result() {
        this.current_calculation_result = 0; // reset total
        return this.current_calculation_result; // Return the changed result value
    }

    // Adds the 2 numbers passed in together and returns the result
    // It also updates the running total property
    add(first_number, second_number) {
        this.update_current_calculation_result(first_number + second_number);
        return this.current_calculation_result;
    };

    // Subtracts the 2 numbers passed in and returns the result
    // It also updates the running total property
    subtract(first_number, second_number) {
        this.update_current_calculation_result(first_number - second_number);
        return this.current_calculation_result;
    };

    // Multiplies the 2 numbers passed in and returns the result
    // It also updates the running total property
    // TODO: Student implement the method for multiplication
    multiply(first_number, second_number) {
        this.update_current_calculation_result(first_number * second_number);
        return this.current_calculation_result;
    }

    // Divides the 2 numbers passed in and returns the result
    // It also updates the running total property
    // TODO: Student implement the method for division
    division(first_number, second_number) {
        this.update_current_calculation_result(first_number / second_number);
        return this.current_calculation_result;

    }
}
// END CLASS DEFINITION

    /********************************************************************************/
//
// POE Main execution path (execution starts here)
//
    /********************************************************************************/




    function main() {
        let calculator_instance = new Calculator_class(); // Get a new calculator instance
        let current_operation = "ADD";


        // TODO: Student implement functionality to keep asking the User for next math operation
        //  until they enter 'x' to exit
       while(current_operation.toUpperCase() !== "x") {
           // Start by just displaying the current total
           console.log(`Total : ${calculator_instance.get_current_calculation_result()}`);

           // Get the operation to perform from the User
           current_operation = prompt("Enter the math operation to be performed (ADD)")
               .toUpperCase();
         if(current_operation === "X"){
             continue;
         }
           // Get the 2 numbers for the operation

           let first_int = parseInt(prompt(`Enter the 1st number for ${current_operation}`));
           let second_int = parseInt(prompt(`Enter the 2nd number for ${current_operation}`));

           // Perform the operation and display the results
           // TODO: Student to implement support for CLR (clear), SUB (subtract), MULT (multiply), and DIV (division Calculator methods
           switch (current_operation) {
               case "ADD":
                   alert(`New sum Total : ${calculator_instance.add(first_int, second_int)}`);
                   break;
               case "SUBTRACT":
                   alert(`New sum Total : ${calculator_instance.subtract(first_int, second_int)}`);
                   break;
               case "MULTIPLY":
                   alert(`New sum Total : ${calculator_instance.multiply(first_int, second_int)}`);
                   break;
               case "DIVISION":
                   alert(`New sum Total : ${calculator_instance.division(first_int, second_int)}`);
                   break;
           }
       }
        // Print the final calculation total in console for debugging purposes
        console.log(`Final Total : ${calculator_instance.get_current_calculation_result()}`);
    }

//Call Main function to start things up!

  main();
