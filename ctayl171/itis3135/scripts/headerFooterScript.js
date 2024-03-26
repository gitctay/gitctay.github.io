// :root{
//     --
// }


const allFooter = document.getElementsByTagName('footer')[0]
const allHeader = document.getElementsByTagName('header')[0]




styleTag = document.createElement('style')
styleTag.innerHTML = `nav{
    background-color: #FFA69E;
    border-radius: 15px;
    border-color: #373f51;
    border-style:ridge;
    border-width: 2px;
    padding: 5px;
    margin-left:auto;
    margin-right:auto;

    
    max-width: fit-content;
    font-size:12px
  }

  h1{
    text-align:center;
  }
  footer{
    margin-left:auto;
    margin-right:auto;
    max-width: fit-content;
    text-align:center;
  }
    

    `

allHeader.innerHTML+=`<h1 ">Christian Taylor's Clumsy Tiger⋆ ★3135<h1><div id="headerDiv"></div><nav id="topbar" style="width:3200px;"
>
<a href="/ctayl171/itis3135">Home</a>
⋆ ★
<a href="/ctayl171/itis3135/introduction.html">introduction</a>
⋆ ★
<a href="/ctayl171/itis3135/contract.html">Contract</a>
⋆ ★
<a href="/ctayl171/itis3135/drawing.html">Drawing</a>
⋆ ★
<a href="/ctayl171/itis3135/table.html">Table</a>
⋆ ★
<a href="/ctayl171/itis3135/forms.html">Form</a>
⋆ ★
<a href="/ctayl171/itis3135/website_evaluations.html">Website Evaluations</a>
⋆ ★
<a href="/ctayl171/itis3135/clumsytiger.com/about.html">Clumsy Tiger About Page</a>
⋆ ★
<a href="/ctayl171/itis3135/scriptTest.html">First JAVASCRIPT</a>
⋆ ★
<a href="/ctayl171/itis3135/cthelps.co/index.html">Firm Home Page</a>
⋆ ★
<a href=/ctayl171/itis3135/byo_intro.html>Build Intro</a>
⋆ ★
</nav>
\n
<nav>
<a href="/ctayl171/itis3135/hobby/index.html">Hobby Site</a>
⋆ ★
<a href="/ctayl171/itis3135/some-things-may_e/otherstff/RDN 24!s.htm">Crappy</a>
</nav>


\n
`

allFooter.innerHTML += `
<nav style="width:3200px;">
<a
    href="https://webpages.charlotte.edu/ctayl171/">Charlotte.edu</a>
( ͠❛ ͜ʖ͠❛ )
<a
    href="https://github.com/gitctay/gitctay.github.io">Github</a>
( ͠❛ ͜ʖ͠❛ )
<a href="https://gitctay.github.io/">Github.io</a>
( ͠❛ ͜ʖ͠❛ )
<a
    href="https://gitctay.github.io/local_www/itis3135/">itis3135.io</a>
( ͠❛ ͜ʖ͠❛ )
<a href="https://www.freecodecamp.org/ctayl171">FreeCodeCamp</a>
( ͠❛ ͜ʖ͠❛ )
<a
    href="https://www.codecademy.com/profiles/christianTaylor8191440473">CodeAcademy</a>
( ͠❛ ͜ʖ͠❛ )
<a
    href="https://www.linkedin.com/in/christian-taylor-b67327182/">Linkedin</a>

</nav>
<br>
<p>Page built by <a href="clumsytiger.com">Clumsy Tiger</a> Co.
©2024 </p>
<a href="https://validator.w3.org/check?uri=referer"
id="validation_link_html">
<img style="border:0;width:88px;height:31px"
    src="https://mytienhoang.github.io/itis3135/z_archives/html_validation.png"
    alt="Valid HTML!" href="https://validator.w3.org/check?uri=${location.href}">
</a>
<a href="https://jigsaw.w3.org/css-validator/check/referer"
id="validation_link_css">
<img style="border:0;width:88px;height:31px"
    src="https://jigsaw.w3.org/css-validator/images/vcss"
    alt="Valid CSS!" href=https://jigsaw.w3.org/css-validator/validator?uri=${location.href}>
</a>
<a href="https://wave.webaim.org/report#/${location.href}">
<img style="border:0;width:88px;height:31px;display:"
    src="images/button_validation_wcag.png"
    alt="Disablility"> 
</a>
`


document.body.append(styleTag);

allFooter.style.marginLeft = "auto"
allFooter.style.marginRight = "auto"
allFooter.style.maxWidth = "fit-content"
//HAVE A PLACE TO PUT THE DISABILITY SECTION

