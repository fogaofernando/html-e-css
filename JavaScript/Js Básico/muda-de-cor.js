var trs = document.getElementsByTagName("tr");

percorreArray(trs,function(tr){
    
    tr.addEventListener("mouseover",function(){
        this.setAttribute("bgcolor","yellow"); 
    })
    
      tr.addEventListener("mouseout",function(){
        this.setAttribute("bgcolor","white"); 
    })
      
});
