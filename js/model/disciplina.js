class Disciplina {
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
        this.alunos = [];
    }

    getCodigo() {
        return this.codigo;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getAlunos() {
        return this.alunos;
    }

    inserirAlunoNaDisciplina(aluno) {
        this.alunos.push(aluno);
    }

}