// JavaScript Document

$navbar.delegate( "a", "vclick", function( event ) {
if( !$(event.target).hasClass("ui-disabled") ) {
 $navbtns.not(".ui-state-persist" ).removeClass( $.mobile.activeBtnClass );
  $( this ).addClass( $.mobile.activeBtnClass );
}
});