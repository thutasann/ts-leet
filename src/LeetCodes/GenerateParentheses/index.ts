/** Generate Parenthesis
 * @example
 * if n === 3 => ((( )))
 * leftPCount would be 3
 * rightPCount would be 3
 * partial = ''
 * @recurisve
 * leftPCount = 2
 * rightPCount = 3
 * partial^1 = '('
 * partial^1 = ')'
 */
function generateParenthesis(n: number): Array<string> {
  const solution: Array<string> = [];

  /**
   * Build Combo Recurive function
   * @param { number } leftPCount - Left Parenthesis Count
   * @param { number } rightPCount - Right Parenthesis Count
   * @param { number } partial - Partial string
   */
  const buildCombo = (
    leftPCount: number,
    rightPCount: number,
    partial: string,
  ) => {
    if (leftPCount > rightPCount) return;

    if (!leftPCount && !rightPCount) solution.push(partial);

    if (leftPCount > 0) buildCombo(leftPCount - 1, rightPCount, partial + '(');

    if (rightPCount > 0) buildCombo(leftPCount, rightPCount - 1, partial + ')');
  };

  buildCombo(n, n, '');

  return solution;
}

const ParenthesisAnswer = generateParenthesis(3);
console.log('ParenthesisAnswer', ParenthesisAnswer);
