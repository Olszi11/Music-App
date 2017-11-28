$(function() {

  var mainPage = $(".main-page");
  var option1 = $(".option1");
  var option2 = $(".option2");
  var option1Page = $(".option1-page");
  var option2Page = $(".option2-page");
  var headerH1 = $("#header").find('h1');
  var returnButton = $(".returnButton");
  var returnButton2 = $(".returnButton2");
  var playlist = $("#playlist");
  var playlist2 = $("#playlist2");

  option1.on("click", function() {
    option1Page.css('display', "block");
    option2Page.css('display', "none");
    mainPage.css('display', "none");
    headerH1.text("Scott Holmes");
    returnButton.css('display', 'block');
    returnButton2.css('display', 'none');

    playlist.empty();

    playlist.append('<li song="Scott Holmes - Arcade Paradise.mp3" cover="cover1.jpg" artist="Scott Holmes">1. Arcade Paradise</li>');
    playlist.append('<li song="Scott Holmes - Cutie Pie.mp3" cover="cover1.jpg" artist="Scott Holmes">2. Cutie Pie</li>');
    playlist.append('<li song="Scott Holmes - Entrepreneurs.mp3" cover="cover1.jpg" artist="Scott Holmes">3. Entrepreneurs</li>');
    playlist.append('<li song="Scott Holmes - Inspiring Corporate.mp3" cover="cover1.jpg" artist="Scott Holmes">4. Inspiring Corporate</li>');
    playlist.append('<li song="Scott Holmes - Jump For Joy.mp3" cover="cover1.jpg" artist="Scott Holmes">5. Jump For Joy</li>');
    playlist.append('<li song="Scott Holmes - Summer Fun.mp3" cover="cover1.jpg" artist="Scott Holmes">6. Summer Fun</li>');
    playlist.append('<li song="Scott Holmes - Sunday Funday.mp3" cover="cover1.jpg" artist="Scott Holmes">7. Sunday Funday</li>');
    playlist.append('<li song="Scott Holmes - This is Christmas.mp3" cover="cover1.jpg" artist="Scott Holmes">8. This is Christmas</li>');
    playlist.append('<li song="Scott Holmes - When Im with you.mp3" cover="cover1.jpg" artist="Scott Holmes">9. When Im with you</li>');


    var audio;
    //Hide Pause Initially
    $('#pause').hide();

    //Initializer - Play First Song
    initAudio($('#playlist li:first-child'));

    function initAudio(element) {
      var song = element.attr('song');
      var titleLength = element.text().length;
      var title = element.text().substring(3,titleLength);
      var cover = element.attr('cover');
      var artist = element.attr('artist');

      //Create a New Audio Object
      audio = new Audio('media/' + song);

      if (!audio.currentTime) {
        $('#duration').html('0.00');
      }

      $('#audio-player .title').text(title);
      $('#audio-player .artist').text(artist);

      //Insert Cover Image
      $('img.cover').attr('src', 'images/covers/' + cover);

      $('#playlist li').removeClass('active');
      element.addClass('active');
    }


    //Play Button
    $('#play').click(function() {
      audio.play();
      $('#play').hide();
      $('#pause').show();
      $('#duration').fadeIn(400);
      showDuration();
    });

    //Pause Button
    $('#pause').click(function() {
      audio.pause();
      $('#pause').hide();
      $('#play').show();
    });

    //Stop Button
    $('#stop').click(function() {
      audio.pause();
      audio.currentTime = 0;
      $('#pause').hide();
      $('#play').show();
      $('#duration').fadeOut(400);
    });

    //Next Button
    $('#next').click(function() {
      audio.pause();
      var next = $('#playlist li.active').next();
      if (next.length == 0) {
        next = $('#playlist li:first-child');
      }
      initAudio(next);
      audio.play();
      showDuration();
    });

    //Prev Button
    $('#prev').click(function() {
      audio.pause();
      var prev = $('#playlist li.active').prev();
      if (prev.length == 0) {
        prev = $('#playlist li:last-child');
      }
      initAudio(prev);
      audio.play();
      showDuration();
    });

    //Playlist Song Click
    $('#playlist li').click(function() {
      audio.pause();
      initAudio($(this));
      $('#play').hide();
      $('#pause').show();
      $('#duration').fadeIn(400);
      audio.play();
      showDuration();
    });

    //Volume Control
    $('#volume').change(function() {
      audio.volume = parseFloat(this.value / 10);
    });

    //Time Duration
    function showDuration() {
      $(audio).bind('timeupdate', function() {
        //Get hours and minutes
        var s = parseInt(audio.currentTime % 60);
        var m = parseInt((audio.currentTime / 60) % 60);
        //Add 0 if seconds less than 10
        if (s < 10) {
          s = '0' + s;
        }
        $('#duration').html(m + '.' + s);
        var value = 0;
        if (audio.currentTime > 0) {
          value = Math.floor((100 / audio.duration) * audio.currentTime);
        }
        $('#progress').css('width', value + '%');
      });

      $(audio).on("ended", function() {
        audio.pause();
        var next = $('#playlist li.active').next();
        if (next.length == 0) {
          next = $('#playlist li:first-child');
        }
        initAudio(next);
        audio.play();
        showDuration();
      });
    }

    returnButton.on("click", function() {
      audio.pause();
      audio.currentTime = 0;
      $('#pause').hide();
      $('#play').show();
      playlist.empty();
      playlist2.empty();

      mainPage.css('display', "block");
      option1Page.css('display', "none");
      option2Page.css('display', "none");
      headerH1.text("Music App");
      returnButton.css('display', "none");
      returnButton2.css('display', "none");
    })

  });

  option2.on("click", function() {
    option2Page.css('display', "block");
    option1Page.css('display', "none");
    mainPage.css('display', "none");
    headerH1.text("Lemon Yellow Hayes");
    returnButton2.css('display', 'block');
    returnButton.css('display', 'none');

    playlist2.empty();

    playlist2.append('<li song="Lemon Yellow Hayes - Brother Christmas.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">1. Brother Christmas</li>');
    playlist2.append('<li song="Lemon Yellow Hayes - Doubt Farm.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">2. Doubt Farm</li>');
    playlist2.append('<li song="Lemon Yellow Hayes - Hell Loop Ween.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">3. Hell Loop Ween</li>');
    playlist2.append('<li song="Lemon Yellow Hayes - Lazarus.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">4. Lazarus</li>');
    playlist2.append('<li song="Lemon Yellow Hayes - No Hands.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">5. No Hands</li>');
    playlist2.append('<li song="Lemon Yellow Hayes - Rumplestilskin.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">6. Rumplestilskin</li>');
    playlist2.append('<li song="Lemon Yellow Hayes - Something Part I.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">7. Something Part I</li>');
    playlist2.append('<li song="Lemon Yellow Hayes - Something Part II.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">8. Something Part II</li>');
    playlist2.append('<li song="Lemon Yellow Hayes - Waiting bt Counting to Three.mp3" cover="cover1.jpg" artist="Lemon Yellow Hayes">9. Waiting bt Counting to Three</li>');

    var audio2;

    //Hide Pause Initially
    $('#pause2').hide();
    //Initializer - Play First Song
    initAudio($('#playlist2 li:first-child'));

    function initAudio(element) {
      var song = element.attr('song');
      var titleLength = element.text().length;
      var title = element.text().substring(3,titleLength);
      var cover = element.attr('cover');
      var artist = element.attr('artist');

      //Create a New Audio Object
      audio2 = new Audio('media/' + song);

      if (!audio2.currentTime) {
        $('#duration2').html('0.00');
      }

      $('#audio-player2 .title2').text(title);
      $('#audio-player2 .artist2').text(artist);

      //Insert Cover Image
      $('img.cover2').attr('src', 'images/covers/' + cover);

      $('#playlist2 li').removeClass('active');
      element.addClass('active');
    }

    //Play Button
    $('#play2').click(function() {
      audio2.play();
      $('#play2').hide();
      $('#pause2').show();
      $('#duration2').fadeIn(400);
      showDuration();
    });

    //Pause Button
    $('#pause2').click(function() {
      audio2.pause();
      $('#pause2').hide();
      $('#play2').show();
    });

    //Stop Button
    $('#stop2').click(function() {
      audio2.pause();
      audio2.currentTime = 0;
      $('#pause2').hide();
      $('#play2').show();
      $('#duration2').fadeOut(400);
    });

    //Next Button
    $('#next2').click(function() {
      audio2.pause();
      var next = $('#playlist2 li.active').next();
      if (next.length == 0) {
        next = $('#playlist2 li:first-child');
      }
      initAudio(next);
      audio2.play();
      showDuration();
    });

    //Prev Button
    $('#prev2').click(function() {
      audio2.pause();
      var prev = $('#playlist2 li.active').prev();
      if (prev.length == 0) {
        prev = $('#playlist2 li:last-child');
      }
      initAudio(prev);
      audio2.play();
      showDuration();
    });

    //Playlist Song Click
    $('#playlist2 li').click(function() {
      audio2.pause();
      initAudio($(this));
      $('#play2').hide();
      $('#pause2').show();
      $('#duration2').fadeIn(400);
      audio2.play();
      showDuration();
    });

    //Volume Control
    $('#volume2').change(function() {
      audio2.volume = parseFloat(this.value / 10);
    });

    //Time Duration
    function showDuration() {
      $(audio2).bind('timeupdate', function() {
        //Get hours and minutes
        var s = parseInt(audio2.currentTime % 60);
        var m = parseInt((audio2.currentTime / 60) % 60);
        //Add 0 if seconds less than 10
        if (s < 10) {
          s = '0' + s;
        }
        $('#duration2').html(m + '.' + s);
        var value = 0;
        if (audio2.currentTime > 0) {
          value = Math.floor((100 / audio2.duration) * audio2.currentTime);
        }
        $('#progress2').css('width', value + '%');
      });

      $(audio2).on("ended", function() {
        audio2.pause();
        var next = $('#playlist2 li.active').next();
        if (next.length == 0) {
          next = $('#playlist2 li:first-child');
        }
        initAudio(next);
        audio2.play();
        showDuration();
      });
    }

    returnButton2.on("click", function() {
      audio2.pause();
      audio2.currentTime = 0;
      $('#pause2').hide();
      $('#play2').show();
      audio2.remove();
      playlist2.empty();

      mainPage.css('display', "block");
      option1Page.css('display', "none");
      option2Page.css('display', "none");
      headerH1.text("Music App");
      returnButton2.css('display', "none");
      returnButton.css('display', "none");
    })

  });

});
