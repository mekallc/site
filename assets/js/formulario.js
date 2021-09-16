
(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $(document).on('submit','#formulario',function(e){
            
            e.preventDefault();
            var tipo = $('#tipo').val();
            var nombres = $('#nombres').val();
            var apellidos = $('#apellidos').val();
            var correo = $('#correo').val();
            var nombrecomercial = $('#nombrecomercial').val();
            var direccion = $('#direccion').val();
            var whatsapp = $('#whatsapp').val();
            var mensaje = $('#mensaje').val();


            if (!tipo) {
                $('#tipo').removeClass('error');
                $('#tipo').addClass('error').attr('placeholder','Name *');
            }else{
                $('#tipo').removeClass('error');
            }
            if (!nombres) {
                 $('#nombres').removeClass('error');
                 $('#nombres').addClass('error').attr('placeholder','Nombres es requerido *');
             }else{
                 $('#nombres').removeClass('error');
             }
            if (!apellidos) {
                 $('#apellidos').removeClass('error');
                 $('#apellidos').addClass('error').attr('placeholder','Apellidos es requerido *')
             }else{
                 $('#apellidos').removeClass('error');
             }
            if (!correo) {
                $('#correo').removeClass('error');
                $('#correo').addClass('error').attr('placeholder','Correo es requerido *')
            }else{
                $('#correo').removeClass('error');
            }
            if (!nombrecomercial) {
                $('#nombrecomercial').removeClass('error');
                $('#nombrecomercial').addClass('error').attr('placeholder','Nombre comercial es requerido *')
            }else{
                $('#nombrecomercial').removeClass('error');
            }
            if (!direccion) {
                $('#direccion').removeClass('error');
                $('#direccion').addClass('error').attr('placeholder','Direccion es requerido *')
            }else{
                $('#direccion').removeClass('error');
            }
            if (!whatsapp) {
                $('#whatsapp').removeClass('error');
                $('#whatsapp').addClass('error').attr('placeholder','Whatsapp es requerido *')
            }else{
                $('#whatsapp').removeClass('error');
            }

             
            
            if ( tipo && nombres && apellidos && correo && nombrecomercial && direccion && mensaje ) {
             	$.ajax({
	                 type: "POST",
	                 url:'formulario.php',
	                 data:{
                         'tipo': tipo,
                         'nombres': nombres,
                         'apellidos': apellidos,
                         'correo': correo,
                         'nombrecomercial': nombrecomercial,
                         'direccion': direccion,
                         'whatsapp': whatsapp,
                         'mensaje': mensaje,
	                 },
	                 success:function(data){
                         $('#formulario').children('.email-success').remove();
                         $('#formulario').prepend('<span class="alert alert-success email-success">'+data+'</span>');
                         $('#tipo').val('');
                         $('#nombres').val('');
                         $('#apellidos').val('');
                         $('#correo').val('');
                         $('#nombrecomercial').val('');
                         $('#direccion').val('');
                         $('#whatsapp').val('');
                         $('#mensaje').val('');
                         $('.email-success').fadeOut(3000);
	                 }
	             });
             }else{
                $('#formulario').children('.email-success').remove();
                $('#formulario').prepend('<span class="alert alert-danger email-success">Todos los campos son obligatorios</span>');
                $('.email-success').fadeOut(3000);
             }

            
            
        });
    })

}(jQuery));	
