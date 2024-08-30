//console.log('js link');
const cep = document.querySelector('#cep');
const numero = document.querySelector('#numero');

const consultaCep = async () => {
  let cepValue = cep.value;
  console.log(cepValue);

  if (cepValue.length === 8) {
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cepValue}`);
      console.log(response.data);

      preencherCampos(response.data);
      numero.focus();

    } catch (error) {
      console.error(error);
    }
  }
}

const preencherCampos = data => {
  const rua = document.querySelector('#rua');
  const bairro = document.querySelector('#bairro');
  const estado = document.querySelector('#estado');

  rua.value = data.street;
  bairro.value = data.neighborhood;
  estado.value = data.state;

}

//consultaCep('60420670')