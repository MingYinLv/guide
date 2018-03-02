package main

import (
	"fmt"
	"strconv"
	"strings"
	"math"
)

func reverse(x int) int {
	s := strconv.Itoa(x)
	ss := strings.Split(s, "")
	if x < 0 {
		ss = ss[1:]
	}
	length := len(ss)
	for i := 0; i < length/2; i++ {

		ss[i], ss[length-1-i] = ss[length-1-i], ss[i]
	}
	result, err := strconv.Atoi(strings.Join(ss, ""))
	if err != nil {
		panic(err)
	}
	if x < 0{
		result = -result
	}

	if result > math.MaxInt32 || result < math.MinInt32{
		result = 0
	}

	return result
}

func main() {
	fmt.Println(reverse(-1234567))
}
