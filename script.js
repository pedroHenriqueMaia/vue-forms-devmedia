 /*começando a usar o Vue */
const aplicacao = new Vue({
  /*el aponta o id do elemento HTML */
  el: '#main',
  data: {
    txtParaCripto: '',
    txtParaDescripto: '',
    msgErro: '',
    resultadoTitulo: '',
    resultadoTexto: '',
  },
  /*metodo criado para adicionaar no button, para que ele posso 
  receber a função de criptografar o texto inserido no formulario,
   contando com if, else, para uma validação, caso nçao for inserido nenhum "texto"*/ 
  methods: {
    criptografar: function() {
      /*condição para criptografar o valor que foi recebido
       no input e deixar a "msgerro" vazia*/
      if ( this.txtParaCripto.length > 0 ) {
        this.resultadoTitulo = 'Texto criptografado';
        this.resultadoTexto = btoa(this.txtParaCripto)
        this.msgErro = "";
      } 
      /*condição para adicionar uma menssagem na var "msgerro" pelo fato de nao 
      ter recebido nem um valor no input para ser criptografado*/
      else {
        this.resultadoTitulo = '';
        this.resultadoTexto = '';
        this.msgErro = "Digite um texto para criptografar";
      }
    },
    /*função para criptografar o valor recebido no input, recebendo o parametro 'texto'*/
    verificaBase64: function(texto) {
      const regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/; 
      return regex.test(texto);
    },
    /*Função feita para descriptografar o valor recebido no input (no caso, um valor criptografado)*/ 
    descriptografar: function() {
      const verificaBase64 = this.verificaBase64(this.txtParaDescripto);
      /*Condição para descriptografar o valor recebido e deixar a var "msgerro" vazia*/
      if ( verificaBase64 && this.txtParaDescripto.length > 0) {
        this.resultadoTitulo = 'Texto descriptografado';
        this.resultadoTexto = atob(this.txtParaDescripto);
        this.msgErro = "";
      }
      /*condição para a var "msgerro" recebr um valor, pelo fato de nao ter recebido um formato valido no input.(ou seja, nao recebeu um formato criptografado) */
      else {
        this.resultadoTitulo = '';
        this.resultadoTexto = '';
        this.msgErro = "Este não é um formato válido";
      }
    },
  }
});
