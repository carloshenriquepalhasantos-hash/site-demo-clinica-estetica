# Aurora Estética — modelo demonstrativo

Site estático de demonstração para apresentar uma possível experiência digital a clínicas de estética. A marca, os textos e os contatos são exemplos; personalize e revise o conteúdo antes de usar em um projeto real.

## Visualizar

Não é necessário instalar dependências. Abra `index.html` no navegador ou inicie um servidor local na pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse <http://localhost:8000>.

## Conteúdo

- Página principal com protocolos, filtros, diagnóstico demonstrativo e perguntas frequentes.
- Páginas de exemplo para [política de privacidade](./politica-privacidade.html) e [termos de uso](./termos-uso.html).
- Imagens dos protocolos em `assets/img/protocolos/`.
- Foto horizontal do banner em `assets/img/Tratamento Facial em Clínica Elegante.png`.
- Foto da profissional na seção de apresentação em `assets/img/doutora.png`.

As imagens são exibidas com `object-fit: cover`. O enquadramento do banner é definido em `css/sections.css`; o recorte do retrato vertical é ajustado pela regra `.doctor-card-visual img`.

## Personalização

1. Atualize a marca e os textos em `index.html`.
2. Troque as imagens por arquivos autorizados pela clínica e ajuste os textos alternativos.
3. Configure os contatos reais: os CTAs atuais levam apenas à seção demonstrativa `#contato`.
4. Revise as páginas legais, serviços, qualificações e informações antes de publicar.

Este projeto não possui integração de agendamento. As páginas legais incluídas são exemplos e não substituem revisão jurídica ou de privacidade.
