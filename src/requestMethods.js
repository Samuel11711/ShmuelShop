import axios from "axios"

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTdlZTY5YTYyYThiZWRmYmQzOTNlOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDE0NTc5MCwiZXhwIjoxNjYwNDA0OTkwfQ.rdCUufthJukHp9ChE2iKHm6I1r2h6shy0oI3X1VYAPo"

export const publicRequest=axios.create({
baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer${TOKEN}`},
    });