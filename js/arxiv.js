let peticion = () => {
  
  let url = 'https://export.arxiv.org/api/query?search_query=all:web+AND+all:ajax';

  var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  fetch(url)
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");

      let entrys = xml.getElementsByTagName('entry')
      for (entry of entrys){
        let plantilla = `
          <div class="col-lg-4 col-md-6 content-item">
            <span>{{title}}</span>
            <h4>{{published}}</h4>
            <p>{{summary}}</p>
          </div>
        `  
        let title = entry.getElementsByTagName("title")[0]
        let publised = entry.getElementsByTagName("published")[0]

        var cadena = publised.innerHTML.split("T")
        var fecha = cadena[0].split("-");
        let summary = entry.getElementsByTagName("summary")[0]

        var dia = cadena[1].replace("Z",'')
        var hora = dia.split(":")

        
        var date = new Date(Date.UTC(fecha[0],fecha[1],fecha[2], hora[0], hora[1], hora[2]));
        



        plantilla = plantilla.replace('{{title}}',title.innerHTML)
        plantilla = plantilla.replace('{{published}}',date.toLocaleString('en-US', opciones))
        plantilla = plantilla.replace('{{summary}}',summary.innerHTML)

        document.getElementById('books').innerHTML += plantilla
      }
  })
  .catch(console.error);


  


  
  

}


//do after all document is loaded https://stackoverflow.com/questions/588040/window-onload-vs-document-onload

document.addEventListener("DOMContentLoaded", function(event) {
  peticion();
})