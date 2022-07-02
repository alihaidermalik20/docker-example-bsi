// #todo

'use strict';

/* 0. Starter Code


*/

// =============== JSDoc description of the challenge ===============
/** 
* The government is issuing corona money to healthcareworkers
* The actual premium has not been decided yet
* For doctors, the rules are as following:
*  Less than 10-year experience: x1,5
*  More than 10 or equal: x2
*  More than 20 or equal: x3
*  Never more than: 1000 (throw an error)
* For nurses:
*  Less than 10-year experience: x1,2
*  More than 10 or equal: x1,3
*  More than 15 or equal: x1,5
*  More than 20 or equal: x1,7
*  Never more than: 500 (throw an error)
* Any other profession should not get a premium (but no error should be thrown)
*
* {
    profession: "nurse" | "doctor" | "therapist" | "psychologist" ,
    experience: 11
}
*/


/**
 * Calculate the premium for healthcareworkers
 *
 * @param {object} - The healthcareworker object that is passed to the function
 * @param {number} - The base premium
 * @return {number} The premium rounded down to an integer~
 */

// =============== your solutions will go here ===============

function calculatePremium(healthcareworker, base){
    var premium = 0;
    switch(healthcareworker.profession){
        case "nurse":
            if(healthcareworker.experience <= 10){
                premium = Math.floor(base * 1.2);
            }
            if(healthcareworker.experience > 10 && healthcareworker.experience < 20){
                premium = Math.floor(base * 1.3);
            }
            if(healthcareworker.experience >= 15 && healthcareworker.experience < 20){
                premium = Math.floor(base * 1.5);
            }
            if(healthcareworker.experience > 20){
                premium = Math.floor(base * 1.7);
            }
            break;
        case "doctor":
            if(healthcareworker.experience <= 10){
                premium = Math.floor(base * 1.5);
            }
            if(healthcareworker.experience <= 10 && healthcareworker.experience < 15){
                premium = Math.floor(base * 2);
            }
            if(healthcareworker.experience > 20){
                premium = Math.floor(base * 3);
            }
            break;
    }
    if(healthcareworker.profession === 'doctor' && premium > 1000){
        throw new Error("premium is higher than 1000 and healthcareworker is a doctor")
    }
    if(healthcareworker.profession === 'nurse' && premium > 500){
        throw new Error("premium is higher than 500 and healthcareworker is a nurse")
    }

    return premium;
}

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [secretSolution]) {
  // =============== test cases for this challenge ===============

  describe(solution.name + ': _', () => {
    describe('When the premium is 200', () => {
        it('Should multiply by x1,2 when she has less than 10 year experience',
            () => {
                expect((calculatePremium({prefession: 'nurse', experience: 8}, 200))).toBe(240)
        });
    })
  });
}

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
