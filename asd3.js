function validar(objeto){var nick=$("#nick"+objeto).val(); var opniao=$("#opiniao"+objeto).val(); var grupos=$("#rgrupos"+objeto).val(); var desempenho=$("#rdesempenho"+objeto).val(); var rrigpul=$("#rrigpul"+objeto).val(); var veredito=$("#veredito"+objeto).val(); if(nick !="" && opniao !="" && grupos !="" && desempenho !="" && rrigpul !="" && veredito !=""){$(".tab"+objeto).addClass("text-success"); $(".tab"+objeto).removeClass("text-danger");}else{$(".tab"+objeto).removeClass("text-success"); $(".tab"+objeto).addClass("text-danger");}}function attR(val, id){$("#r"+id).prop("value", val);}function change(val, id){var teste=$("#"+id).data("ionRangeSlider"); var skin; if (val=='Não está apto' || val=='Ruim' || val=='Não é rígido e não tem pulso firme'){skin='vermelho';}if (val=='Razoável' || val=='Tem pulso firme, mas não é rígido' || val=='É rígido, mas não tem pulso firme' || val=='Precisa melhorar'){skin='amarelo';}if (val=='Bom'){skin='verde';}if (val=='Excelente' || val=='É rígido e tem pulso firme, mas pode melhorar' || val=='É rígido e tem pulso firme' || val=='Apto'){skin='verde';}if (val=='Não faço parte do turno'){skin='cinza';}if (val=='Sem grupos em comum'){skin='cinza';}teste.update({skin: skin}); $("#r"+id).prop("value", val);}
