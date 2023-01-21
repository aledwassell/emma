// main.go
package main

import (
	"log"
	"net/http"

	"github.com/aledwassell/emma/pkg/routes"
	"github.com/gorilla/mux"
)

func main() {
    r := mux.NewRouter()
		routes.RegisterQuotesRoutes(r)
		http.Handle("/", r)
		log.Fatal((http.ListenAndServe("localhost:8080", r)))
}