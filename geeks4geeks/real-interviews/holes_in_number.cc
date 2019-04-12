// C++ implementation of the approach 
// #include <bits/stdc++.h> 
// using namespace std; 
//
// // Global array for hole values 
// int hole[] = { 1, 0, 0, 0, 1, 0, 1, 0, 2, 1 }; 
//
// // Function to return the count 
// // of holes in num 
int countHoles(int num) 
{ 
 int holes = 0; 

  while (num > 0) { 
        // Last digit in num 
				int d = num % 10; 

                            num /= 10; 
                              } 

                                // Return the count of holes 
                                  // in the original num 
                                    return holes; 
                                    } 

                                    // Driver code 
                                    int main() 
                                    { 
                                      int num = 6457819; 

                                        cout << countHoles(num); 

                                          return 0; 
                                          } 
                                          }
