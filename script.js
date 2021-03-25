    
    const divLogos = document.querySelector('.anim-logo');
    const cssLogo = document.querySelector('#cssLogo');
    const jsLogo = document.querySelector('#jsLogo');
    const htmlLogo = document.querySelector('#htmlLogo');
    const bootstrapLogo = document.querySelector('#bootstrapLogo');
    const phpLogo = document.querySelector('#phpLogo');
    const sqlLogo = document.querySelector('#mySqlLogo');
    const reactLogo = document.querySelector('#reactLogo');
    const jqueryLogo = document.querySelector('#jQueryLogo');
    
    const goDownBtn = document.querySelector('#goDown');


    divLogos.addEventListener('mouseover', () => {
            cssLogo.classList.add('css-translate');
            jsLogo.classList.add('js-translate');
            htmlLogo.classList.add('html-translate');
            bootstrapLogo.classList.add('boot-translate');
            phpLogo.classList.add('php-translate');
            sqlLogo.classList.add('sql-translate');
            reactLogo.classList.add('react-translate');
            jqueryLogo.classList.add('jquery-translate');
    })

    divLogos.addEventListener('mouseout', () => {
        cssLogo.classList.remove('css-translate');
        jsLogo.classList.remove('js-translate');
        htmlLogo.classList.remove('html-translate');
        bootstrapLogo.classList.remove('boot-translate');
        phpLogo.classList.remove('php-translate');
        sqlLogo.classList.remove('sql-translate');
        reactLogo.classList.remove('react-translate');
        jqueryLogo.classList.remove('jquery-translate');
     })

     const height = document.querySelector('header');

     goDownBtn.addEventListener('click', ()=>{
             window.scrollTo({
                     top:height.clientHeight,
                     left:0,
                     behavior:'smooth'
             });
             
        })

