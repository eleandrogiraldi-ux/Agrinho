// Aguarda o carregamento total do DOM antes de executar os scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // SELEÇÃO DE ELEMENTOS DO DOM
    // ==========================================
    const themeToggleBtn = document.getElementById("theme-toggle");
    const ctaBtn = document.getElementById("cta-btn");
    const dynamicMessage = document.getElementById("dynamic-message");
    const agroForm = document.getElementById("agro-form");
    const formFeedback = document.getElementById("form-feedback");

    // Array de fatos para a mensagem dinâmica
    const fatosSustentaveis = [
        "A tecnologia no campo reduziu em até 30% o uso de água na irrigação!",
        "Práticas de plantio direto evitam a erosão e mantêm o carbono no solo.",
        "O agro sustentável protege mais de 20% da vegetação nativa dentro das propriedades."
    ];

    // ==========================================
    // RECURSO 1: FUNCIONALIDADE MODO ESCURO
    // ==========================================
    themeToggleBtn.addEventListener("click", () => {
        // Alterna a classe dark-mode no body
        document.body.classList.toggle("dark-mode");
        
        // Verifica se o modo escuro está ativo para mudar o texto/ícone do botão
        if (document.body.classList.contains("dark-mode")) {
            themeToggleBtn.textContent = "☀️ Modo Claro";
        } else {
            themeToggleBtn.textContent = "🌙 Modo Escuro";
        }
    });

    // ==========================================
    // RECURSO 2: MENSAGEM DINÂMICA (AÇÃO DO USUÁRIO)
    // ==========================================
    ctaBtn.addEventListener("click", () => {
        // Escolhe um fato aleatório do array
        const randomIndex = Math.floor(Math.random() * fatosSustentaveis.length);
        
        // Insere o texto e remove a classe ocultada (hidden)
        dynamicMessage.textContent = fatosSustentaveis[randomIndex];
        dynamicMessage.classList.remove("hidden");
        
        // Feedback visual temporário no próprio botão clicado
        ctaBtn.textContent = "Gerar Novo Fato!";
    });

    // ==========================================
    // RECURSO 3: VALIDAÇÃO SIMPLES DE FORMULÁRIO
    // ==========================================
    agroForm.addEventListener("submit", (event) => {
        // Impede o envio padrão do formulário (recarregar página)
        event.preventDefault();
        
        // Captura os valores dos inputs limpando espaços em branco
        const nomeValue = document.getElementById("nome").value.trim();
        const emailValue = document.getElementById("email").value.trim();

        // Validação condicional simples
        if (nomeValue === "" || emailValue === "") {
            formFeedback.textContent = "❌ Por favor, preencha todos os campos.";
            formFeedback.style.color = "#e74c3c"; // Vermelho de erro
        } else {
            // Sucesso na validação
            formFeedback.textContent = `🎉 Obrigado, ${nomeValue}! Cadastro realizado com sucesso.`;
            formFeedback.style.color = "#27ae60"; // Verde de sucesso
            
            // Limpa os campos após o envio correto
            agroForm.reset();
        }
    });
});

