package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// r.StaticFileFS("", "index.html", http.FS(<some fs>))

	if err := r.Run(":8080"); err != nil {
		log.Printf("failed to start server: %v", err)
	}
}
