function validar(objeto){var nick=$("#nick"+objeto).val(); var opniao=$("#opiniao"+objeto).val(); var grupos=$("#rgrupos"+objeto).val(); var desempenho=$("#rdesempenho"+objeto).val(); var rrigpul=$("#rrigpul"+objeto).val(); var veredito=$("#veredito"+objeto).val(); if(nick !="" && opniao !="" && grupos !="" && desempenho !="" && rrigpul !="" && veredito !=""){$(".tab"+objeto).addClass("text-success"); $(".tab"+objeto).removeClass("text-danger");}else{$(".tab"+objeto).removeClass("text-success"); $(".tab"+objeto).addClass("text-danger");}}function attR(val, id){$("#r"+id).prop("value", val);}function change(val, id){var teste=$("#"+id).data("ionRangeSlider"); var skin; if (val=='Ruim' || val=='Não é rígido e não tem pulso firme'){skin='vermelho';}if (val=='Razoável' || val=='Tem pulso firme, mas não é rígido' || val=='É rígido, mas não tem pulso firme'){skin='amarelo';}if (val=='Bom'){skin='verde';}if (val=='Excelente' || val=='É rígido e tem pulso firme, mas pode melhorar' || val=='É rígido e tem pulso firme'){skin='verde';}if (val=='Não faço parte do turno'){skin='cinza';}if (val=='Sem grupos em comum'){skin='cinza';}teste.update({skin: skin}); $("#r"+id).prop("value", val);}function formulario(){let erro; $("#ten :input").each( function(index){if($(this).val()==""){$(this).addClass('border border-danger'); erro=true;}else{$(this).removeClass('border border-danger');}}); $("textarea").each( function(index){ if($(this).val()==""){$(this).addClass('border border-danger'); erro=true;}else{$(this).removeClass('border border-danger');}}); $("select").each( function(index){ if($(this).val()==""){$(this).addClass('border border-danger'); erro=true;}else{$(this).removeClass('border border-danger');}}); if($("#turn :checkbox:checked").length==0){$(".invisible").removeClass('invisible'); erro=true;}if(erro==true){return false;}}function pegaDados(objeto){let resposta=[]; $("#ten :input[type='text'], #ten textarea, #ten select").each(function (index){resposta[$(this).prop("id")]=$(this).val();}); resposta["turnos"]=[]; $("#ten :checkbox:checked").each(function(index){resposta["turnos"][$(this).prop("id")]=$(this).val();}); resposta["policiais"]=[]; $("input[name='nick[]']").each(function(numn){resposta["policiais"][numn]=[]; resposta["policiais"][numn]['nome']=$(this).val();}); $("textarea[name='opiniao[]']").each(function(numo){resposta["policiais"][numo]["opiniao"]=$(this).val();}); $("input[name='grupos[]']").each(function(numg){resposta["policiais"][numg]["grupos"]=$(this).val();}); $("input[name='desempenho[]']").each(function(numd){resposta["policiais"][numd]["desempenho"]=$(this).val();}); $("input[name='rigpul[]']").each(function(numr){resposta["policiais"][numr]["rigpul"]=$(this).val();}); $("select[name='veredito[]']").each(function(numv){resposta["policiais"][numv]["veredito"]=$(this).val();}); return resposta;}
