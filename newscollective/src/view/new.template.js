const header = require('./reusable/header.template');
const footer = require('./reusable/footer.template')

module.exports = `
    ${header}
    <div class="container">
    <div class="row">  
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">

            <div class="row">
                  <div class="col s12">
                    <p id="error-meldung" class="hide">Ein Fehler is Aufgetreten</p>
                  </div>
                </div>

              <form id="new-article" action="/add-post/" method="post">

                <div class="row">
                  <div class="col s12">
                    <label for="author">Author</label>
                    <input id="author" name="author" type="text" class="validate">
                    <span class="helper-text error hide">Autor darf nicht leer sein</span>
                  </div>
                </div>

  

                <div class="row">
                  <div class="col s12">
                    <label for="title">Title</label>
                    <input id="title" name="title" type="text" class="validate">
                    <span class="helper-text error hide">Der Titel muss mehr als drei und weniger als elf Worte haben</span>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                  <label for="image">Image Link</label>
                    <input id="image" name="image" type="text" class="validate">
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <label for="teaser">Teaser</label>
                    <textarea id="teaser" name="teaser" class="materialize-textarea"></textarea>
                    <span class="helper-text error hide">Der Teaser soll nicht mehr als 250 Zeichen und nicht weniger als 50 Zeichen haben</span>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <label for="articletext">Artikel</label>
                    <textarea id="articletext" name="articletext" class="materialize-textarea"></textarea>
                    <span class="helper-text hide warning">Der Artikeltext soll mindestens 30 Worte</span>
                  </div>
                </div>

                <input class="btn" type="submit" value="Submit">
              </form>
              </div>
          </div>
        </div> 
      </div> 
    </div>

  ${footer}
`;