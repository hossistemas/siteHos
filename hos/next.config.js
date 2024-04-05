/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export', /* Comente esse parametro caso queira buildar para rodar em server, deixe descomentado caso queira buildar estaticamente */
    env: {
        API_EMAIL: "https://app.hos.com.br/email",
        API_KEY_MAIL: "5ae1ff3adf1ae2305c5f3f26eb5bcb6cb00cde26"
    },
    images: { 
        unoptimized: true /* Comente esse parametro caso queira usar as otimizações disponiveis [Estaticamente não funciona pois o SRC fica incorreto e o webpack não resolve o path], descomente somente quando queira a performance de imagens e para isso é necessário estar rodando como standalone */
    } 
};

module.exports = nextConfig;
