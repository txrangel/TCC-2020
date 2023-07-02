// Configuração do firebase
var firebaseConfig = {
  apiKey: "AIzaSyCNC6FMVflEqKQ-9OOEnFE5W41umsmOTa8",
  authDomain: "tcc-cartorio.firebaseapp.com",
  databaseURL: "https://tcc-cartorio.firebaseio.com",
  projectId: "tcc-cartorio",
  storageBucket: "tcc-cartorio.appspot.com",
  messagingSenderId: "302771964490",
  appId: "1:302771964490:web:736b80ff06b4071b8f34b3",
  measurementId: "G-VCRT1MPG6C"
};
//Iniciando o firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
//-------------------------------------------------------------------
// CERTIDAO NASCIMENTO 
// inserir dados da certidao de nascimento no banco de dados 
function inserirnasc(){
    var datanascex=document.getElementById("datanascex").value.toUpperCase();
    var dianasc=document.getElementById("dianasc").value;
    var mesnasc=document.getElementById("mesnasc").value;
    var anonasc=document.getElementById("anonasc").value.toUpperCase();
    var horarionasc=document.getElementById("horarionasc").value.toUpperCase();
    var cidadenasc=document.getElementById("cidadenasc").value.toUpperCase();
    var estadonasc=document.getElementById('estadonasc').options[document.getElementById('estadonasc').selectedIndex].text;
    var hospitalnasc=document.getElementById("hospitalnasc").value.toUpperCase();
    var nomecrianca=document.getElementById("nomecrianca").value.toUpperCase();
    var cbosexo=document.getElementById('cbosexonasc').options[document.getElementById('cbosexonasc').selectedIndex].text;
    var cboraca=document.getElementById('cboracanasc').options[document.getElementById('cboracanasc').selectedIndex].text;
    var nomepai=document.getElementById("nomepai").value.toUpperCase();
    var nomemae=document.getElementById("nomemae").value.toUpperCase();
    var obsnasc=document.getElementById("obsnasc").value.toUpperCase();
// confirma se os campos foram preenchidos 
    if (datanascex=="" || dianasc=="" || mesnasc=="" || anonasc=="" || horarionasc=="" || cidadenasc=="" || hospitalnasc=="" || nomepai==""  || nomemae=="" || nomecrianca==""){
          alert("Preencha todos os campos corretamente");
    }else {
// usa a certidao de nascimento como referencia para criar um campo
          var refnasc=database.ref("CertidaoNasc");
          var resultadonasc=refnasc.push({
// inserindo no banco de dados 
              dataNascex:datanascex, 
              diaNasc:dianasc,
              mesNasc:mesnasc,
              anoNasc:anonasc,
              horarioNasc:horarionasc,
              cidadeNasc:cidadenasc,
              estadoNasc:estadonasc,
              hospitalNasc:hospitalnasc,
              nomeCrianca:nomecrianca, 
              cboSexo:cbosexo,
              cboRaca:cboraca,
              nomePai:nomepai,
              nomeMae:nomemae,
              obsNasc:obsnasc
          });
// avisa o usuario que foi inserido no banco de dados 
          alert("O cadastro ocorreu com sucesso");
    }
}
//-------------------------------------------------------------------
//CERTIDAO DE CASAMENTO 
// inserir dados da certidao de casamento no banco de dados 
  function inserircasa(){
    var datacasaex=document.getElementById("datacasaex").value.toUpperCase();  
    var diacasa=document.getElementById("diacasa").value;
    var mescasa=document.getElementById("mescasa").value;
    var anocasa=document.getElementById("anocasa").value;
    var cidadecasa=document.getElementById("cidadecasa").value.toUpperCase();
    var estadocasa= document.getElementById('estadocasa').options[document.getElementById('estadocasa').selectedIndex].text;
    var nomepresi=document.getElementById("nomepresi").value.toUpperCase();
    var nomeconj1=document.getElementById("nomeconj1").value.toUpperCase();
    var nomeconj2=document.getElementById("nomeconj2").value.toUpperCase();
    var bens=document.getElementById("bens").value.toUpperCase();
    var obscasa=document.getElementById("obscasa").value.toUpperCase();    
// confirma se tudo esta certo 
    if (datacasaex=="" || diacasa=="" || mescasa=="" || anocasa=="" ||  cidadecasa=="" ||  nomepresi=="" || nomeconj1=="" || nomeconj2=="" || bens=="" ){
          alert("Preencha todos os campos corretamente");
    }else {
// usa a certidão de casamento da celebração como referencia para criar um campo
          var refcasa=database.ref("CertidaoCasa");
          var resultadocasa=refcasa.push({
// inserindo no banco de dados 
          dataCasaex:datacasaex, 
          diaCasa:diacasa,
          mesCasa:mescasa,
          anoCasa:anocasa,
          cidadeCasa:cidadecasa,
          estadoCasa:estadocasa,
          nomePresi:nomepresi,
          nomeConj1:nomeconj1,
          nomeConj2:nomeconj2,
          Bens:bens,
          obsCasa:obscasa
          });
// avisa o usuario que foi inserido no banco de dados 
          alert("O cadastro ocorreu com sucesso");
    }
  }
//-------------------------------------------------------------------
// CERTIDAO DE ÓBITO 
// insert firebase
  function inserirobito(){
      var nomefina=document.getElementById("nomefina").value.toUpperCase();
      var datanascfinaex=document.getElementById("datanascfinaex").value.toUpperCase();
      var dianascfina=document.getElementById("dianascfina");
      var mesnascfina=document.getElementById("mesnascfina");
      var anonascfina=document.getElementById("anonascfina");
      var rgfina=document.getElementById("rgfina").value.toUpperCase();
      var naturalidadefina=document.getElementById("naturalidadefina").value.toUpperCase();
      var cbosexofina= document.getElementById('cbosexofina').options[document.getElementById('cbosexofina').selectedIndex].text;
      var cboracafina= document.getElementById('cboracafina').options[document.getElementById('cboracafina').selectedIndex].text;
      var profinado=document.getElementById("profinado").value.toUpperCase();
      var cboestcivil= document.getElementById('cboestcivil').options[document.getElementById('cboestcivil').selectedIndex].text;
      var nomeconj=document.getElementById("nomeconj").value.toUpperCase();
      var filiacao=document.getElementById("filiacao").value.toUpperCase();
      var estadofina=document.getElementById('estadofina').options[document.getElementById('estadofina').selectedIndex].text;
      var cidadefina=document.getElementById("cidadefina").value.toUpperCase();
      var bairrofina=document.getElementById("bairrofina").value.toUpperCase();
      var ruafina=document.getElementById("ruafina").value.toUpperCase();
      var numefina=document.getElementById("numefina").value.toUpperCase();
      var complemento=document.getElementById("complemento").value.toUpperCase();
      var datafaleex=document.getElementById("datafaleex").value.toUpperCase();
      var diafale=document.getElementById("diafale").value;
      var mesfale=document.getElementById("mesfale").value;
      var anofale=document.getElementById("anofale").value;
      var horariofale=document.getElementById("horariofale").value.toUpperCase();
      var causamorte=document.getElementById("causamorte").value.toUpperCase();
      var obsfale=document.getElementById("obsfale").value.toUpperCase();
// confirma se tudo esta certo 
      if (nomefina=="" || datanascfinaex=="" || dianascfina=="" || mesnascfina=="" || anonascfina=="" || rgfina=="" || rgfina.length!=12 || naturalidadefina=="" || profinado=="" || cidadefina=="" || bairrofina=="" || ruafina=="" || numefina=="" || datafaleex=="" || diafale=="" || mesfale=="" || anofale=="" || horariofale=="" || causamorte=="" ){
          alert("Preencha todos os campos corretamente");
      }else {
// usa a certidao de óbito como referencia para criar um campo
            var refobito=database.ref("CertidaoObito"); 
            var resultadoobito=refobito.push({
// inserindo no banco de dados 
            nomeFina:nomefina,
            datanascFinaex:datanascfinaex,
            dianascFina:dianascfina,
            mesnascFina:mesnascfina,
            anonascFina:anonascfina,
            rgFina:rgfina,
            cbosexoFina:cbosexofina,
            cboracaFina:cboracafina,
            naturalidadeFina:naturalidadefina,
            proFinado:profinado,
            cboestCivil:cboestcivil,
            nomeConj:nomeconj,
            Filiacao:filiacao,
            estadoFina:estadofina,
            cidadeFina:cidadefina,
            bairroFina:bairrofina,
            ruaFina:ruafina,
            numeFina:numefina,
            Complemento:complemento,
            dataFaleex:datafaleex,
            diaFale:diafale,
            mesFale:mesfale,
            anoFale:anofale,
            horarioFale:horariofale,
            causaMorte:causamorte,
            obsFale:obsfale
            });
// avisa o usuario que foi inserido no banco de dados             
            alert("O cadastro ocorreu com sucesso");
      }
  }