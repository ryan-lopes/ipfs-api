# Main doubts

## Tarball vs Gzip

Tar é um formato de arquivo para container de outros arquivos. Assim, pode-se agrupar vários arquivos em um único documento. É semelhante ao .zip;

Gzip é um método de compressão.

Em muitos casos, o tar e gzip são utilizados em conjunto, pois é conveniente comprimir o tamanho de um agrupamento de arquivos. Esse é o formato .tar.gz

Há ainda o Bzip, outro método de compressão.

### Tar Linux

É uma ferramenta para agrupar arquivos. Os métodos mais importantes:

- c: create a .tar
- f: Dá a permissão para utilizar arquivos do diretório (em geral é obrigatório)
- x: extract a .tar
- z: Informa que é .tar.gz;
- j: Informa que é .tar.bz
- v: verbose; Informa o que está sendo feito.
Exemplo:
```bash
  // Extrai de um arquivo .tar.gz
  tar -zxvf archive.tar.gz

  // Comprime para um arquivo .tar
  tar -cf archive.tar file1 file2

  // Comprime para .tar.gz
  tar -zcf archive.tar.gz file1 file2 file3
```

### Gzip Linux
Para comprimir arquivos no LInux, existem as funções:
- gzip: Compacta 1 arquivo (gZip)
- gunzip: Descompacta 1 arquivo (gUnzip)

## Blob vs Buffer
...

## Links

<https://research-protocol-ai.ipns.dweb.link/tutorials/resnetlab-on-tour/content-addressing/>

<https://www.tabnine.com/code/javascript/functions/tar/extract>

<https://github.com/koorchik/node-mystem3/blob/5418368fc8bc79e979a29e31acf3fc56d9838c82/bin/download-mystem.js#L76>

<https://gist.github.com/gera2ld/560e7314dd9cdefd110bd019d8603353>

## Tasks

- [ ] Instalação de Sawtooth
- [ ] Exemplo de Sawtooth

...

- [ ] Pesquisar as operações de CRUD no Sawtooth
- [ ] Pesquisar sobre carteiras