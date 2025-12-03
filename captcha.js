const SITE_KEY = "6Ld4UiAsAAAAAIaOD8UWn1pUkW2t1QGmYDPdxbTY";



// input e output se verifica  e ta certo ou da errado, tipo 0 e 1 
//pensa como se fosse em baixo nivel oq acontece soq numa ling de alto nivel ja fznd td por tras pro pc ou servidor
//cria nome qualquer pra uma variavel e ela vai rodano

function gerarToken(action="form_submit") {
    return new Promise((resolve, reject) =>{
        grecaptcha.ready(()=>{
            grecaptcha.execute(SITE_KEY, {action})
                .then(token=>{
                    console.log("[reCAPTCHA] Token gerado:", token);
                    resolve(token);
                })
                .catch(err =>{
                    console.error("[reCAPTCHA] Erro ao gerar tokenP:", err);
                    reject(err);
                })
        })
    })

}

//envio da func
/*
const form = document.getElementById("myformulary");
form.addEventListener("submit", async (e) =>
{
    e.preventDefault();
    console.log("[Formulario] Iniciando envio sobre o captcha...");

    try{
        const token = await gerarToken();

        console.log("[Formulario] Iniciando envio........");

        const dados = new FormData(form);
        dados.append("recaptcha_token", token);


        console.log("[Formulario] Dados preparados:", Object.fromEntries(dados));

    }catch{
        alert("404 Error captcha value by server.");

    }



});
*/
