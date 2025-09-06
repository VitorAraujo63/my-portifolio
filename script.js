// Translations object
const translations = {
  "pt-BR": {
    "page-title": "Vitor H. | Desenvolvedor Front-end & Back-end",
    "page-title-thanks": "Obrigado! | Vitor H.",
    "nav-home": "Início",
    "nav-about": "Sobre",
    "nav-services": "Tecnologias",
    "nav-experience": "Experiência",
    "nav-portfolio": "Projetos",
    "nav-contact": "Contato",
    "hero-subtitle": "Desenvolvedor Front-end & Back-end",
    "hero-btn-work": "Ver Meu Trabalho",
    "hero-btn-contact": "Entre em Contato",
    "about-title": "Sobre Mim",
    "about-text-1": "Sou um desenvolvedor back-end e front-end, e continuo tentando me aprofundar e entender cada vez mais conceitos. Estou estudando Laravel (framework PHP) e Vue.js para me aprofundar e continuar trabalhando com essas tecnologias. Também estou cursando ciência da computação na Unimar.",
    "about-text-2": "Quando não estou programando ou estudando, gosto de jogar alguns jogos como Valorant, Call Of Duty, Formula 1 e também gosto muito de ouvir música e assistir séries.",
    "services-title": "Tecnologias",
    "services-subtitle": "Tecnologias e ferramentas que uso em minhas aplicações",
    "experience-title": "Experiência Profissional",
    "experience-subtitle": "Minha jornada profissional e marcos da carreira",
    "exp1-title": "Analista de Suporte I",
    "exp1-desc": "Em janeiro de 2025, fui contratado pela empresa. Como meu contrato estava chegando ao fim, graças ao meu esforço e desempenho, conquistei a posição onde trabalho atualmente. Me sinto honrado e feliz por confiarem no meu trabalho, e continuo aprendendo e me desenvolvendo cada vez mais.",
    "exp2-title": "Mentor DevMenthors",
    "exp2-desc": "Em 2024, o DevMenthors foi brevemente interrompido, mas ex-alunos quiseram reabrir o curso novamente. Em vez de sermos alunos, seremos mentores. Ensinaremos estudantes do ensino médio para aumentar seus conhecimentos e prepará-los para o mercado de trabalho.",
    "exp3-title": "Estagiário Analista de Suporte",
    "exp3-desc": "Durante o período de fevereiro de 2024 a janeiro de 2025, fui estagiário na Tray, trabalhando como analista de suporte I, onde pude me desenvolver e entender mais profundamente como um e-commerce realmente funcionava.",
    "exp4-title": "Estudante DevMenthors",
    "exp4-desc": "Durante os anos de 2022 e 2023 fui estudante no DevMenthors, onde conteúdos como Docker, Node.js, Flutter, Linguagem GO foram ensinados por estudantes universitários.",
    "exp5-title": "Informática para Internet",
    "exp5-desc": "Ensino médio integrado com ensino técnico, me formei em 2023. Nesta formação pude aprender um pouco mais sobre desenvolvimento mobile, desenvolvimento web com HTML, CSS e PHP.",
    "portfolio-title": "Meus Projetos",
    "portfolio-subtitle": "Aqui estão alguns dos projetos em que trabalhei recentemente.",
    "project0-title": "Site <span class='devmenthors'>DevMenthors</span>",
    "project0-desc": "Desenvolvimento do site do <span class='devmenthors'>DevMenthors</span>, feito em laravel utilizando docker para gerenciar o projeto e banco de dados local, é utilizado docker image no deploy do projeto, fazendo o <strong>CI/CD</strong> com GitHub Actions e Docker Hub. <hr><br>O DevMenthors é um projeto de extensão educacional focado em tecnologia, no qual estudantes universitários atuam como mentores, ensinando programação e tecnologias atuais para alunos do ensino médio com o objetivo de prepará-los para o mercado de trabalho e despertar seu interesse pela área. A essência da iniciativa reside em seu modelo de mentoria, onde universitários mais experientes compartilham conhecimento prático em temas como HTML, CSS, PHP, Figma, Banco de dados e Empreendedorismo. Com um forte vínculo comunitário com as universidades de Marília, o projeto conecta o ambiente acadêmico à comunidade local, consolidando-se como uma forma de capacitação tecnológica gratuita e de alta qualidade, feita por estudantes para estudantes.",
    "project1-title": "Gerenciamento de Usuário",
    "project1-desc": "Esta API foi desenvolvida para o projeto acadêmico <strong>TalkLog</strong>, utilizando Node.js em conjunto com o Supabase para o gerenciamento de usuários. A solução permite que cada usuário tenha um perfil, com a possibilidade de alterar suas informações pessoais e foto de perfil. Todo o processo de autenticação é realizado via <strong>JWT</strong> (JSON Web Token), garantindo a validação da sessão do usuário logado. Adicionalmente, foi implementado um sistema de login social com o Google, integrado diretamente ao Supabase para uma experiência de acesso simplificada.",
    "project2-title": "Gravador e Transcrição",
    "project2-desc": "Desenvolvido em Python para o projeto acadêmico <strong>TalkLog</strong>, este sistema grava o audio das reuniões e transcreve o áudio em arquivos de texto (.txt) utilizando a biblioteca <strong>Whisper</strong> da OpenAI. As transcrições são enviadas ao Supabase, onde um serviço automatizado na <strong>AWS</strong> as processa para gerar resumos automáticos. Esta solução evoluiu de um armazenamento local com MinIO para a nuvem, garantindo maior integração e acessibilidade ao projeto.",
    "project3-title": "Sistema ERP em Laravel",
    "project3-desc": "API robusta para ERP desenvolvida em Laravel, permitindo a gestão de clientes, vendas, categorias e produtos, com dashboard e exportação de dados em CSV. Seu grande diferencial é a criação de produtos via <strong>código de barras (EAN)</strong>: o sistema consulta a API da Bluesoft Cosmos para cadastrar nome e imagem automaticamente, simplificando e agilizando o processo para qualquer usuário. Toda a API foi documentada com <strong>Swagger (OpenAPI)</strong> para facilitar a integração com aplicações front-end.",
    "btn-code": "Código",
    "btn-demo": "Ver site",
    "status-dev": "Em desenvolvimento...",
    "contact-title": "Vamos nos Conectar",
    "contact-subtitle": "Tem um projeto em mente? Entre em contato e vamos criar algo incrível juntos.",
    "contact-email": "Email",
    "contact-phone": "Telefone",
    "contact-location": "Localização",
    "form-name": "Nome",
    "form-name-placeholder": "Seu nome",
    "form-email": "Email",
    "form-email-placeholder": "Seu email",
    "form-subject": "Assunto",
    "form-subject-placeholder": "Assunto",
    "form-message": "Mensagem",
    "form-message-placeholder": "Sua mensagem",
    "form-send": "Enviar Mensagem",
    "footer-rights": "Todos os direitos reservados.",
    "thanks-title": "Obrigado!",
    "thanks-message": "Sua mensagem foi enviada com sucesso. Agradecemos pelo seu contato!<br>Responderemos o mais breve possível.",
    "thanks-btn-home": "Voltar para a Home",
    "thanks-btn-contact": "Enviar outra mensagem",
  },
  en: {
    "page-title": "Vitor H. | Front-end & Back-end Developer",
    "page-title-thanks": "Thank You! | Vitor H.",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-services": "Technologies",
    "nav-experience": "Experience",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",
    "hero-subtitle": "Front-end & Back-end Developer",
    "hero-btn-work": "View My Work",
    "hero-btn-contact": "Contact Me",
    "about-title": "About Me",
    "about-text-1": "I am a back-end and front-end developer, and I continue trying to delve deeper and understand more and more concepts. I am studying Laravel (PHP framework) and Vue.js to deepen my knowledge and continue working with these technologies. I am also currently studying computer science at Unimar.",
    "about-text-2": "When I'm not programming or studying, I like to play some games like Valorant, Call Of Duty, Formula 1 and I also really like listening to music and watching series.",
    "services-title": "Technologies",
    "services-subtitle": "Technologies and tools I use in my applications",
    "experience-title": "Work Experience",
    "experience-subtitle": "My professional journey and career milestones",
    "exp1-title": "Support Analyst I",
    "exp1-desc": "In January 2025, I was hired by the company. As my contract was coming to an end, thanks to my effort and performance, I won the position where I am currently working. I feel honored and happy that they trust my work, and I continue to learn and develop more and more.",
    "exp2-title": "DevMenthors Mentor",
    "exp2-desc": "In 2024, DevMenthors was briefly interrupted, but former students wanted to reopen the course again. Instead of being students, we will be mentors. We will teach high school students to increase their knowledge and prepare them for the job market.",
    "exp3-title": "Trainee Support Analyst",
    "exp3-desc": "During the period from February 2024 to January 2025, I was a trainee at Tray, working as a support analyst I, where I was able to develop myself and understand more deeply how an e-commerce really worked.",
    "exp4-title": "DevMenthors Student",
    "exp4-desc": "During the years 2022 and 2023 I was a student at DevMenthors, where content such as Docker, Node.js, Flutter, GO Language was taught by college students.",
    "exp5-title": "Internet Computing",
    "exp5-desc": "High school education integrated with technical education, I graduated in 2023. In this education I was able to learn a little more about mobile development, web development with HTML, CSS and PHP.",
    "portfolio-title": "My Projects",
    "portfolio-subtitle": "Here are some of the projects I've worked on recently.",
    "project0-title": "<span class='devmenthors'>DevMenthors</span> Website",
    "project0-desc": "Development of the <span class='devmenthors'>DevMenthors</span> website, built in Laravel using Docker to manage the project and local database. A Docker image is used for project deployment, implementing <strong>CI/CD</strong> with GitHub Actions and Docker Hub. <hr><br>DevMenthors is an educational extension project focused on technology, where university students act as mentors, teaching current programming and technologies to high school students to prepare them for the job market and spark their interest in the field. The initiative's essence lies in its mentorship model, where more experienced university students share practical knowledge on topics like HTML, CSS, PHP, Figma, Databases, and Entrepreneurship. With a strong community bond with universities in Marília, the project connects the academic environment with the local community, establishing itself as a high-quality, free technological training program made by students for students.",
    "project1-title": "User Management",
    "project1-desc": "This API was developed for the academic project <strong>TalkLog</strong>, using Node.js with Supabase for user management. The solution allows each user to have a profile, with the ability to change their personal information and profile picture. The entire authentication process is done via <strong>JWT</strong> (JSON Web Token), ensuring the validation of the logged-in user's session. Additionally, a social login system with Google was implemented, integrated directly with Supabase for a simplified access experience.",
    "project2-title": "Recorder and Transcription",
    "project2-desc": "Developed in Python for the academic project <strong>TalkLog</strong>, this system records meeting audio and transcribes it into text files (.txt) using OpenAI's <strong>Whisper</strong> library. The transcriptions are sent to Supabase, where an automated service on <strong>AWS</strong> processes them to generate automatic summaries. This solution evolved from local storage with MinIO to the cloud, ensuring greater integration and accessibility for the project.",
    "project3-title": "ERP System in Laravel",
    "project3-desc": "A robust API for ERP developed in Laravel, allowing the management of clients, sales, categories, and products, with a dashboard and CSV data export. Its main differentiator is the product creation via <strong>barcode (EAN)</strong>: the system queries the Bluesoft Cosmos API to automatically register the name and image, simplifying and speeding up the process for any user. The entire API was documented with <strong>Swagger (OpenAPI)</strong> to facilitate integration with front-end applications.",
    "btn-code": "Code",
    "btn-demo": "View site",
    "status-dev": "In development...",
    "contact-title": "Let's Connect",
    "contact-subtitle": "Have a project in mind? Get in touch and let's create something amazing together.",
    "contact-email": "Email",
    "contact-phone": "Phone",
    "contact-location": "Location",
    "form-name": "Name",
    "form-name-placeholder": "Your name",
    "form-email": "Email",
    "form-email-placeholder": "Your email",
    "form-subject": "Subject",
    "form-subject-placeholder": "Subject",
    "form-message": "Message",
    "form-message-placeholder": "Your message",
    "form-send": "Send Message",
    "footer-rights": "All rights reserved.",
    "thanks-title": "Thank You!",
    "thanks-message": "Your message has been sent successfully. Thank you for contacting us!<br>We will respond as soon as possible.",
    "thanks-btn-home": "Back to Home",
    "thanks-btn-contact": "Send another message",
  },
  de: {
    "page-title": "Vitor H. | Front-end & Back-end Entwickler",
    "page-title-thanks": "Danke! | Vitor H.",
    "nav-home": "Startseite",
    "nav-about": "Über mich",
    "nav-services": "Technologien",
    "nav-experience": "Erfahrung",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Kontakt",
    "hero-subtitle": "Front-end & Back-end Entwickler",
    "hero-btn-work": "Meine Arbeit ansehen",
    "hero-btn-contact": "Kontaktiere mich",
    "about-title": "Über mich",
    "about-text-1": "Ich bin ein Back-end- und Front-end-Entwickler und versuche weiterhin, tiefer einzutauchen und immer mehr Konzepte zu verstehen. Ich studiere Laravel (PHP-Framework) und Vue.js, um mein Wissen zu vertiefen und weiterhin mit diesen Technologien zu arbeiten. Ich studiere auch derzeit Informatik an der Unimar.",
    "about-text-2": "Wenn ich nicht programmiere oder studiere, spiele ich gerne einige Spiele wie Valorant, Call Of Duty, Formula 1 und höre auch sehr gerne Musik und schaue Serien.",
    "services-title": "Technologien",
    "services-subtitle": "Technologien und Tools, die ich in meinen Anwendungen verwende",
    "experience-title": "Berufserfahrung",
    "experience-subtitle": "Meine berufliche Laufbahn und Karriere-Meilensteine",
    "exp1-title": "Support-Analyst I",
    "exp1-desc": "Im Januar 2025 wurde ich von dem Unternehmen eingestellt. Da mein Vertrag zu Ende ging, habe ich dank meiner Anstrengung und Leistung die Position gewonnen, in der ich derzeit arbeite. Ich fühle mich geehrt und glücklich, dass sie meiner Arbeit vertrauen, und ich lerne und entwickle mich weiter.",
    "exp2-title": "DevMenthors Mentor",
    "exp2-desc": "Im Jahr 2024 wurde DevMenthors kurz unterbrochen, aber ehemalige Studenten wollten den Kurs wieder eröffnen. Anstatt Studenten zu sein, werden wir Mentoren sein. Wir werden Gymnasiasten unterrichten, um ihr Wissen zu erweitern und sie auf den Arbeitsmarkt vorzubereiten.",
    "exp3-title": "Praktikant Support-Analyst",
    "exp3-desc": "Während der Zeit von Februar 2024 bis Januar 2025 war ich Praktikant bei Tray und arbeitete als Support-Analyst I, wo ich mich entwickeln und tiefer verstehen konnte, wie ein E-Commerce wirklich funktioniert.",
    "exp4-title": "DevMenthors Student",
    "exp4-desc": "In den Jahren 2022 und 2023 war ich Student bei DevMenthors, wo Inhalte wie Docker, Node.js, Flutter, GO-Sprache von Universitätsstudenten unterrichtet wurden.",
    "exp5-title": "Internet-Informatik",
    "exp5-desc": "Gymnasialausbildung integriert mit technischer Ausbildung, ich habe 2023 abgeschlossen. In dieser Ausbildung konnte ich etwas mehr über mobile Entwicklung, Webentwicklung mit HTML, CSS und PHP lernen.",
    "portfolio-title": "Meine Projekte",
    "portfolio-subtitle": "Hier sind einige der Projekte, an denen ich kürzlich gearbeitet habe.",
    "project0-title": "<span class='devmenthors'>DevMenthors</span> Webseite",
    "project0-desc": "Entwicklung der <span class='devmenthors'>DevMenthors</span>-Webseite, erstellt in Laravel mit Docker zur Verwaltung des Projekts und der lokalen Datenbank. Ein Docker-Image wird für die Bereitstellung des Projekts verwendet, wobei <strong>CI/CD</strong> mit GitHub Actions und Docker Hub implementiert wird. <hr><br>DevMenthors ist ein Bildungserweiterungsprojekt mit Schwerpunkt auf Technologie, bei dem Universitätsstudenten als Mentoren fungieren und Gymnasiasten aktuelle Programmierung und Technologien beibringen, um sie auf den Arbeitsmarkt vorzubereiten und ihr Interesse für das Fachgebiet zu wecken. Das Wesen der Initiative liegt in ihrem Mentorenmodell, bei dem erfahrenere Universitätsstudenten praktisches Wissen zu Themen wie HTML, CSS, PHP, Figma, Datenbanken und Unternehmertum teilen. Mit einer starken gemeinschaftlichen Bindung zu den Universitäten in Marília verbindet das Projekt das akademische Umfeld mit der lokalen Gemeinschaft und etabliert sich als hochwertiges, kostenloses technologisches Schulungsprogramm von Studenten für Studenten.",
    "project1-title": "Benutzerverwaltung",
    "project1-desc": "Diese API wurde für das akademische Projekt <strong>TalkLog</strong> entwickelt und verwendet Node.js zusammen mit Supabase zur Benutzerverwaltung. Die Lösung ermöglicht es jedem Benutzer, ein Profil mit der Möglichkeit zu haben, seine persönlichen Informationen und sein Profilbild zu ändern. Der gesamte Authentifizierungsprozess erfolgt über <strong>JWT</strong> (JSON Web Token), um die Sitzung des angemeldeten Benutzers zu validieren. Zusätzlich wurde ein soziales Anmeldesystem mit Google implementiert, das direkt in Supabase integriert ist, um einen vereinfachten Zugriff zu ermöglichen.",
    "project2-title": "Rekorder und Transkription",
    "project2-desc": "Entwickelt in Python für das akademische Projekt <strong>TalkLog</strong>, zeichnet dieses System Besprechungsaudio auf und transkribiert es in Textdateien (.txt) mit der <strong>Whisper</strong>-Bibliothek von OpenAI. Die Transkriptionen werden an Supabase gesendet, wo ein automatisierter Dienst auf <strong>AWS</strong> sie verarbeitet, um automatische Zusammenfassungen zu erstellen. Diese Lösung entwickelte sich von einem lokalen Speicher mit MinIO in die Cloud und gewährleistet so eine bessere Integration und Zugänglichkeit für das Projekt.",
    "project3-title": "ERP-System in Laravel",
    "project3-desc": "Eine robuste API für ERP, entwickelt in Laravel, die die Verwaltung von Kunden, Verkäufen, Kategorien und Produkten ermöglicht, mit einem Dashboard und CSV-Datenexport. Ihr Hauptunterscheidungsmerkmal ist die Produkterstellung über <strong>Barcode (EAN)</strong>: Das System fragt die Bluesoft Cosmos API ab, um Name und Bild automatisch zu registrieren, was den Prozess für jeden Benutzer vereinfacht und beschleunigt. Die gesamte API wurde mit <strong>Swagger (OpenAPI)</strong> dokumentiert, um die Integration mit Front-End-Anwendungen zu erleichtern.",
    "btn-code": "Code",
    "btn-demo": "Seite ansehen",
    "status-dev": "In Entwicklung...",
    "contact-title": "Lass uns verbinden",
    "contact-subtitle": "Haben Sie ein Projekt im Kopf? Nehmen Sie Kontakt auf und lassen Sie uns gemeinsam etwas Erstaunliches schaffen.",
    "contact-email": "E-Mail",
    "contact-phone": "Telefon",
    "contact-location": "Standort",
    "form-name": "Name",
    "form-name-placeholder": "Ihr Name",
    "form-email": "E-Mail",
    "form-email-placeholder": "Ihre E-Mail",
    "form-subject": "Betreff",
    "form-subject-placeholder": "Betreff",
    "form-message": "Nachricht",
    "form-message-placeholder": "Ihre Nachricht",
    "form-send": "Nachricht senden",
    "footer-rights": "Alle Rechte vorbehalten.",
    "thanks-title": "Danke!",
    "thanks-message": "Ihre Nachricht wurde erfolgreich gesendet. Vielen Dank für Ihre Kontaktaufnahme!<br>Wir werden so schnell wie möglich antworten.",
    "thanks-btn-home": "Zurück zur Startseite",
    "thanks-btn-contact": "Weitere Nachricht senden",
  },
  fr: {
    "page-title": "Vitor H. | Développeur Front-end & Back-end",
    "page-title-thanks": "Merci! | Vitor H.",
    "nav-home": "Accueil",
    "nav-about": "À propos",
    "nav-services": "Technologies",
    "nav-experience": "Expérience",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",
    "hero-subtitle": "Développeur Front-end & Back-end",
    "hero-btn-work": "Voir mon travail",
    "hero-btn-contact": "Me contacter",
    "about-title": "À propos de moi",
    "about-text-1": "Je suis un développeur back-end et front-end, et je continue d'essayer d'approfondir et de comprendre de plus en plus de concepts. J'étudie Laravel (framework PHP) et Vue.js pour approfondir mes connaissances et continuer à travailler avec ces technologies. J'étudie également actuellement l'informatique à l'Unimar.",
    "about-text-2": "Quand je ne programme pas ou n'étudie pas, j'aime jouer à quelques jeux comme Valorant, Call Of Duty, Formula 1 et j'aime aussi beaucoup écouter de la musique et regarder des séries.",
    "services-title": "Technologies",
    "services-subtitle": "Technologies et outils que j'utilise dans mes applications",
    "experience-title": "Expérience professionnelle",
    "experience-subtitle": "Mon parcours professionnel et les étapes de ma carrière",
    "exp1-title": "Analyste de support I",
    "exp1-desc": "En janvier 2025, j'ai été embauché par l'entreprise. Comme mon contrat touchait à sa fin, grâce à mes efforts et à mes performances, j'ai obtenu le poste où je travaille actuellement. Je me sens honoré et heureux qu'ils fassent confiance à mon travail, et je continue d'apprendre et de me développer de plus en plus.",
    "exp2-title": "Mentor DevMenthors",
    "exp2-desc": "En 2024, DevMenthors a été brièvement interrompu, mais d'anciens étudiants ont voulu rouvrir le cours. Au lieu d'être étudiants, nous serons mentors. Nous enseignerons aux lycéens pour augmenter leurs connaissances et les préparer au marché du travail.",
    "exp3-title": "Stagiaire Analyste de support",
    "exp3-desc": "Pendant la période de février 2024 à janvier 2025, j'étais stagiaire chez Tray, travaillant comme analyste de support I, où j'ai pu me développer et comprendre plus profondément comment fonctionne vraiment un e-commerce.",
    "exp4-title": "Étudiant DevMenthors",
    "exp4-desc": "Pendant les années 2022 et 2023, j'étais étudiant chez DevMenthors, où des contenus comme Docker, Node.js, Flutter, le langage GO étaient enseignés par des étudiants universitaires.",
    "exp5-title": "Informatique pour Internet",
    "exp5-desc": "Enseignement secondaire intégré à l'enseignement technique, j'ai obtenu mon diplôme en 2023. Dans cette formation, j'ai pu apprendre un peu plus sur le développement mobile, le développement web avec HTML, CSS et PHP.",
    "portfolio-title": "Mes projets",
    "portfolio-subtitle": "Voici quelques-uns des projets sur lesquels j'ai travaillé récemment.",
    "project0-title": "Site Web <span class='devmenthors'>DevMenthors</span>",
    "project0-desc": "Développement du site Web de <span class='devmenthors'>DevMenthors</span>, réalisé en Laravel avec Docker pour gérer le projet et la base de données locale. Une image Docker est utilisée pour le déploiement du projet, en implémentant le <strong>CI/CD</strong> avec GitHub Actions et Docker Hub. <hr><br>DevMenthors est un projet d'extension éducative axé sur la technologie, où des étudiants universitaires agissent comme mentors, enseignant la programmation et les technologies actuelles à des lycéens pour les préparer au marché du travail et susciter leur intérêt pour le domaine. L'essence de l'initiative réside dans son modèle de mentorat, où des étudiants universitaires plus expérimentés partagent des connaissances pratiques sur des sujets tels que HTML, CSS, PHP, Figma, les bases de données et l'entrepreneuriat. Avec un lien communautaire fort avec les universités de Marília, le projet relie l'environnement académique à la communauté locale, s'établissant comme un programme de formation technologique gratuit et de haute qualité, fait par des étudiants pour des étudiants.",
    "project1-title": "Gestion des utilisateurs",
    "project1-desc": "Cette API a été développée pour le projet académique <strong>TalkLog</strong>, en utilisant Node.js avec Supabase pour la gestion des utilisateurs. La solution permet à chaque utilisateur d'avoir un profil, avec la possibilité de modifier ses informations personnelles et sa photo de profil. L'ensemble du processus d'authentification se fait via <strong>JWT</strong> (JSON Web Token), garantissant la validation de la session de l'utilisateur connecté. De plus, un système de connexion sociale avec Google a été mis en œuvre, directement intégré à Supabase pour une expérience d'accès simplifiée.",
    "project2-title": "Enregistreur et Transcription",
    "project2-desc": "Développé en Python pour le projet académique <strong>TalkLog</strong>, ce système enregistre l'audio des réunions et le transcrit en fichiers texte (.txt) à l'aide de la bibliothèque <strong>Whisper</strong> d'OpenAI. Les transcriptions sont envoyées à Supabase, où un service automatisé sur <strong>AWS</strong> les traite pour générer des résumés automatiques. Cette solution a évolué d'un stockage local avec MinIO vers le cloud, assurant une meilleure intégration et accessibilité au projet.",
    "project3-title": "Système ERP en Laravel",
    "project3-desc": "Une API robuste pour ERP développée en Laravel, permettant la gestion des clients, des ventes, des catégories et des produits, avec un tableau de bord et une exportation de données en CSV. Son principal différenciateur est la création de produits via <strong>code-barres (EAN)</strong> : le système interroge l'API de Bluesoft Cosmos pour enregistrer automatiquement le nom et l'image, simplifiant et accélérant le processus pour tout utilisateur. L'ensemble de l'API a été documenté avec <strong>Swagger (OpenAPI)</strong> pour faciliter l'intégration avec les applications front-end.",
    "btn-code": "Code",
    "btn-demo": "Voir le site",
    "status-dev": "En développement...",
    "contact-title": "Connectons-nous",
    "contact-subtitle": "Vous avez un projet en tête ? Contactez-moi et créons quelque chose d'incroyable ensemble.",
    "contact-email": "E-mail",
    "contact-phone": "Téléphone",
    "contact-location": "Localisation",
    "form-name": "Nom",
    "form-name-placeholder": "Votre nom",
    "form-email": "E-mail",
    "form-email-placeholder": "Votre e-mail",
    "form-subject": "Sujet",
    "form-subject-placeholder": "Sujet",
    "form-message": "Message",
    "form-message-placeholder": "Votre message",
    "form-send": "Envoyer le message",
    "footer-rights": "Tous droits réservés.",
    "thanks-title": "Merci!",
    "thanks-message": "Votre message a été envoyé avec succès. Merci de nous avoir contactés!<br>Nous répondrons dans les plus brefs délais.",
    "thanks-btn-home": "Retour à l'accueil",
    "thanks-btn-contact": "Envoyer un autre message",
  },
  it: {
    "page-title": "Vitor H. | Sviluppatore Front-end & Back-end",
    "page-title-thanks": "Grazie! | Vitor H.",
    "nav-home": "Home",
    "nav-about": "Chi sono",
    "nav-services": "Tecnologie",
    "nav-experience": "Esperienza",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contatto",
    "hero-subtitle": "Sviluppatore Front-end & Back-end",
    "hero-btn-work": "Vedi il mio lavoro",
    "hero-btn-contact": "Contattami",
    "about-title": "Chi sono",
    "about-text-1": "Sono uno sviluppatore back-end e front-end, e continuo a cercare di approfondire e comprendere sempre più concetti. Sto studiando Laravel (framework PHP) e Vue.js per approfondire le mie conoscenze e continuare a lavorare con queste tecnologie. Sto anche attualmente studiando informatica all'Unimar.",
    "about-text-2": "Quando non sto programmando o studiando, mi piace giocare ad alcuni giochi come Valorant, Call Of Duty, Formula 1 e mi piace anche molto ascoltare musica e guardare serie.",
    "services-title": "Tecnologie",
    "services-subtitle": "Tecnologie e strumenti che uso nelle mie applicazioni",
    "experience-title": "Esperienza lavorativa",
    "experience-subtitle": "Il mio percorso professionale e le tappe della carriera",
    "exp1-title": "Analista di supporto I",
    "exp1-desc": "Nel gennaio 2025, sono stato assunto dall'azienda. Poiché il mio contratto stava per scadere, grazie al mio impegno e alle mie prestazioni, ho ottenuto la posizione in cui lavoro attualmente. Mi sento onorato e felice che si fidino del mio lavoro, e continuo ad imparare e svilupparmi sempre di più.",
    "exp2-title": "Mentor DevMenthors",
    "exp2-desc": "Nel 2024, DevMenthors è stato brevemente interrotto, ma ex studenti hanno voluto riaprire il corso. Invece di essere studenti, saremo mentori. Insegneremo agli studenti delle scuole superiori per aumentare le loro conoscenze e prepararli per il mercato del lavoro.",
    "exp3-title": "Tirocinante Analista di supporto",
    "exp3-desc": "Durante il periodo da febbraio 2024 a gennaio 2025, sono stato tirocinante presso Tray, lavorando come analista di supporto I, dove ho potuto svilupparmi e capire più profondamente come funziona davvero un e-commerce.",
    "exp4-title": "Studente DevMenthors",
    "exp4-desc": "Durante gli anni 2022 e 2023 sono stato studente presso DevMenthors, dove contenuti come Docker, Node.js, Flutter, linguaggio GO sono stati insegnati da studenti universitari.",
    "exp5-title": "Informatica per Internet",
    "exp5-desc": "Istruzione secondaria integrata con istruzione tecnica, mi sono diplomato nel 2023. In questa formazione ho potuto imparare un po' di più sullo sviluppo mobile, sviluppo web con HTML, CSS e PHP.",
    "portfolio-title": "I miei progetti",
    "portfolio-subtitle": "Ecco alcuni dei progetti a cui ho lavorato di recente.",
    "project0-title": "Sito Web <span class='devmenthors'>DevMenthors</span>",
    "project0-desc": "Sviluppo del sito web di <span class='devmenthors'>DevMenthors</span>, realizzato in Laravel utilizzando Docker per gestire il progetto e il database locale. Viene utilizzata un'immagine Docker per il deployment del progetto, implementando <strong>CI/CD</strong> con GitHub Actions e Docker Hub. <hr><br>DevMenthors è un progetto di estensione educativa focalizzato sulla tecnologia, in cui studenti universitari agiscono come mentori, insegnando programmazione e tecnologie attuali a studenti delle scuole superiori per prepararli al mercato del lavoro e suscitare il loro interesse per il settore. L'essenza dell'iniziativa risiede nel suo modello di mentorato, in cui studenti universitari più esperti condividono conoscenze pratiche su argomenti come HTML, CSS, PHP, Figma, database e imprenditorialità. Con un forte legame comunitario con le università di Marília, il progetto collega l'ambiente accademico con la comunità locale, consolidandosi come un programma di formazione tecnologica gratuito e di alta qualità, fatto da studenti per studenti.",
    "project1-title": "Gestione Utenti",
    "project1-desc": "Questa API è stata sviluppata per il progetto accademico <strong>TalkLog</strong>, utilizzando Node.js insieme a Supabase per la gestione degli utenti. La soluzione consente a ciascun utente di avere un profilo, con la possibilità di modificare le proprie informazioni personali e l'immagine del profilo. L'intero processo di autenticazione avviene tramite <strong>JWT</strong> (JSON Web Token), garantendo la convalida della sessione dell'utente autenticato. Inoltre, è stato implementato un sistema di login social con Google, integrato direttamente con Supabase per un'esperienza di accesso semplificata.",
    "project2-title": "Registratore e Trascrizione",
    "project2-desc": "Sviluppato in Python per il progetto accademico <strong>TalkLog</strong>, questo sistema registra l'audio delle riunioni e lo trascrive in file di testo (.txt) utilizzando la libreria <strong>Whisper</strong> di OpenAI. Le trascrizioni vengono inviate a Supabase, dove un servizio automatizzato su <strong>AWS</strong> le elabora per generare riassunti automatici. Questa soluzione si è evoluta da un'archiviazione locale con MinIO al cloud, garantendo una maggiore integrazione e accessibilità al progetto.",
    "project3-title": "Sistema ERP in Laravel",
    "project3-desc": "Una robusta API per ERP sviluppata in Laravel, che consente la gestione di clienti, vendite, categorie e prodotti, con una dashboard e l'esportazione di dati in CSV. Il suo principale elemento di differenziazione è la creazione di prodotti tramite <strong>codice a barre (EAN)</strong>: il sistema interroga l'API di Bluesoft Cosmos per registrare automaticamente nome e immagine, semplificando e velocizzando il processo per qualsiasi utente. L'intera API è stata documentata con <strong>Swagger (OpenAPI)</strong> per facilitare l'integrazione con le applicazioni front-end.",
    "btn-code": "Codice",
    "btn-demo": "Vedi il sito",
    "status-dev": "In fase di sviluppo...",
    "contact-title": "Connettiamoci",
    "contact-subtitle": "Hai un progetto in mente? Mettiti in contatto e creiamo qualcosa di incredibile insieme.",
    "contact-email": "Email",
    "contact-phone": "Telefono",
    "contact-location": "Posizione",
    "form-name": "Nome",
    "form-name-placeholder": "Il tuo nome",
    "form-email": "Email",
    "form-email-placeholder": "La tua email",
    "form-subject": "Oggetto",
    "form-subject-placeholder": "Oggetto",
    "form-message": "Messaggio",
    "form-message-placeholder": "Il tuo messaggio",
    "form-send": "Invia messaggio",
    "footer-rights": "Tutti i diritti riservati.",
    "thanks-title": "Grazie!",
    "thanks-message": "Il tuo messaggio è stato inviato con successo. Grazie per averci contattato!<br>Risponderemo il prima possibile.",
    "thanks-btn-home": "Torna alla Home",
    "thanks-btn-contact": "Invia un altro messaggio",
  },
}

// Language flags and names
const languageData = {
  "pt-BR": { flag: "https://flagcdn.com/w20/br.png", name: "PT", fullName: "Português (BR)" },
  en: { flag: "https://flagcdn.com/w20/us.png", name: "EN", fullName: "English" },
  de: { flag: "https://flagcdn.com/w20/de.png", name: "DE", fullName: "Deutsch" },
  fr: { flag: "https://flagcdn.com/w20/fr.png", name: "FR", fullName: "Français" },
  it: { flag: "https://flagcdn.com/w20/it.png", name: "IT", fullName: "Italiano" },
}

// Current language and theme
let currentLanguage = localStorage.getItem("language") || "pt-BR"
let currentTheme = localStorage.getItem("theme") || "light"

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
})

// Theme functionality
function initTheme() {
  // Apply saved theme
  document.documentElement.setAttribute("data-theme", currentTheme)

  const themeToggle = document.getElementById("themeToggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", currentTheme)
  localStorage.setItem("theme", currentTheme)

  // Add smooth transition effect
  document.body.style.transition = "all 0.3s ease"
  setTimeout(() => {
    document.body.style.transition = ""
  }, 300)
}

// Language functionality
function initLanguageSelector() {
  const currentLanguageEl = document.getElementById("currentLanguage")
  const languageDropdown = document.getElementById("languageDropdown")

  if (!currentLanguageEl || !languageDropdown) {
    console.error("Language selector elements not found")
    return
  }

  // Set initial language display
  updateCurrentLanguageDisplay()

  // Toggle dropdown
  currentLanguageEl.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    languageDropdown.classList.toggle("active")
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!currentLanguageEl.contains(e.target) && !languageDropdown.contains(e.target)) {
      languageDropdown.classList.remove("active")
    }
  })

  // Handle language selection
  const languageOptions = document.querySelectorAll(".language-option")
  languageOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation()
      const selectedLang = this.getAttribute("data-lang")

      if (selectedLang && selectedLang !== currentLanguage) {
        currentLanguage = selectedLang
        localStorage.setItem("language", currentLanguage)
        updateCurrentLanguageDisplay()
        translatePage()
        languageDropdown.classList.remove("active")
      }
    })
  })
}

function updateCurrentLanguageDisplay() {
  const currentLanguageEl = document.getElementById("currentLanguage")
  if (!currentLanguageEl) return

  const flagImg = currentLanguageEl.querySelector(".flag-icon")
  const langText = currentLanguageEl.querySelector("span")

  if (flagImg && langText && languageData[currentLanguage]) {
    const langData = languageData[currentLanguage]
    flagImg.src = langData.flag
    flagImg.alt = langData.fullName
    langText.textContent = langData.name
  }
}

function translatePage() {
  const elements = document.querySelectorAll("[data-translate]");
  const placeholderElements = document.querySelectorAll("[data-translate-placeholder]");
  // NOVO SELETOR PARA OS TOOLTIPS
  const tooltipElements = document.querySelectorAll("[data-translate-tooltip]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.innerHTML = translations[currentLanguage][key];
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });

  // --- NOVO BLOCO PARA TRADUZIR TOOLTIPS ---
  tooltipElements.forEach((element) => {
    const key = element.getAttribute("data-translate-tooltip");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      // Aqui, em vez de mudar o texto interno, mudamos o atributo 'data-tooltip'
      element.setAttribute('data-tooltip', translations[currentLanguage][key]);
    }
  });
  // --- FIM DO NOVO BLOCO ---

  // Update document title based on current page
  const isThankYouPage = window.location.pathname.includes("thx.html");
  if (isThankYouPage) {
    if (translations[currentLanguage] && translations[currentLanguage]["page-title-thanks"]) {
      document.title = translations[currentLanguage]["page-title-thanks"];
    }
  } else {
    if (translations[currentLanguage] && translations[currentLanguage]["page-title"]) {
      document.title = translations[currentLanguage]["page-title"];
    }
  }

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;
}

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")
  const navLinks = document.querySelectorAll(".nav-link")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      document.body.classList.toggle("no-scroll")

      // Animate hamburger menu
      navToggle.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("active")
        document.body.classList.remove("no-scroll")
        navToggle.classList.remove("active")
      }
    })
  })
}

// Navbar scroll effect
function initNavbarScroll() {
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (navbar) {
      const currentScrollY = window.scrollY

      if (currentScrollY > 50) {
        navbar.style.padding = "0.5rem 0"
        navbar.style.backdropFilter = "blur(15px)"
      } else {
        navbar.style.padding = "1rem 0"
        navbar.style.backdropFilter = "blur(10px)"
      }

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = "translateY(-100%)"
      } else {
        navbar.style.transform = "translateY(0)"
      }

      lastScrollY = currentScrollY
    }
  })
}

// Form submission
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Add loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
      submitBtn.disabled = true

      // Reset after 2 seconds (form will redirect)
      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const navbar = document.querySelector(".navbar")
        const navbarHeight = navbar ? navbar.offsetHeight : 0
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Reveal animations on scroll
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(
    ".section-header, .service-card, .timeline-item, .contact-item, .about-content, .hero",
  )

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Set initial styles for animation
  revealElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })
}

// Parallax effect for hero section
function initParallax() {
  const hero = document.querySelector(".hero")
  if (!hero) return

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5
    hero.style.transform = `translateY(${rate}px)`
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initTheme()
  initLanguageSelector()
  initMobileNav()
  initNavbarScroll()
  initContactForm()
  initSmoothScroll()
  initScrollAnimations()
  initParallax()

  // Translate page
  translatePage()

  // Add loading animation
  document.body.classList.add("loaded")
})

// Add CSS for loading animation
const style = document.createElement("style")
style.textContent = `
  body:not(.loaded) {
    overflow: hidden;
  }
  
  body:not(.loaded)::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.5s ease;
  }
  
  body.loaded::before {
    opacity: 0;
    pointer-events: none;
  }
  
  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
`
document.head.appendChild(style)
