### Informações Importantes
- next.config: Há comentários neste arquivo o qual indica o método de deploy e configurações para que imagens sejam carregadas corretamente quando realizado o deploy com o parâmetro mode export ou standalone.
Modo export é usado para buildar sites estáticos, com isso, o componentes Image do nextJs que visa melhorar o carregamento das imagens, se comporta de forma inadequada e exige o parâmetro abaixo
```json
    images: { 
        unoptimized: true
    }
``` 
Caso não seja executado em modo estático, pode-se remover o parâmetro para ter maior proveito do componente Image
- Build: Pode-se utilizar os comandos npm run build ou npx next build, ambos terão o mesmo resultado no final. Para iniciar o projeto no modo estático precisa levar a pasta out gerada para a raiz do servidor web que está sendo usado; Caso for usado o modo Standalone é somente levar o projeto para o servidor e executar-lo com npm start.

