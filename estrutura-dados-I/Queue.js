class Queue{

    #data // vetor print

    constructor() {
        this.data = [];
    }

    // metodo de inserção na fila
    enqueue(val){
        this.#data.push(val);
    }

    // metodo de remoção na fila
    dequeue(){
        return this.#data.shift();
    }

    // metodo para consultar o inicio da fila sem remover o elemento
    peak(){
        return this.#data[0];
    }

    get isEmpty(){
        return this.#data.length === 0;
    }

    print(){
        let output = '[ ';
        for(let i = 0; i < this.#data.length; i++){
            if (output !== "[ "){
                output += ", ";
            }
            output += `(${i}): ${this.#data[i]}`;
        }
        return output + " ]";
    }

}

export default Queue;