package main

import (
	"fmt"
	"strings"
)

func isValid(s string) bool {

	ss := strings.Split(s, "")
	pmap := map[string]string{")": "(", "}": "{", "]": "["}

	var stack []string
	for i := 0; i < len(ss); i++ {
		tmp := ss[i]
		if tmp == "(" || tmp == "[" || tmp == "{" {
			stack = append(stack, tmp)
		} else if tmp == ")" || tmp == "}" || tmp == "]" {
			if len(stack) <= 0 {
				return false
			}
			star := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if star != pmap[tmp] {
				return false
			}
		}
	}

	if len(stack) > 0 {
		return false
	}

	return true
}

func main() {
	fmt.Println(isValid(""))
}
