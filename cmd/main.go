package main

/*
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
	"encoding/json"
	"log"
*/

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// init sequence slice
var sequence []int

// Sequence struct model
type Sequence struct {
	Digits   int   `json:"id"`
	Sequence []int `json:"sequence"`
}

// return fibonacci sequence
func createFibonacci(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	digits, _ := strconv.Atoi(params["id"])
	sequence = generateSequence(digits)
	var seq Sequence
	_ = json.NewDecoder(r.Body).Decode(&seq)
	seq.Digits = digits
	seq.Sequence = sequence

	json.NewEncoder(w).Encode(seq)
}

func generateSequence(num int) []int {
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

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/fibonacci/{id}", createFibonacci)
	log.Fatal(http.ListenAndServe(":8080", router))
}
