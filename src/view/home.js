const initHome = (elem) => {
  const goLogin = elem.querySelector('#logIn');
  // eslint-disable-next-line no-return-assign
  goLogin.addEventListener('click', () => window.location.hash = '#/login');
  const goSign = elem.querySelector('#signUp');
  // eslint-disable-next-line no-return-assign
  goSign.addEventListener('click', () => window.location.hash = '#/register');
  // Atrapamos al container donde aparecerá la alerta de ir al mail a verificar
  const containerVerify = elem.querySelector('.containerVerify');
  console.log(containerVerify); // <p class="containerVerify"></p>
};

const viewHome = () => {
  const view = ` 
    <section class="container container-home">
      <h1 class="container-home__h1">Travelers</h1>
      <div>
        <h3 class="container-home__h3 align-start">Join the adventure!</h3>
        <p class="containerVerify"></p>
      </div>
      <button id="logIn" class="button">Log In</button>
      <p class="container-home__p">------- or -------</p>
      <button id="signUp" class="button button--white">Sign Up</button>
    </section>
   `;

  const articleElem = document.createElement('article');
  articleElem.classList.add('wraper');
  articleElem.innerHTML = view;

  initHome(articleElem);
  return articleElem;
};

export { viewHome };
