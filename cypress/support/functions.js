class inputData{

    //Função gera uma string aleatória com a cadeia de caracteres abaixo na variavel letters. Exemplo: wordRandom(5) -- Resultado: AiObR
    wordRandom (size) { 
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let word = '';
      
        for (let i = 0; i < size; i++) { 
          const indexRandom = Math.floor(Math.random() * letters.length);
          word += letters[indexRandom];
        }
        return word;
    }

    numberRandom (size) { 
      const numbers = '0123456789';
      let numeral = '';
    
      for (let i = 0; i < size; i++) { 
        const indexRandom = Math.floor(Math.random() * numbers.length);
        numeral += numbers[indexRandom];
      }
      return numeral;
  }

    //Função que repete a palavra descrita abaixo a quantidade de vezes que forem colocadas entre parenteses. Exemplo: repeatWord(2) -- Resultado: ABCABC
    //Caso não seja necessário utilizar essa função é possível declarar a função nativa a seguir para ser utilizada let repeatString = "abc".repeat(2) -- Exemplo: repeatString  -- Resultado: abcabc
    repeatWord(repeat) {
        let result = '';
        const word = 'ABC'
        for (let i = 0; i < repeat; i++) {
            result += word;
        }
        return result;
      }

      repeatWord2(repeat) {
        let result = '';
        const word = 'DEF'
        for (let i = 0; i < repeat; i++) {
            result += word;
        }
        return result;
      }

      // Passando um número como parametro traz a informação da data atual = 0 / dia anterior = -1 e dia posterior = 1
      dateRandom(day) {
        var dateNow = new Date();
        dateNow.setDate(dateNow.getDate() + day);
        return dateNow;
      }

      // Parametro formatDate recupera da função nativa Date() a data atual e com base nela 
      formatDate(formatDate) {
        var day = formatDate.getDate().toString().padStart(2, '0');
        var mounth = (formatDate.getMonth() + 1).toString().padStart(2, '0'); 
        var year = formatDate.getFullYear();
      
        return day + '-' + mounth + '-' + year;
      }

      // Se o parametro differentHours = 0, ele pega a data atual
      // Se o parametro differentHours = 1, ele pega a data do próximo dia
      // Se o parametro differentHours = -1, ele pega a data de um dia antes da data atual
      hours(differentHours = 0) {
        var dateNow = new Date();
        dateNow.setHours(dateNow.getHours() + differentHours);
      
        var hour = dateNow.getHours().toString().padStart(2, '0');
        var minutes = dateNow.getMinutes().toString().padStart(2, '0');
        var seconds = dateNow.getSeconds().toString().padStart(2, '0');
        var miliseconds = dateNow.getMilliseconds().toString().padStart(3, '0');
    
        return `${hour}:${minutes}:${seconds}.${miliseconds}`;
      }
      
}

export default new inputData()


