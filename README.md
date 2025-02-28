# Reservou - Sistema de Gerenciamento de Reservas de Hospedagem

## Descrição
Reservou é um sistema web desenvolvido para gerenciar reservas de acomodações, permitindo que clientes pesquisem opções disponíveis, realizem reservas e que administradores gerenciem o inventário de acomodações e clientes.

## Tecnologias Utilizadas
- **Frontend:** Angular 19+, PrimeNG, Tailwind CSS
- **Backend:** NestJS, MikroORM
- **Banco de Dados:** PostgreSQL
- **Monorepo:** Nx Nrwl
- **Versionamento de Código:** Git

## Funcionalidades

### Para Clientes:
- **Pesquisar Acomodações Disponíveis**: Filtrar por tipo, localização e capacidade.
- **Realizar Reserva**: Selecionar acomodação, preencher dados e confirmar reserva.
- **Gerenciar Reservas**: Listar e cancelar reservas com pelo menos 24h de antecedência.

### Para Administradores:
- **Gerenciar Acomodações**: Adicionar, editar, excluir e alterar status das acomodações.
- **Gerenciar Reservas**: Listar todas as reservas e cancelar manualmente, se necessário.

## Instalação e Execução

### 1. Clonar o Repositório
```sh
 git clone https://github.com/seu-usuario/reservou.git
 cd reservou
```

### 2. Instalar Dependências
```sh
yarn install
```

### 3. Configurar o Banco de Dados
- Criar um banco de dados PostgreSQL.
- Configurar as variáveis de ambiente no arquivo `.env`:

```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/reservou
JWT_SECRET=sua_chave_secreta
```

### 4. Executar Migrações
```sh
yarn db:migrate
```

### 5. Iniciar o Backend
```sh
yarn start:server
```

### 6. Iniciar o Frontend
```sh
yarn start:client
```

## Estrutura do Projeto
```
reservou/
│-- apps/
│   ├── frontend/ (Frontend Angular)
│   ├── backend/ (Backend NestJS)
│-- libs/ (Bibliotecas compartilhadas)
│-- .env
│-- nx.json
│-- README.md
│-- package.json
```

## Deploy
- **Frontend:** Vercel
- **Backend:** Render
- **Banco de Dados:** Railway ou Supabase

## Autenticação e Autorização
- Admins e clientes possuem acessos diferenciados.
- Autenticação JWT.

## Melhorias Futuras
- Implementação de mapas para exibir a localização das acomodações.
- Envio de emails automáticos de confirmação e cancelamento de reserva.
- Sistema de pagamento online.

## Contato
Caso tenha dúvidas ou sugestões, entre em contato pelo email `robson.p.martins2020@gmail.com`.

