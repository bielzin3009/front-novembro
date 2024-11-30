$(document).ready(function() {

    $("#bt-cadastro").click(function() {

        $("#nome").removeClass("is-invalid")
        $("#email").removeClass("is-invalid")
        $("#cpf").removeClass("is-invalid")
        $("#cidade").removeClass("is-invalid")

        var nome = $("#nome").val();
        if(nome.trim() == "")
        {
            $("#nome").addClass("is-invalid")
        }

        var email = $("#email").val();
        if(email.trim() == "")
        {
            $("#email").addClass("is-invalid")
        }

        var cpf = $("#cpf").val();
        if(cpf.trim() == "")
        {
            $("#cpf").addClass("is-invalid")
        }

        var cidade = $("#cidade").val();
        if(cidade.trim() == "0")
        {
            $("#cidade").addClass("is-invalid")
        }
        
        var sexo = $("#sexo").val();
        if(sexo == "")
        {
            $("#sexo").addClass("is-invalid")
        }

    })

})