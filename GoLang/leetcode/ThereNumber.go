package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(maximumProduct([]int{1, 2, 3, 4, 5, 6}))
}

func maximumProduct(nums []int) int {
	for i, v := range nums {
		nums[i] = int(math.Abs(float64(v)))
	}

	return 0
}
