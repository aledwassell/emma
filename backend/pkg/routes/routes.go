package routes

import (
	"github.com/aledwassell/emma/pkg/controllers"
	"github.com/gorilla/mux"
)

var RegisterQuotesRoutes = func(router *mux.Router) {
	router.HandleFunc("/quote/", controllers.CreateQuote).Methods("POST")
	router.HandleFunc("/quote/", controllers.GetQuote).Methods("GET")
	router.HandleFunc("/quote/{id}", controllers.GetQuoteById).Methods("GET")
	router.HandleFunc("/quote/{id}", controllers.UpdateQuote).Methods("PUT")
	router.HandleFunc("/quote/{id}", controllers.DeleteQuote).Methods("DELETE")
}