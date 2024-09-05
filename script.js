//console.log('js link');
const cep = document.querySelector('#cep');
const numero = document.querySelector('#numero');

const listasEstados = async () => {
  const estadoSelect = document.querySelector('#estado');

  const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
  console.log('estados', response.data);

  //const apenas para armazenar o conteúdo do response
  const listaEstados = response.data;

  let optionEstados = '';

  //listEstados poderia ser response.data.forEach
  listaEstados.forEach(estado => {
    
    //para pegar os elementos apenas da sigla e nome respectivamente do response (que no caso é do estado)
    optionEstados = optionEstados + `<option value="${estado.sigla}"> ${estado.nome}</option>`
  });

    console.log('optionEstados', optionEstados);

  estadoSelect.textHTML = listOption.join('');
}


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