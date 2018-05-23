/* Begin formspree script */

(function(){
  var myForm = document.getElementById('emailForm');
  var submitButton = document.getElementById('submitButton');

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var maxCharacters = document.getElementById('maxCharacters');

  messageInput.textContent = '';

  console.log(messageInput.attributes);

  nameInput.addEventListener('blur', function(event){
    var myName = nameInput.value;
    var validName = /^[0-9a-zA-Z\s]+$/.test(myName);
    if(!validName){
      nameInput.classList.add('danger');
      submitButton.disabled = true;
    } else {
      nameInput.classList.remove('danger');
      submitButton.disabled = false;
    }
  });

  emailInput.addEventListener('blur', function(event){
    var myEmail = emailInput.value;
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(myEmail);
    if(!validEmail){
      emailInput.classList.add('danger');
      submitButton.disabled = true;
    } else {
      emailInput.classList.remove('danger');
      submitButton.disabled = false;
    }
  });

  messageInput.addEventListener('keydown', function(event){
    maxCharacters.textContent = "Characters remaining: " + (messageInput.attributes.maxLength.value - messageInput.value.length);
  });



  myForm.addEventListener('submit', function(event) {
    document.getElementById('message').value.trim();
    myForm.setAttribute('action', 'https://formspree.io/fleury14@comcast.net');
  });
}());

/* End Formspree script */

/*Begin softscroll script */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  // Remove carousel ids (I think)
  .not('[href="#carousel-example-generic"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /* End softscroll script */

  // BEGIN SKILLS SECTION

  // assign skill buttons to respective anchor tags
  const htmlButton = document.querySelector('.skills-html');
  const cssButton = document.querySelector('.skills-css');
  const jsButton = document.querySelector('.skills-js');
  const responsiveButton = document.querySelector('.skills-responsive');
  const gitButton = document.querySelector('.skills-git');
  const ang2Button = document.querySelector('.skills-ang2');
  const mongoButton = document.querySelector('.skills-mongo');
  const psqlButton = document.querySelector('.skills-postgres');
  const nodeButton = document.querySelector('.skills-node');
  const dockerButton = document.querySelector('.skills-docker');
  const expressButton = document.querySelector('.skills-express');
  const securityButton = document.querySelector('.skills-security');
  
  // and the output result as well
  const skillResult = document.querySelector('.skill-result');

  //create object that will contain the text when clicked
  const skills = {
    html: 'HTML is the foundation on which websites are built. My goal is not only to have the website as effective for the user as possible, but for the code inside to be equally efficient.',
    css: 'CSS is what transforms a website from a bare-bones block of text to the colorful sites you see today. Efficient coding is just as important here, as is maintaining the direction of Object Oriented CSS to make as much of the code as re-usable as possible.',
    responsive: 'With as many difference devices available to view websites as there are today, designing a website that is responsive is a must. Thanks to bootstrap, I can create mobile-first sites that can be viewed on any device.',
    js: `JavaScript is what allows websites to be taken to the next level with plenty of interactivity between the user and the website. Learning JavaScript was probabaly the most fun I had in any course because I was able to utilize my skills from learning BASIC when I was a child. Check out the Word Fight, and Adventure Game pages, as they are games written entirely in JavaScript.`,
    git: 'As good as any one coder is, collaboration is equally important in todays work place. I have experience with github and git to update and maintain projects with other coders.',
    ang2: 'Angular2 is a JS framework where everything comes together. It transforms a project from a simple website to a full-scale web application, utilizing TypeScript in addition to JavaScript. Check out the Fresno Gaming Community ladder as it is built with the Angular2 CLI and utilizes the Realtime Database feature of Firebase to write and delete information. The Room Reservation app does this as well.',
    mongo: 'MongoDB is a NoSQL database that is used in conjunction with Express, Angular and Node as part of the MEAN stack. I have built applications as part of class courses that utilize both local instances of MongoDB as well as real-world deployments.',
    psql: 'PostgreSQL is another type of database. I worked quite a bit with Postgres as part of the Application Security and Hardening class at Geekwise Academy and our current project as part of the Cohort program also uses Postgres.',
    node: 'The framework for the MEAN stack, I have steadily increased my ability with Node while working with containers on Docker as well as during our security class. As part of working with Node, I have experience implementing several different modules via npm.',
    docker: 'My most recent skill, after being introduced to it a few months ago, our current project in the Geekwise Cohort involves setting up seperate docker containers for a client, server, and a database. I successfully built the containers and got them all interacting with each other.',
    express: 'Express is a server framework that I have used to construct APIs and endpoints for the various applications I have worked on.',
    security: 'As a result of the 12 week Application Security class at Geekwise Academy, I know try to keep the best practices in mind when handling with users data. I am familiar with preventing such techniques as SQL Injection, Cross-Site Scripting (XSS) and Cross-site Request Forgery (XSRF) as well as basic encryption and the use of web tokens to ensure valid authentication.'
  }

  //add listeners and their respective functions.
  htmlButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-html>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.html}</p>`;
  });

  cssButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-css>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.css}</p>`;
  });

  jsButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-js>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.js}</p>`;
  });

  responsiveButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-responsive>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.responsive}</p>`;
  });

  gitButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-git>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.git}</p>`;
  });

  ang2Button.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-ang2>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.ang2}</p>`;
  });

  mongoButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-mongo>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.mongo}</p>`;
  });

  psqlButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-postgres>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.psql}</p>`;
  });

  nodeButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-node>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.node}</p>`;
  });

  expressButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-express>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.express}</p>`;
  });

  dockerButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-docker>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.docker}</p>`;
  });

  securityButton.addEventListener('click', function() {
    removeActiveSkill();
    document.querySelector('.skills-security>div').classList.add('skills-container-active');
    skillResult.innerHTML=`<p>${skills.security}</p>`;
  });
  function removeActiveSkill() { //function that removes the active skill from all tabs
    document.querySelector('.skills-html>div').classList.remove('skills-container-active');
    document.querySelector('.skills-css>div').classList.remove('skills-container-active');
    document.querySelector('.skills-js>div').classList.remove('skills-container-active');
    document.querySelector('.skills-responsive>div').classList.remove('skills-container-active');
    document.querySelector('.skills-git>div').classList.remove('skills-container-active');
    document.querySelector('.skills-ang2>div').classList.remove('skills-container-active');
    document.querySelector('.skills-mongo>div').classList.remove('skills-container-active');
    document.querySelector('.skills-postgres>div').classList.remove('skills-container-active');
    document.querySelector('.skills-node>div').classList.remove('skills-container-active');
    document.querySelector('.skills-express>div').classList.remove('skills-container-active');
    document.querySelector('.skills-docker>div').classList.remove('skills-container-active');
    document.querySelector('.skills-security>div').classList.remove('skills-container-active');
  }