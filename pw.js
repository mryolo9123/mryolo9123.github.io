function test_str() { 
    var res; 
    var str = 
        document.getElementById("t1").value; 
    if (str == "superhotindianchicksnearsanjose") {
      window.location.href="exposed.html";
    }

    else {
      alert("Incorrect password.");
      window.location.href="exposedp.html";
    }
    document.getElementById("t2").value = res; 

}