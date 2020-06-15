$(document).ready(
  function(){

    // Al click del bottone aggiungi,aggiungi il prodotto
    $(document).on('click','.inserisci',
      function(){
        aggiungiProdotto();
      });

    // Al click da tastiera invio,aggiungi il prodotto
    $('input').keydown(
      function(event){
        if(event.which == 13){
          aggiungiProdotto();
        }
      }
    );

    // Al click del bottone elimina,rimuovi il prodotto
    $(document).on('click','.elimina',
      function(){
        $(this).parent().remove();
      });

  }
);

// Funzione di aggiunta prodotti alla lista
function aggiungiProdotto(){
  var itemLista = $('.template li').clone();
  var prodotto = $('input').val();
  itemLista.prepend(prodotto);
  $('.listaSpesa').append(itemLista);
}
