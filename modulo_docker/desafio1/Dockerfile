FROM golang:1.22-alpine AS builder

WORKDIR /app
COPY go.mod ./
COPY main.go ./

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o /fullcycle .

FROM scratch
COPY --from=builder /fullcycle /fullcycle
ENTRYPOINT ["/fullcycle"]
