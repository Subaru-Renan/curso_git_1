<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./formulario.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="cssfile.css">
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600;700;900&display=swap"
      rel="stylesheet"
    />
    <title>Formulario do Renan</title>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Criar uma conta</h2>
      </div>

      <form id="form" class="form">

        <div class="form-control">
          <label for="username">Nome Completo:</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu nome completo..."
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mensagem de erro </small>
        </div>

        <div class="form-control">
          <label for="matricula-password-confirmation">Matrícula</label>
          <input
            type="text"
            id="matricula-password-confirmation"
            placeholder="Digite sua Matrícula..."
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mensagem de erro </small>
        </div>

        <div class="form-control">
          <label for="cpf-password-confirmation">CPF</label>
          <input
            type="text"
            id="cpf-password-confirmation"
            placeholder="Digite seu CPF..."
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mensagem de erro </small>
        </div>

        <div class="form-control">
          <label for="email">Email:</label>
          <input type="text" id="email" placeholder="Digite seu email..." />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mensagem de erro </small>
        </div>

        <div class="form-control">
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha..."
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mensagem de erro </small>
        </div>

        <div class="form-control">
          <label for="password-confirmation">Confirmação de senha:</label>
          <input
            type="password"
            id="password-confirmation"
            placeholder="Digite sua senha novamente..."
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mensagem de erro </small>
        </div>

        <button type="submit">Enviar</button>

        <div class="container">
          <dialog>
            <h1>Termos de Uso</h1>

            <p>
              📘 Termos de Uso e Política de Privacidade – Sistema de Biblioteca
              IFG 
                  Este sistema coleta e trata seus dados pessoais conforme a Lei
              Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD), integrando
              práticas de privacidade desde a concepção (privacy by design). Ao
              continuar, você declara estar ciente e de acordo com as seguintes
              condições: 
              🔒 Dados Coletados 
               - Nome completo, CPF, matrícula,
              e-mail institucional e senha (criptografada). 
              🎯 Finalidade 
               - Identificação no sistema; 
               - Registro e controle de empréstimos/devoluções de livros; 
               - Comunicação institucional com a biblioteca. 
              📁 Armazenamento 
               - Durante sua matrícula ativa e por
              até 5 anos após seu desligamento, conforme normas institucionais e
              legais.
              🔐 Segurança 
               - Seus dados são protegidos por criptografia,
              conexões seguras (HTTPS) e acesso controlado a servidores. 
              👥 Acesso e Compartilhamento 
               - Apenas você, bibliotecários e equipe
              técnica autorizada terão acesso aos seus dados. 
               - Os dados não são compartilhados com terceiros externos ao IFG. 
              🧾 Seus Direitos
              Você pode, a qualquer momento: 
                - Acessar e corrigir seus dados; 
                - Solicitar exclusão ou anonimização, quando aplicável; 
                - Obter informações sobre o uso dos seus dados.
            </p>

            <div class="terms-footer">
              <label class="terms-checkbox">
                <input type="checkbox" id="readCheckbox" />
                Li e concordo com os termos
              </label>

              <div class="terms-actions">
                <button id="confirmButton" disabled>Aceito</button>
              </div>
            </div>
          </dialog>
        </div>
      </form>
    </div>

    <script
      src="https://kit.fontawesome.com/39fa803a05.js"
      crossorigin="anonymous"
    ></script>
    <script src="jsfile.js"></script>
  </body>
</html>
