const dummyDatabase = {
    users: [
      {
        CPF: "209.209.498-43",
        RG: "3.987.298",
        Nacionalidade: "Brasileiro",
        Nome: "Marcos Almeida",
        Birth_Date: "10/09/2003",
        Sexo: "Masculino",
        Endereco: "Rua Árboa",
        Complemento: "Casa",
        Numero: "655",
        CEP: "63.214-963",
        Cidade: "Recife",
        Estado: "Pernambuco",
      },
      {
        CPF: "203.985.308-45",
        RG: "1.536.845",
        Nacionalidade: "Brasileira",
        Nome: "Maria Antunes",
        Birth_Date: "20/10/1996",
        Sexo: "Feminino",
        Endereco: "Rua Maranhão",
        Complemento: "Apartamento",
        Numero: "566",
        CEP: "87.663-904",
        Cidade: "Tatuapé",
        Estado: "São Paulo",
      },
      {
        CPF: "309.895.930-46",
        RG: "5.645.332",
        Nacionalidade: "Brasileiro",
        Nome: "Eric Brito",
        Birth_Date: "02/05/2000",
        Sexo: "Masculino",
        Endereco: "Rua dos Bosques",
        Complemento: "Apartamento",
        Numero: "606",
        CEP: "69.885-040",
        Cidade: "Olinda",
        Estado: "Pernambuco",
      },
      {
        CPF: "536.948.992-47",
        RG: "2.888.615",
        Nacionalidade: "Brasileira",
        Nome: "Letícia Castro",
        Birth_Date: "01/06/1998",
        Sexo: "Feminino",
        Endereco: "Rua dos Triunfos",
        Complemento: "Casa",
        Numero: "445",
        CEP: "52.887-042",
        Cidade: "Recife",
        Estado: "Pernambuco",
      },
    ],
  };
  
  export function getUserByName(name) {
    return dummyDatabase.users.find((user) => user.Nome === name);
  }
  
  export function addNewUser(newUser) {
    console.log('Adicionando novo usuário:', newUser);
    dummyDatabase.users.push(newUser);
  }