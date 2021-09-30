/*
 * Solution to CodeSignal arcade level "stringsRearrangement" (https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9) using a custom next-permutation-function without recursion.
 * It switches the values in an integer-array, so I can use the values in this array as my index while looping through the strings-array (it simulates reordering the strings themselves).
 *
 * Permutation logic:
 * 1) find index of last increasing value in array of ints and save position before in variable i | 0, 2, 4, 3, 1 -> index of last increasing value = [2]:4 -> i = [1]:2
 * 2) replace value at i with the nearest increasing number after it | [1]:2 <-> [3]:3 -> 0, 3, ...
 * 3) at the same time take remaining numbers after i, sort them and fill the remaining spots with them in ascending order | -> 0, 3, 1, 2, 4
 */

// function that switches values in memory of passed p-int-array according to permutation algorithm
void nextPerm(int *p, int len) {
  // find the last increasing value in array; compares value of i with value of i-1
  int found = 0;
  int i = len - 2;
  while (i >= 0) {
    if (p[i] < p[i + 1]) {
      found = 1;
      break;
    }
    i--;
  }
  // if no increasing value was found, our p-int-array is already at the last permutation | 4, 3, 2, 1, 0
  if (!found) {
    printf("\nLast permutation reached.\nE.g. (4,3,2,1,0) from (0,1,2,3,4).\n\n");
    return; // if you want to loop through the permutations multiple times or infinitely this can be removed
  }
  // else we create a temporary int-array to include all p-int-array-values on and after i
  int tempLen = len - i;
  int tempNums[tempLen];
  int tempInt;
  for (int j = 0; j < tempLen; j++) {
    tempNums[j] = p[i + j];
  }
  // then we put the temporary int-array in ascending order
  for (int j = 0; j < tempLen; j++) {
    for (int k = j + 1; k < tempLen; k++) {
      if (tempNums[j] > tempNums[k]) {
        tempInt = tempNums[j];
        tempNums[j] = tempNums[k];
        tempNums[k] = tempInt;
      }
    }
  }
  // we go through all the temporary int-array-values, put the nearest increasing number at the index i of our p-int-array and the other values after it
  int closestFound = 0;
  for (int l = 0; l < tempLen; l++) {
    if (!closestFound && tempNums[l] > p[i]) {
      p[i] = tempNums[l];
      closestFound = 1;
    } else {
      p[i + l + 1 - closestFound] = tempNums[l];
    }
  }
}

// this function is executed by the CodeSignal compiler when you test your solution to the problem; arr_string is a custom type created by CodeSignal in the background
bool stringsRearrangement(arr_string inputArray) {
  // create array of integers to reorder with nextPerm and use as index-array for a different array; this avoids having to reorder large char-arrays in memory and reorders simple ints instead
  int permArray[inputArray.size];
  int poss = 1;
  for (int i = 0; i < inputArray.size; i++) {
    permArray[i] = i;
    poss *= i + 1;
  }
  printf("Possibilities: %i\n", poss);
  // go through every possible permutation and check each order of strings for our condition
  for (int j = 0; j < poss; j++) {
    int diff;
    for (int k = 0; k < inputArray.size; k++) {
      diff = 0;
      if (k != inputArray.size - 1) {
        for (int l = 0; l < strlen(inputArray.arr[0]); l++) {
          int permA = permArray[k];
          int permB = permArray[k + 1];
          diff += (inputArray.arr[permA][l] != inputArray.arr[permB][l]);
        }
      } else {
        printf("Match found!\n\n");
        return 1;
      }
      if (diff != 1) {
        break;
      }
    }
    nextPerm(permArray, inputArray.size);
  }
  return 0;
}

/*
 * There is potential for optimization for our use case of nextPerm() in stringsRearrangement:
 * This function also creates "duplicates" because 0,2,4,1,3 is a different permutation-order to 3,1,4,2,0
 *  however our check will always return the same result for both, as forwards- or backwards-order  * does not matter for the strings rearrangement...
 * If the algorithm of the nextPerm-function could create all unique values in the first half of the loop without creating values that have already been created reversed
 *  then we could skip the second half of the nextPerm-function-created-values as they are just the first-half-values reversed.
 */
