
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            console.log("Nome: " + name + ", Email: " + email);
            alert("Obrigado por entrar em contato, " + name + "! Seu email (" + email + ") foi recebido.");
        });