class DateHelper{
    
    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto){
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('O formato para execultar este método é no padrão aaaa-mm-dd');
        }
        
        return new Date(...texto.split('-')
            .map((item,posicao) => item - (posicao % 2)));
    }
}