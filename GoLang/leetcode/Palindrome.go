package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	fmt.Println(isPalindrome(121))
}

func isPalindrome(x int) bool {

	if x < 0 {
		return false
	}

	s := strconv.Itoa(x)
	ss := strings.Split(s, "")
	length := len(ss)
	for i := 0; i < length; i++ {
		if ss[i] != ss[length-1-i] {
			return false
		}
	}

	return true
}
