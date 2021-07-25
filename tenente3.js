 function validar(objeto) {
          var nick = $("#nick"+objeto).val();
          var opniao = $("#opiniao"+objeto).val();
          var grupos = $("#rgrupos"+objeto).val();
          var desempenho = $("#rdesempenho"+objeto).val();
          var rrigpul = $("#rrigpul"+objeto).val();
          var veredito = $("#veredito"+objeto).val();
          console.log(veredito);
          if(nick != "" && opniao != "" && grupos != "" && desempenho !="" && rrigpul != "" && veredito != "") {
            $(".tab"+objeto).addClass("text-success");
            $(".tab"+objeto).removeClass("text-danger");
          }else {
            $(".tab"+objeto).removeClass("text-success");
            $(".tab"+objeto).addClass("text-danger");
          }
        }

        function attR(val, id) {
          $("#r"+id).prop("value", val);
        }
        function change(val, id) {
            var teste = $("#"+id).data("ionRangeSlider");
            var skin;
            if (val == 'Ruim' || val == 'Não é rígido e não tem pulso firme') {
                skin = 'vermelho';
            }
            if (val == 'Razoável' || val == 'Tem pulso firme, mas não é rígido' || val ==
                'É rígido, mas não tem pulso firme') {
                skin = 'amarelo';
            }
            if (val == 'Bom') {
                skin = 'verde';
            }
            if (val == 'Excelente' || val == 'É rígido e tem pulso firme, mas pode melhorar' || val ==
                'É rígido e tem pulso firme') {
                skin = 'verde';
            }

            if (val == 'Não faço parte do turno') {
                skin = 'cinza';
            }
            if (val == 'Sem grupos em comum') {
                skin = 'cinza';
            }
            teste.update({
                skin: skin
            });

            $("#r"+id).prop("value", val);
        }
        function formulario() {
          let erro;
        $("#ten :input").each( function(index) {
          if($(this).val() == "") {
            $(this).addClass('border border-danger');
            erro = true;
          }else {
            $(this).removeClass('border border-danger');
          }
        });
        $("textarea").each( function(index) {
          console.log($(this).val());
          if($(this).val() == "") {
            $(this).addClass('border border-danger');
            erro = true;
          }else {
            $(this).removeClass('border border-danger');
          }
        });

        $("select").each( function(index) {
          console.log($(this).val());
          if($(this).val() == "") {
            $(this).addClass('border border-danger');
            erro = true;
          }else {
            $(this).removeClass('border border-danger');
          }
        });

        if($("#turn :checkbox:checked").length == 0) {
          $(".invisible").removeClass('invisible');
          erro = true;
        }
        if(erro == true) {
          return false;
        }
      }
