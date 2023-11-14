# Explicando Base64

## O que é codificação Base64?
A codificação Base64 transforma dados binários em texto, especificamente em texto ASCII. O texto gerado consiste apenas de letras `A-Z`, `a-z`, números de `0-9` e os símbolos `+` e `/`. Esta codificação é chamada de Base64 devido aos seus 64 caracteres seguros, que não são suscetíveis a interpretações errôneas por computadores e programas legados, ao contrário de caracteres como `<` e outros.

É importante destacar que a Base64 não criptografa o texto, apenas altera a representação dos dados. Dados codificados em Base64 podem ser facilmente decodificados para o texto original. A Base64 utiliza 6 bits para representar cada um dos 64 caracteres disponíveis, pois `2^6 = 64`. Cada caractere Base64 representa 6 bits de dados. Como 8 bits equivalem a um byte, o múltiplo comum mais próximo entre 8 e 6 é 24. Portanto, 24 bits (ou 3 bytes) podem ser representados por quatro caracteres Base64 de 6 bits.

## Por que Base64?
Para incorporar imagens diretamente em um documento HTML, você pode usar URLs de dados que permitem a inclusão de dados de imagem em Base64. Isso evita a necessidade de vincular a arquivos externos. A sintaxe é a seguinte:

```html
<img src="data:image/gif;base64, *suabase64*">
```

Isso é útil quando se precisa transmitir dados binários como texto, garantindo que permaneçam intactos durante a transmissão, e quando os dados contêm caracteres incompatíveis com URLs. A codificação Base64 também é amplamente usada para manipular objetos em editores de texto e transferir arquivos como texto, codificando-os em Base64 e decodificando-os no lado receptor. Aprofundaremos esse algoritmo na próxima seção.

## Algoritmo de codificação para Base64
Algoritmo simples para codificar texto em Base64:

1. Converta o texto em sua representação binária.
2. Divida os bits em grupos de 6 bits cada.
3. Converta cada grupo em um número decimal no intervalo de 0 a 63 (pois cada grupo possui 6 bits no máximo).
4. Mapeie o número decimal para o caractere equivalente na tabela Base64.

Dessa forma, você obtém uma string codificada em Base64. Se o grupo final tiver menos de 6 bits, você pode preenchê-lo com um ou dois caracteres `=` para garantir que o comprimento da codificação seja um múltiplo de 4.

### Exemplo do algoritmo
Passo 1: Conversão da string 'abc' para representação binária:

A primeira etapa é converter os caracteres 'a', 'b' e 'c' em sua representação binária de acordo com a tabela ASCII. Aqui estão as representações binárias de 'a', 'b' e 'c' em ASCII:

- 'a' = `01100001`
- 'b' = `01100010`
- 'c' = `01100011`

Agora, concatenamos essas representações binárias para formar uma única sequência de bits:

`011000010110001001100011`

Passo 2: Divisão dos bits em grupos de 6 bits:

Agora, dividimos a sequência de bits em grupos de 6 bits cada:

`011000 010110 001001 100011`

Passo 3: Conversão de grupos em números decimais de 0 a 63:

Cada grupo de 6 bits é convertido em um número decimal. O valor decimal pode variar de 0 a 63, já que estamos usando 6 bits. Vamos converter cada grupo:

- `011000` = 24
- `010110` = 22
- `001001` = 9
- `100011` = 35

Passo 4: Mapeamento para caracteres Base64:

Agora, mapeamos esses números decimais para os caracteres correspondentes na tabela Base64. A tabela Base64 possui os seguintes caracteres:

`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`

Agora, mapeamos os números decimais:

- 24 é mapeado para 'Y'
- 22 é mapeado para 'W'
- 9 é mapeado para 'J'
- 35 é mapeado para 'j'

Portanto, a string `abc` em Base64 é codificada como `YWJj`.

Assim, a conversão da string `abc` em Base64 resulta em `YWJj`.