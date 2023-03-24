var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+916363549133'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:varshithvh@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Varshithvhegde'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/916363549133'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";
var resumeString = "<img src='images/capa_pdf_orientacao.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Preparatório para Internação.pdf</label></div><a href='assets/internacao-hospitalar.pdf' download='internacao-hospitalar.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

function enviarMsg(acao){
   switch (acao) {
        case "preenchiCadastro":
            var celular = "5511988953510";
            var texto = "Olá Gisele, \nMeu nome é: \nJá preenchi o cadastro do paciente: \n\n Aguardo seu contato.";
        break;
        case "agendarRetorno":
            var celular = "5511988953510";
            var texto = "Olá Gisele, \nMeu nome é: \nQuero marcar retorno na unidade:  \nO nome do paciente é: \n\n Aguardo seu contato.";
        break;
        case "falarAtendimento":
            var celular = "5511988953510";
            var texto = "Olá Gisele, \nMeu nome é: \nQuero esclarecer a seguinte dúvida:";
        break;
        case "contatoMedico":
            var celular = "5511976684344";
            var texto = "Olá Dr. Henrique \nMeu nome é: \nO nome do paciente é: \nTenho algumas dúvidas e a seguir encaminho áudio e foto para explicar melhor.";
        break;
   }
    texto = window.encodeURIComponent(texto);
    let urlApi = "https://web.whatsapp.com/send";
  if(mobileCheck()){
  	urlApi = "https://api.whatsapp.com/send";
  }
  window.open(urlApi + "?phone=" + celular + "&text=" + texto, "_system");//Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
}


function mobileCheck(){
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Visto por último hoje às " + date.getHours() + ":" + date.getMinutes() + "h" 
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "digitando...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Saudações 👋🏻,<br>Sou a atendente virtual do Dr. Henrique Canto.<br><br>Meu objetivo é te passar informações importantes, antes mesmo de realizear o agendamento, para então transferir seu atendimento para uma pessoa da equipe te ajudar prontamente.<br><br>A qualquer momento digite <span class='bold'>'ajuda'</span> e eu te mostro os assuntos que posso auxiliar.");
            }, 1500);
            setTimeout(() => {
                sendTextMessage("Qual assunto precisa de informação?<br><br><a href='#' onClick='waitAndResponce(&#039;agendar consulta&#039;); return false;' class='semi-transparent-button with-border is-blue'>Agendar Consulta</a><a href='#' onClick='waitAndResponce(&#039;atendimento e localização&#039;); return false;' class='semi-transparent-button with-border is-blue'>Horário e localização de consultórios</a><a href='#' onClick='waitAndResponce(&#039;duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Dúvidas gerais</a><a href='#' onClick='waitAndResponce(&#039;contato medico&#039;); return false;' class='semi-transparent-button with-border is-blue'>Contato médico</a>");
            }, 4000);
            break;
        
        case "ajuda":
        setTimeout(() => {
            sendTextMessage("Qual assunto precisa de informação?<br><br><a href='#' onClick='waitAndResponce(&#039;agendar consulta&#039;); return false;' class='semi-transparent-button with-border is-blue'>Agendar Consulta</a><a href='#' onClick='waitAndResponce(&#039;atendimento e localização&#039;); return false;' class='semi-transparent-button with-border is-blue'>Horário e localização de consultórios</a><a href='#' onClick='waitAndResponce(&#039;duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Dúvidas gerais</a><a href='#' onClick='waitAndResponce(&#039;contato médico#039;); return false;' class='semi-transparent-button with-border is-blue'>Contato médico</a>");
            }, 2000);
        break;
        case "agendar consulta":
        setTimeout(() => {
            sendTextMessage("Perfeito...<br><br>Antes de agendar a consulta, tenha em mente qual a unidade de atendimento fica melhor pra você.<br><br>&bull; Perdizes<br>&bull; Anália Franco<br>&bull; Mogi das Cruzes<br><br>Ah! Se precisar, também posso te passar mais detalhes quanto a localização e horários de atendimento de cada unidade.");
            }, 1000);
            setTimeout(() => {
                sendTextMessage("<a href='#' onClick='waitAndResponce(&#039;atendimento e localização&#039;); return false;' class='semi-transparent-button with-border is-blue'>Horário e localização de consultórios</a><a href='#' onClick='waitAndResponce(&#039;agendar primeira consulta&#039;); return false;' class='semi-transparent-button with-border is-blue'>Agendar primeira consulta</a><a href='#' onClick='waitAndResponce(&#039;agendar retorno&#039;); return false;' class='semi-transparent-button with-border is-blue'>Agendar Retorno</a><a href='#' onClick='waitAndResponce(&#039;duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Dúvidas gerais</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Voltar ao início</a>");
            }, 3000);
        break;   
        case "agendar primeira consulta":
            setTimeout(() => {
                sendTextMessage("Vamos lá! Como é a primeira vez que fará a consulta, será necessário que faça o cadastro do paciente. <br><br>Vou te direcionar a um link externo e então, depois que tiver preenchido, preciso que volte aqui (nessa opção de agendamento) pra gente continuar tá? Aí é só clicar em <b>'Já preenchi o cadastro'</b>.");
                }, 2000);
                setTimeout(() => {
                    sendTextMessage("Ah… Adianto que o valor da consulta é R$350,00 (PIX, Cartão ou dinheiro) e emitimos notas fiscais eletrônicas para fins de reembolso.");
                    }, 4000);
                    setTimeout(() => {
                        sendTextMessage("<a href='https://bit.ly/novo-paciente' target='_blank' class='semi-transparent-button with-border is-blue'>Preencher cadastro do paciente</a><a href='#' onClick='waitAndResponce(&#039;preenchi o cadastro&#039;); return false;' class='semi-transparent-button with-border is-blue'>Já preenchi o cadastro</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Voltar ao início</a>");
                    }, 5000);
            break;

        case "preenchi o cadastro":
        setTimeout(() => {
            sendTextMessage("Que bom que já realizou o cadastro. Agora vou te direcionar ao WhatsApp da Gisele para que possa escolher a melhor data e horário. Ela responde de segunda à sexta no horário comercial.");
            }, 2000);
            setTimeout(() => {
                sendTextMessage("<a href='#' onClick='enviarMsg(&#039;preenchiCadastro&#039;); return false;' class='semi-transparent-button with-border is-blue'>Falar com Gisele</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Voltar ao início</a>");
            }, 4000);
        break;   
        case "agendar retorno":
        setTimeout(() => {
            sendTextMessage("OK… vou te direcionar à Gisele para que ela dê sequência ao seu agendamento via WhatsApp. Ela responde de segunda à sexta no horário comercial.");
            }, 2000);
        setTimeout(() => {
            sendTextMessage("Por favor, ao iniciar a conversa com ela, informe seu nome, a unidade do consultório desejada e nome completo do paciente.");
        }, 4000);
        setTimeout(() => {
            sendTextMessage("<a href='#' onClick='enviarMsg(&#039;agendarRetorno&#039;); return false;' class='semi-transparent-button with-border is-blue'>Falar com Gisele</a><a href='#' onClick='waitAndResponce(&#039;atendimento e localização&#039;); return false;' class='semi-transparent-button with-border is-blue'>Horário e localização de consultórios</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Voltar ao início</a>");
        }, 4000);
    break;  
    case "contato medico":
        setTimeout(() => {
            sendTextMessage("Se já é paciente e necessita tirar dúvidas técnicas e/ou de pós-operatório, te direcionarei ao WhatsApp do dr. Henrique Canto que poderá te ajudar. Além das informações do paciente, e a dúvida, pode enviar também fotos.");
            }, 2000);
         setTimeout(() => {
            sendTextMessage("Se precisar de uma resposta imediata, inclua no inicio da mensagem a frase 'DÚVIDA URGENTE' para que ele possa entrar em contato o mais breve possível.<br><br>Agora se ele não retornar a tempo, ou precisar contatá-lo de maneira URGENTE, clique em ligar para falar com o Dr. Henrique. ");
            }, 4000);
        setTimeout(() => {
            sendTextMessage("<a href='#' onClick='enviarMsg(&#039;contatoMedico&#039;); return false;' class='semi-transparent-button with-border is-blue'>Contato Médico - WhatsApp</a><a href='tel:11976684344' target='_blank' class='semi-transparent-button with-border is-blue'>Contato Médico - Ligar</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Voltar ao início</a>");
            }, 5000);
        break;  
        case "duvidas":
        setTimeout(() => {
            sendTextMessage("Combinado! Estamos aqui pra te ajudar e há algumas perguntas que normalmente respondo por aqui. <br><br>Existem algumas delas que são frequentes, portanto já tento esclarece-las por aqui mesmo. Elas estão separadas por tópicos logo abaixo.<br><br>Caso sua dúvida não esteja relacionada aos tópicos abaixo, clique em outras dúvidas e te colocaremos em contato com a Gisele para que possa te auxiliar.<br><br><a href='#' onClick='waitAndResponce(&#039;cirurgia convenio ou particular&#039;); return false;' class='semi-transparent-button with-border is-blue'>Cirurgia - convênio ou particular</a><a href='#' onClick='waitAndResponce(&#039;valor da consulta&#039;); return false;' class='semi-transparent-button with-border is-blue'>Valor da consulta</a><a href='#' onClick='waitAndResponce(&#039;hospitais para cirurgia&#039;); return false;' class='semi-transparent-button with-border is-blue'>Hospitais para cirurgia</a><a href='#' onClick='waitAndResponce(&#039;outras duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Outras dúvidas</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Voltar ao início</a>");
            }, 2000);
        break; 
        case "cirurgia convenio ou particular":
        setTimeout(() => {
            sendTextMessage("O convênio é muito importante! A parte hospitalar será toda coberta pelo plano, pois selecionaremos um hospital que ele dará direito. <br><br>A equipe do Dr. Henrique Canto é particular e não atende e nem realiza cirurgias pelo plano de saúde. No entanto, a maioria dos planos oferece um valor de reembolso para segurados que optam por médicos que não fazem parte do convênio.");
            }, 2000);
        setTimeout(() => {
            sendTextMessage("A solicitação da prévia de reembolso (para consultar este valor), pode ser realizada gratuitamente pela nossa equipe, mas somente APÓS uma consulta médica com o Dr. Henrique Canto (não fazemos análise sem a consulta médica prévia). Já o pagamento só acontece após a cirurgia.");
            }, 4000);
        setTimeout(() => {
            sendTextMessage("<a href='#' onClick='waitAndResponce(&#039;duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Dúvidas</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Início</a>");
            }, 5000);
        break; 
        case "hospitais para cirurgia":
        setTimeout(() => {
            sendTextMessage("Os Hospitais em que o Dr. Henrique Canto realiza suas cirurgias, e portanto possuem toda infraestrutura necessária para isso, são:<br><br>&bull;Hospital Albert Einstein – Morumbi e Perdizes<br>&bull;Hospital Sírio Libanês<br>&bull;Hospital São Luiz – Morumbi<br>&bull;Hospital São Luiz – Jabaquara<br>&bull;Hospital São Luiz – Anália Franco<br>&bull;Maternidade Star<br>&bull;Hospital Infantil Sabará<br>&bull;Hospital São Camilo – Pompéia<br>&bull;Hospital Samaritano – Higienópolis<br>&bull;Hospital Metropolitano – Lapa<br>&bull;Hospital e Maternidade MogiMater<br><br>A equipe médica é toda do Dr. Henrique Canto.<br><br>Ah… nós sempre selecionamos um hospital que seu plano dará direito.");
            }, 4000);
        setTimeout(() => {
            sendTextMessage("<a href='#' onClick='waitAndResponce(&#039;duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Dúvidas</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Início</a>");
            }, 5000);
        break;   
        case "valor da consulta":
        setTimeout(() => {
            sendTextMessage("O Dr. Henrique não atende pelo plano de saúde, somente particular. O valor da consulta é R$350,00 (PIX, Cartão ou dinheiro) e emitimos notas fiscais eletrônicas para que possa solicitar reembolso. ");
            }, 2000);
        setTimeout(() => {
            sendTextMessage("<a href='#' onClick='waitAndResponce(&#039;agendar consulta&#039;); return false;' class='semi-transparent-button with-border is-blue'>Agendar Consulta</a><a href='#' onClick='waitAndResponce(&#039;duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Dúvidas</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Início</a>");
            }, 5000);
        break;  
        case "outras duvidas":
            setTimeout(() => {
                sendTextMessage("Bem, nem tudo a gente tem a resposta na ponta da língua… Mas nossa equipe poderá auxiliar em quaisquer esclarecimentos.");
            }, 2000);
            setTimeout(() => {
                sendTextMessage("<a href='#' onClick='enviarMsg(&#039;falarAtendimento&#039;); return false;' class='semi-transparent-button with-border is-blue'>Falar com Gisele</a><a href='#' onClick='waitAndResponce(&#039;duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Dúvidas</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Início</a>");
            }, 5000);
            break;  
        case "menu":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "orientacao para internacao":
            setTimeout(() => {
                sendTextMessage("Como há muitas coisas a serem detalhadas, deixo um documento que dá o passo a passo de tudo.");
                }, 2000);
            setTimeout(() => {
                sendTextMessage(resumeString);
                }, 2500);
            setTimeout(() => {
                sendTextMessage("<a href='#' onClick='enviarMsg(&#039;falarAtendimento&#039;); return false;' class='semi-transparent-button with-border is-blue'>Falar com Atendimento</a><a href='#' onClick='waitAndResponce(&#039;duvidas&#039;); return false;' class='semi-transparent-button with-border is-blue'>Dúvidas</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Início</a>");
                }, 3000);   
            break;

        case "atendimento e localização":
            //sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a href='#' onClick='waitAndResponce(&#039;help&#039;); return false;'> <div class='socialItem'>Menu</div> </a></div>");
            setTimeout(() => {
                sendTextMessage("1 - <b>UNIDADE PERDIZES:</b> <br>Terça e Quarta das 14h às 18h.<br>Rua Cayowaá, 1071 – conj 122 <br><a href='https://goo.gl/maps/PzbnPN1MjKW8UPVW6' target='_blank' class='semi-transparent-button with-border is-blue'> Saiba como chegar </a>");
            }, 2000);
            setTimeout(() => {
                sendTextMessage("2 - <b>UNIDADE ANÁLIA FRANCO: </b><br>Segunda das 14h às 19h e Quinta das 9:30h às 11:30h.<br>Rua Monte Serrat, 1246 <br><a href='https://goo.gl/maps/1oHyixaffU1xKmkMA' target='_blank' class='semi-transparent-button with-border is-blue'>Saiba como chegar</a>");
            }, 3000);
            setTimeout(() => {
                sendTextMessage("3 - <b>UNIDADE MOGI DAS CRUZES:</b><br>Terça pela manhã (mês a ser definido).<br>Av. Pref. Carlos Ferreira Lopes, 703 – conj 905 <br><a href='https://goo.gl/maps/sjLcuWebetizsjw5A' target='_blank' class='semi-transparent-button with-border is-blue'> Saiba como chegar</a>");
            }, 4000);
            setTimeout(() => {
                sendTextMessage("<a href='#' onClick='waitAndResponce(&#039;agendar consulta&#039;); return false;' class='semi-transparent-button with-border is-blue'>Agendar consulta</a><a href='#' onClick='waitAndResponce(&#039;ajuda&#039;); return false;' class='semi-transparent-button with-border is-blue'>Início</a>");
            }, 5000);
            break;

        case "contact1":
            sendTextMessage(contactString);
            break;

        case "oi":
        case "olá":
        case "bom dia":
        case "boa tarde":
        case "boa noite":
            sendTextMessage("Olá, espero que esteja tudo bem contigo 👋🏻<br>Eu sou a atendente virtual do Dr. Henrique.<br><br>Digite a palavra <b>ajuda</b> e eu te mostro os assuntos que posso te auxiliar.");
            break;
        case "olá":
            sendTextMessage("Olá, espero que esteja tudo bem contigo 👋🏻<br>Eu sou a atendente virtual do Dr. Henrique.<br><br>Digite a palavra <b>ajuda</b> e eu te mostro os assuntos que posso te auxiliar.");
            break;
        
        case "obrigado":
        case "obrigada":
        case "valeu":
        case "tks":
                sendTextMessage("Que isso... que bom que consegui te ajudar. Até uma próxima... bye bye 👋🏻");
            break;

        case "hora":
            var date = new Date();
            sendTextMessage("Agora são " + date.getHours() + ":" + date.getMinutes());
            break;

        case "data":
            var date = new Date();
            sendTextMessage("Hoje é dia " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

                
        case "clear":
        case "limpar":
            clearChat();
            break;

        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Olá "+name+"! Como vai?");
            },2000);
            
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Puxa...não consegui entender 😢<br>Digite a palavra 'ajuda' que eu apresento os assuntos que eu consigo auxiliar.");
            }, 2000);
            break;
    }

}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}


function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}