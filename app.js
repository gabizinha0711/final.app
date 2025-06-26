<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RammAccess</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #fff;
    }

    header {
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .nav-link:hover {
      background-color: #9c1a24 !important;
    }

    .profile-icon {
      font-size: 24px;
      color: #bd202e;
      cursor: pointer;
    }

    .auth-menu {
      position: absolute;
      top: 70px;
      right: 20px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      display: none;
      flex-direction: column;
      z-index: 1000;
    }

    .auth-menu button {
      padding: 10px;
      border: none;
      background-color: white;
      color: #bd202e;
      cursor: pointer;
      text-align: left;
    }

    .auth-menu button:hover {
      background-color: #f0f0f0;
    }

    .form-container {
      display: none;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;
      margin-top: 20px;
    }

    .form-container.active {
      display: block;
    }

    .footer-image {
      width: 100%;
      margin-top: 40px;
    }
  </style>
</head>

<body onclick="closeAuthMenu(event)">
  <header class="container-fluid py-2 px-4 d-flex justify-content-between align-items-center">
    <img src="/mnt/data/logo_.png" alt="RammAccess Logo" height="60">
    <div class="position-relative">
      <i class="fas fa-user-circle profile-icon" onclick="toggleAuthMenu(event)"></i>
      <div class="auth-menu" id="authMenu">
        <button onclick="showLogin()">Login</button>
        <button onclick="showRegister()">Criar Conta</button>
        <button onclick="logout()">Logout</button>
      </div>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 d-flex justify-content-around">
          <li class="nav-item"><a class="nav-link text-white" href="#sobre">Sobre Nós</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="#eventos">Próximos Eventos</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="#apoio">Apoio ao Cliente</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="#meet">Meet & Greet</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="#soundcheck">Soundcheck</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="form-container" id="loginForm">
      <h2>Login</h2>
      <input type="text" id="loginUsername" class="form-control mb-2" placeholder="Utilizador">
      <input type="password" id="loginPassword" class="form-control mb-2" placeholder="Palavra-passe">
      <button class="btn btn-danger w-100" onclick="login()">Entrar</button>
    </div>

    <div class="form-container" id="registerForm">
      <h2>Registo</h2>
      <input type="text" id="registerUsername" class="form-control mb-2" placeholder="Utilizador">
      <input type="password" id="registerPassword" class="form-control mb-2" placeholder="Palavra-passe">
      <button class="btn btn-danger w-100" onclick="register()">Criar Conta</button>
    </div>

    <div id="sobre" class="my-5">
      <h2>Sobre Nós</h2>
      <p> Somos uma empresa dedicada a oferecer aos fãs uma oportunidade única e exclusiva de vivenciar os bastidores e ensaios da renomada banda alemã Rammstein.
      Proporcionamos experiências personalizadas que permitem um acesso privilegiado aos momentos mais íntimos e autênticos da preparação da banda, garantindo uma conexão direta com o universo e a energia dos seus espetáculos.
      Nosso compromisso é transformar a paixão dos fãs em memórias inesquecíveis, através de um serviço exclusivo, seguro e de alta qualidade.</p>
    </div>

    <div id="eventos" class="my-5">
      <h2>Próximos Eventos</h2>
      <p>Em breve: Berlin, Lisboa, Madrid, Paris...</p>
    </div>

    <div id="apoio" class="my-5">
      <h2>Apoio ao Cliente</h2>
      <p>Entre em contacto connosco para qualquer dúvida ou assistência.</p>
    </div>

    <div id="meet" class="my-5">
      <h2>Meet & Greet</h2>
      <p>Conhece os membros da banda pessoalmente com o nosso pacote especial.</p>
    </div>

    <div id="soundcheck" class="my-5">
      <h2>Soundcheck</h2>
      <p>Acede aos bastidores durante os ensaios de som antes do concerto.</p>
    </div>

    <div id="profile" class="text-center my-4" style="display:none">
      <p id="welcomeUser" class="fw-bold"></p>
    </div>
  </div>

  <footer class="text-center mt-5">
    <img class="footer-image" src="/mnt/data/image.png" alt="Footer Design">
  </footer>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    function toggleAuthMenu(event) {
      event.stopPropagation();
      const menu = document.getElementById('authMenu');
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }

    function closeAuthMenu(event) {
      const menu = document.getElementById('authMenu');
      if (!event.target.closest('.auth-menu') && !event.target.closest('.profile-icon')) {
        menu.style.display = 'none';
      }
    }

    function showLogin() {
      document.getElementById('authMenu').style.display = 'none';
      document.getElementById('loginForm').classList.add('active');
      document.getElementById('registerForm').classList.remove('active');
    }

    function showRegister() {
      document.getElementById('authMenu').style.display = 'none';
      document.getElementById('registerForm').classList.add('active');
      document.getElementById('loginForm').classList.remove('active');
    }

    function register() {
      const username = document.getElementById('registerUsername').value;
      const password = document.getElementById('registerPassword').value;
      if (username && password) {
        localStorage.setItem('user_' + username, password);
        alert('Conta criada com sucesso!');
        showLogin();
      } else {
        alert('Preenche todos os campos.');
      }
    }

    function login() {
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      const storedPassword = localStorage.getItem('user_' + username);
      if (storedPassword === password) {
        document.getElementById('profile').style.display = 'block';
        document.getElementById('welcomeUser').innerText = 'Bem-vindo, ' + username + '!';
        document.getElementById('loginForm').classList.remove('active');
        document.getElementById('registerForm').classList.remove('active');
        document.getElementById('authMenu').style.display = 'none';
      } else {
        alert('Credenciais inválidas.');
      }
    }

    function logout() {
      document.getElementById('profile').style.display = 'none';
      document.getElementById('welcomeUser').innerText = '';
      document.getElementById('authMenu').style.display = 'none';
      document.getElementById('loginForm').classList.remove('active');
      document.getElementById('registerForm').classList.remove('active');
      alert('Sessão terminada com sucesso.');
    }
	const translations = {
  pt: {
    menu_about: "Sobre Nós",
    menu_events: "Próximos Eventos",
    menu_support: "Apoio ao Cliente",
    menu_meet: "Meet & Greet",
    menu_soundcheck: "Soundcheck",
    about_title: "Sobre Nós",
    about_content: "Somos uma empresa dedicada a oferecer aos fãs uma oportunidade única e exclusiva de vivenciar os bastidores e ensaios da renomada banda alemã Rammstein...",
    events_title: "Próximos Eventos",
    events_content: "Da banda em si não obtemos informação mas sabemos que haverá tour do vocalista",
    support_title: "Apoio ao Cliente",
    support_list: [
      "Como criar uma conta?",
      "Como redefinir minha senha?",
      "Como cancelar/excluir minha conta?",
      "Métodos de pagamento aceitos?",
      "Políticas de reembolso?"
    ],
    meet_title: "Meet & Greet",
    meet_list: [
      "Encontro exclusivo com a banda",
      "Experiência personalizada",
      "Ambiente intimista e privilegiado"
    ],
    soundcheck_title: "Soundcheck",
    soundcheck_list: [
      "Observação do som ao vivo",
      "Interação com engenheiros de som",
      "Acesso exclusivo à preparação do show"
    ]
  },
  en: {
    menu_about: "About Us",
    menu_events: "Upcoming Events",
    menu_support: "Customer Support",
    menu_meet: "Meet & Greet",
    menu_soundcheck: "Soundcheck",
    about_title: "About Us",
    about_content: "We are a company dedicated to offering fans a unique and exclusive opportunity to experience the backstage and rehearsals of the renowned German band Rammstein...",
    events_title: "Upcoming Events",
    events_content: "We don't have direct info from the band, but the lead singer will be touring soon",
    support_title: "Customer Support",
    support_list: [
      "How to create an account?",
      "How to reset my password?",
      "How to cancel/delete my account?",
      "What payment methods are accepted?",
      "Refund policy?"
    ],
    meet_title: "Meet & Greet",
    meet_list: [
      "Exclusive meeting with the band",
      "Personalized experience",
      "Intimate and exclusive environment"
    ],
    soundcheck_title: "Soundcheck",
    soundcheck_list: [
      "Live sound observation",
      "Interaction with sound engineers",
      "Exclusive access to show preparation"
    ]
  },
  es: {
    menu_about: "Sobre Nosotros",
    menu_events: "Próximos Eventos",
    menu_support: "Atención al Cliente",
    menu_meet: "Meet & Greet",
    menu_soundcheck: "Soundcheck",
    about_title: "Sobre Nosotros",
    about_content: "Somos una empresa dedicada a ofrecer a los fans una oportunidad única y exclusiva de vivir los bastidores y ensayos de la reconocida banda alemana Rammstein...",
    events_title: "Próximos Eventos",
    events_content: "No tenemos información directa de la banda, pero habrá una gira del vocalista",
    support_title: "Atención al Cliente",
    support_list: [
      "¿Cómo crear una cuenta?",
      "¿Cómo restablecer mi contraseña?",
      "¿Cómo cancelar/eliminar mi cuenta?",
      "¿Métodos de pago aceptados?",
      "¿Política de reembolso?"
    ],
    meet_title: "Meet & Greet",
    meet_list: [
      "Encuentro exclusivo con la banda",
      "Experiencia personalizada",
      "Entorno íntimo y privilegiado"
    ],
    soundcheck_title: "Soundcheck",
    soundcheck_list: [
      "Observación del sonido en vivo",
      "Interacción con ingenieros de sonido",
      "Acceso exclusivo a la preparación del show"
    ]
  },
  it: {
    menu_about: "Chi Siamo",
    menu_events: "Prossimi Eventi",
    menu_support: "Assistenza Clienti",
    menu_meet: "Meet & Greet",
    menu_soundcheck: "Soundcheck",
    about_title: "Chi Siamo",
    about_content: "Siamo un'azienda dedicata a offrire ai fan un'opportunità unica ed esclusiva di vivere il backstage e le prove della rinomata band tedesca Rammstein...",
    events_title: "Prossimi Eventi",
    events_content: "Non abbiamo info dirette dalla band, ma ci sarà un tour del cantante",
    support_title: "Assistenza Clienti",
    support_list: [
      "Come creare un account?",
      "Come reimpostare la password?",
      "Come cancellare/eliminare il mio account?",
      "Quali metodi di pagamento accettate?",
      "Politica di rimborso?"
    ],
    meet_title: "Meet & Greet",
    meet_list: [
      "Incontro esclusivo con la band",
      "Esperienza personalizzata",
      "Ambiente intimo e privilegiato"
    ],
    soundcheck_title: "Soundcheck",
    soundcheck_list: [
      "Osservazione del suono dal vivo",
      "Interazione con tecnici del suono",
      "Accesso esclusivo alla preparazione dello spettacolo"
    ]
  },
  de: {
    menu_about: "Über Uns",
    menu_events: "Kommende Veranstaltungen",
    menu_support: "Kundensupport",
    menu_meet: "Meet & Greet",
    menu_soundcheck: "Soundcheck",
    about_title: "Über Uns",
    about_content: "Wir sind ein Unternehmen, das sich darauf spezialisiert hat, Fans eine einzigartige und exklusive Gelegenheit zu bieten, hinter die Kulissen und zu den Proben der renommierten deutschen Band Rammstein zu gelangen...",
    events_title: "Kommende Veranstaltungen",
    events_content: "Wir haben keine direkten Infos von der Band, aber der Sänger wird bald auf Tour gehen",
    support_title: "Kundensupport",
    support_list: [
      "Wie erstelle ich ein Konto?",
      "Wie setze ich mein Passwort zurück?",
      "Wie kündige/lösche ich mein Konto?",
      "Welche Zahlungsmethoden werden akzeptiert?",
      "Rückerstattungsrichtlinien?"
    ],
    meet_title: "Meet & Greet",
    meet_list: [
      "Exklusives Treffen mit der Band",
      "Personalisierte Erfahrung",
      "Intime und exklusive Atmosphäre"
    ],
    soundcheck_title: "Soundcheck",
    soundcheck_list: [
      "Live-Sound-Beobachtung",
      "Interaktion mit Toningenieuren",
      "Exklusiver Zugang zur Show-Vorbereitung"
    ]
  }
};
  </script>
</body>

</html>