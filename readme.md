# Práctica AJAX - XML


Modifica el archivo **arxiv.js** para realizar una petición asincrónica dentro de la función _peticion_. El URL para realizar la petición es [arXiv](https://export.arxiv.org/api/query?search_query=all:web+AND+all:ajax). 

De la respuesta, extrae los valores de las etiquetas `<title>`, `<published>` y `<summary>` que se encuentran dentro de la etiqueta de cada `<entry>`. Utiliza estos valores para reemplazar por las marcas `{{title}}`, `{{published}}` y `{{summary}}` que se encuentran en la variable **plantilla**.

Finalmente, coloca cada nuevo valor de la **plantilla** dentro de la etiqueta `<div>` con el identificador `books`, del index.html.

Entre los enlaces de *Referencias* encontrarás cómo hacer un requerimiento asincrónico, procesar una respuesta XML, recorrer un HTMLCollection y el objeto Date, y su formato, que maneja el navegador

## Referencias

JavaScript Fetch API Explained By Examples. (2021). Retrieved 7 November 2021, from https://www.javascripttutorial.net/javascript-fetch-api/

Joubran, J., & Joubran, J. (2021). How to fetch XML in JavaScript | Code to go. Retrieved 7 November 2021, from https://codetogo.io/how-to-fetch-xml-in-javascript/


arXiv API User's Manual | arXiv e-print repository. (2021). Retrieved 7 November 2021, from https://arxiv.org/help/api/user-manual

ArXiv Query: search_query=all:web AND all:ajax&id_list=&start=0&max_results=10. (2021). Retrieved 7 November 2021, from https://export.arxiv.org/api/query?search_query=all:web+AND+all:ajax

elements, F. (2014). For loop for HTMLCollection elements. Retrieved 7 November 2021, from https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements

time, D. (2021). Date and time. Retrieved 7 November 2021, from https://javascript.info/date

Date.prototype.toLocaleString() - JavaScript | MDN. (2021). Retrieved 7 November 2021, from https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString