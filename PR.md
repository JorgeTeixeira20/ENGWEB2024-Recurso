# Teste 2024

## Passos para importação dos dados

1. Fiz download do json
2. Através do script `dataset-cleaner.py` o dataset dado (datasetInconsistente.json) foi corrigido e retificado segundo as notas do enunciado resultando no ficheiro final (dataset.json)
3. Trocar o nome do campo do identificador, neste caso `bookid` para `_id`
4. Executar o container que já conta com o mongo import


### Resultado

```bash
mongo-seed-1  | 2024-06-06T14:35:25.075+0000	20000 document(s) imported successfully. 0 document(s) failed to import.
```

## Ex1 

Para o exercicio 1 foi utilizado o comando:

```bash
npx express-generator --no-view ex1
```

O que fez gerar automaticamente todas as pastas necessárias.
Adicionei também a pasta Controllers e Models aonde (juntamente com a pasta Routes) foi adicionado o ficheiro livros.js. Estes 3 ficheiros (de nome igual) serviram para estabelecer a lógica da API

## Ex2

Para o segundo exercicio gerei as pastas com um código semelhante ao anteriror

```bash
npx express-generator --view=pug ex2
```

Criei os pugs para cada autor e para cada livro.

A associação entre idAutor e o autor é feita através de um filtro que verifica se o idAutor (que no caso é o próprio nome do autor) está incluído na lista de autores de cada livro.
Desta forma:

```bash
const books = response.data.filter(book => book.author.includes(author));
```

# Aplicação completa

Para rodar a aplicação basta correr o comando:

```bash
docker compose up --build -d
```
