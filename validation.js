function validate() {
      
    if( document.myForm.Title.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.ReadingTime.value == "") {
       alert( "Please provide Reading time" );
       return false;
    }
    if(document.myForm.PostText.value.length < 1 ){
        alert( "Reading Time should be more than 1 minute" );
    }
    if( document.myForm.PostText.value == ""){
        alert( "Please provide Post Text" );
    }
    return( true );