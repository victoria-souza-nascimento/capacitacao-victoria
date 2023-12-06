let cep = 36013080
let endpoint = 'https://viacep.com.br/ws/36013080/json/';
let response = fetch(endpoint, {
    method: "GET"
})
.then(async (res) => {
    console.log(await res.json());
});
