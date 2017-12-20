# Mussum Ipsum API
API perfeita para popular seu site com um cacildis.

## Rotas
A API só trabalha com métodos GET por questões de praticidadis.

### `/`
Retorna todas as frases guardadas do Mussum Ipsum.

### `/paragrafos/{n}`
Retorna um parágrafo de Mussum Ipssum. Caso precise de mais de um parágrafo, especifiquis ele após a barra.

Por exemplo, `https://mipsum.herokuapp.com/paragrafos/5` vai retornar cinco parágrafos de Mussum Ipsum.

### `/frases/{n}`
Retorna `"Mussum ipsum, cacilds vidis litro abertis"`. Para retornar uma outra frase, diga seu indexis depois da barra.

Por exemplo, `https://mipsum.herokuapp.com/frases/2` retorna `"paisis, filhis, espiritis santis"`. Cuidado para não estourar o array.

### `/frases/random`
Retorna uma frase aleatória do Mussum Ipsum

## Troubleshooting

### Parâmetro fora do limite
Na rota `/frases/{n}`, caso seja dado um número que não esteja dentro do index das frases, a API vai retornar um objeto de `err`.

#### Exemplo
url: `https://mipsum.herokuapp.com/frases/77`
```json
{
    "err": {
        "causa": "Parâmetro fora do limite",
        "limite": {limite do array}
    }
}
```
O array de palavras contém 41 palavras em 19/12/2017.
### Parâmetro NaN
Nas rotas `/paragrafos/{n}` e `/frases/{n}`, caso {n} não seja numérico, a API vai retornar um objeto `err`.

#### Exemplo
url: `https://mipsum.herokuapp.com/paragrafos/n=12`
```json
{
    "err": {
        "causa": "Parâmetro NaN",
        "parametro": "n=12"
    }
}
```

## Deploy
Para o deploy é necessário o git, nodejs e npm instalados.
+ baixe o projeto com `git clone` ou download convencional;
+ instale as dependências do node com o `npm i`;
+ inicie o servidor com `npm start`.

# Reconhecimentos
Essa API é uma síntese do [mussum-ipsum](https://github.com/diegofelipece/mussum-ipsum) do Diego Felipe. Vai lá dar um fork no repo dele.