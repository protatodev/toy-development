package main

import (
	"testing"
)

func generateSeq(num int) []int {
	fib := make([]int, num)

	for i := 0; i < num; i++ {
		if i == 0 {
			fib[i] = 0
		} else if i == 1 {
			fib[i] = 1
		} else {
			fib[i] = fib[i-1] + fib[i-2]
		}
	}

	return fib

}

// TestFib will ensure that the correct number of digits are returned
func TestFib(t *testing.T) {
	fib := generateSeq(5)
	if len(fib) != 5 {
		t.Errorf("Sum was incorrect, got: %d, want: %d.", len(fib), 5)
	}
}
