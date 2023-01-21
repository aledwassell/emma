package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/aledwassell/emma/pkg/models"
	"github.com/aledwassell/emma/pkg/utils"
	"github.com/gorilla/mux"
)

 var NewQuote models.Quote

 func GetQuote(w http.ResponseWriter, r *http.Request) {
	newQuotes := models.GetAllQuotes()
	res, _ := json.Marshal(newQuotes)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetQuoteById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	quoteId := vars["id"]
	ID, err := strconv.ParseInt(quoteId, 0, 0)
	if err != nil {
		fmt.Println("Error while parsing")
	}
	quoteDetails, _ := models.GetQuoteById(ID)
	res, _ := json.Marshal(quoteDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func CreateQuote(w http.ResponseWriter, r *http.Request) {
	CreateQuote := &models.Quote{}
	utils.ParseBody(r, CreateQuote)
	q := CreateQuote.CreateQuote()
	res, _ := json.Marshal(q)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteQuote(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	quoteId := vars["id"]
	ID, err := strconv.ParseInt(quoteId, 0, 0)
	if err != nil {
		fmt.Println("Error while parsing")
	}
	quote := models.DeleteQuote(ID)
	res, _ := json.Marshal(quote)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateQuote(w http.ResponseWriter, r *http.Request) {
	var updateQuote = &models.Quote{}
	utils.ParseBody(r, updateQuote)
	vars := mux.Vars(r)
	quoteId := vars["id"]
	ID, err := strconv.ParseInt(quoteId, 0, 0)
	if err != nil {
		fmt.Println("Error with the parse")
	}
	quoteDetails, db := models.GetQuoteById(ID)
	if updateQuote.Author != "" {
		quoteDetails.Author = updateQuote.Author
	}
	if updateQuote.Quote != "" {
		quoteDetails.Quote = updateQuote.Quote
	}
	db.Save(&quoteDetails)
	res, _ := json.Marshal(quoteDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res) 
}