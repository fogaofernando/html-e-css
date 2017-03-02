class MensagemView extends View{
    constructor(elemento = "<p></p>"){
        super(elemento);
    }
    
    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
}