$(document).ready( function(){
   window.addEventListener("load", initialize);
   $('#table_id').DataTable({
      language: {
         "url": "datatables/i18n/pt_br.json"
      },
      paging: true,
      pageLength: 10,
      lengthChange: false,
      searching: false,
      ordering: true,
      info: true,
      autoWidth: true
    });   
});

function initialize(){
   var idList = localStorage["objIdentifiers"];
   var url = "http://websro.correios.com.br/sro_bin/txect01$.Inexistente?P_LINGUA=001&P_TIPO=002&P_COD_LIS=";
   //var url = "http://websro.correios.com.br/sro_bin/sroii_xml.eventos?Usuario=ECT&Senha=SRO&Tipo=L&Resultado=U&Objetos="
   url = url + idList;
   console.log(url);   
}
