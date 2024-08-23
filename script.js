const cep = document.querySelector('#cep');

const consultaCep = async () => {
    let cepValue = cep.value;
    console.log(cep.value);

    if (cepValue.length === 8) {
        try {
            const response =
                await axios.get(`https://brasilapi.com.br/api/cep/v2/${cepValue}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

}

// quando fizer response pegar referencia dos outros cantos e ir setando
//consultaCep('60420670')