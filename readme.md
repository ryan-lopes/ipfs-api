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
