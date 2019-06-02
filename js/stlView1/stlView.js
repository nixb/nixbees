function stlView(iddd,index){
    localStorage.setItem("stl", index);
    console.log("dfsdfdgs");
    document.getElementById(iddd).innerHTML="<iframe width=\"100%\" height=\"400px\" style='margin-top: -10px; margin-left: -8px; width: 800px; height: 400px;' src=\"stlfiles/stl1.html\" frameborder=\"0\" allowfullscreen></iframe>";
}