/**
 * Constant Time
 * Space Complexity O(1)
 * Time Complexity 0(1)
 * We have to look up the degree Celsius in memory
 */
export const toFahreneit = (degreesCelsius: number): number => {
  return 1.8 * degreesCelsius + 32;
};
