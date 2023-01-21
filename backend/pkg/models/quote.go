package models

import (
	"github.com/aledwassell/emma/pkg/config"
	"github.com/jinzhu/gorm"
)

var db * gorm.DB

type Quote struct {
	gorm.Model
	Author string `gorm:""json:"author"`
	Quote string `json:"quote"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Quote{})
}

func (q *Quote) CreateQuote() *Quote {
	db.NewRecord(q)
	db.Create(&q)
	return q
}

func GetAllQuotes() []Quote {
	var Quotes []Quote
	db.Find(&Quotes)
	return Quotes
}

func GetQuoteById(Id int64) (*Quote, *gorm.DB) {
	var getQuote Quote
	db := db.Where("ID=?", Id).Find(&getQuote)
	return &getQuote, db
}

func DeleteQuote(ID int64) Quote {
	var quote Quote
	db.Where("ID=?", ID).Delete(quote)
	return quote
}