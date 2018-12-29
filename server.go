package main

import (
	"fmt"
	"html/template"
	"net/http"
	"strings"
)

var indexTemplate, err = template.ParseFiles("index.html")

func serveIndex(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()       //анализ аргументов,
	fmt.Println(r.Form) // ввод информации о форме на стороне сервера
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	if r.Method != "POST" {
		err = indexTemplate.Execute(w, nil)
	}
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
}

func serveSingle(pattern string, filename string) {
	http.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
		r.ParseForm()       //анализ аргументов,
		fmt.Println(r.Form) // ввод информации о форме на стороне сервера
		fmt.Println("path", r.URL.Path)
		fmt.Println("scheme", r.URL.Scheme)
		fmt.Println(r.Form["url_long"])
		for k, v := range r.Form {
			fmt.Println("key:", k)
			fmt.Println("val:", strings.Join(v, ""))
		}
		http.ServeFile(w, r, filename)
	})
}

func loginForm(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()       //анализ аргументов,
	fmt.Println(r.Form) // ввод информации о форме на стороне сервера
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])

	fmt.Println(w.Header())

	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	if r.Method != "POST" {
		err = indexTemplate.Execute(w, nil)
	}
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
}

func main() {
	http.HandleFunc("/", serveIndex)
	http.HandleFunc("/LoginS", loginForm)
	serveSingle("/build/main.js", "./public/build/main.js")
	fmt.Println("Server listing at port 3000")
	http.ListenAndServe(":3000", nil)

}
