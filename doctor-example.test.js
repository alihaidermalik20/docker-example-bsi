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


// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [calculatePremium]) {
  // =============== test cases for this challenge ===============

  describe(solution.name + ': _', () => {
    describe('When the premium is 200', () => {
        it('Should multiply by x1,2 when she has less than 10 year experience',
            () => {
                expect((solution({profession: 'nurse', experience: 8}, 200))).toBe(240)
        });
    })
  });
}

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
