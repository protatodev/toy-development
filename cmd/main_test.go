package main

import (
	"testing"
)

// TestFib will ensure that the correct number of digits are returned
func TestFib(t *testing.T) {
	fib := generateSequence(5)
	if len(fib) != 5 {
		t.Errorf("Sum was incorrect, got: %d, want: %d.", len(fib), 5)
	}
}
