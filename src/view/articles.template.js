module.exports = `
<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link rel="stylesheet" type="text/css" href="/materialize.css">
      <link rel="stylesheet" type="text/css" href="/style.css">
    </head>

    <body>

    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"> news collective </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/">From your network</a></li>
          <li><a href="/new">Write a story</a></li>
        </ul>
      </div>
    </nav>

    
    <div class="container">

    <div class="row">
      {{#fakeData}}    
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src={{image}}>
              <span class="card-title">{{title}}</span>
            </div>
            <div class="card-content">
              <p>{{teaser}}</p>
            </div>
            <div class="card-action">
              <a href="/details/{{id}}">Read more</a>
            </div>
          </div>
        </div>
      {{/fakeData}}   
    </div> 

    </div>
    </body>
  </html>
`;