$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( "divm" ).addClass( "a" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( "divm" ).removeClass( "a" );
      $( ".inner-switch" ).text( "ON" );
    }
});
