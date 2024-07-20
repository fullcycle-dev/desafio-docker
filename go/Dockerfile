# Stage de Build
FROM golang:alpine as builder
WORKDIR /go/src/app
COPY . .
RUN CGO_ENABLED=0 go build -o /app fullcycle.go

# Stage Final
FROM scratch
COPY --from=builder /app /app
CMD ["/app"]
