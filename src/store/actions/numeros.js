//Action Creator
//payload é o novo valor o type da action é o nome da action
//Aqui posso chamar o back-end da aplicação
export function alterarNumeroMinimo(novoNumero){
    return {
        type:'NUM_MIN_ALTERADO',
        payload:novoNumero 
    }

}

//Action Creator
export function alterarNumeroMaximo(novoNumero){
    return {
        type:'NUM_MAX_ALTERADO',
        payload:novoNumero 
    }

}
