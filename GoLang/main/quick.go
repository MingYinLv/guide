package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(quick([]int{34, 345, 78, 24, 789, 345, 35, 123}))
}

func quick(ss []int) []int {
	if len(ss) <= 1 {
		return ss
	}
	index := int(math.Floor(float64(len(ss) / 2)))
	var left, right []int
	value := ss[index]
	ss = append(ss[:index], ss[index+1:]...)

	for i := 0; i < len(ss); i++ {
		if ss[i] < value {
			left = append(left, ss[i])
		} else {
			right = append(right, ss[i])
		}
	}

	return append(append(quick(left), value), quick(right)...)
}
