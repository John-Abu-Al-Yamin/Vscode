export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}



// Recursion Component    
// Factorial 

// function factorial(n: number): number {
//     // base case
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

