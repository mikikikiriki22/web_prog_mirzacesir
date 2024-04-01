$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);
  console.log("aaa")
  var app = $.spapp({
    defaulView : "#home",
    templateDir : "./pages/",
    pageNotFound : 'error_404'
  });

  // define routes
  app.route({
    view: 'home',
    load: 'home.html',
    onCreate: function() { },
    onReady: function() { }
  });

  app.route({
    view: 'Login',
    load: 'Login.html',
    onCreate: function() { },
    onReady: function() { }
  });

  app.route({
    view: 'all_movies',
    load: 'all_movies.html',
    onCreate: function() { },
    onReady: function() { }
  });

  app.route({
    view: 'Register',
    load: 'register.html',
    onCreate: function() { },
    onReady: function() { }
  });

  app.route({
    view: 'user_profile',
    load: 'user_profile.html',
    onCreate: function() { },
    onReady: function() { }
  });

  app.route({
    view: 'single',
    load: 'single.html',
    onCreate: function() { },
    onReady: function() { }
  });

  

  // run app
  app.run();

});