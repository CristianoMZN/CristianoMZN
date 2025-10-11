# Política de Privacidade — Curia App

Esta Política de Privacidade explica como o Curia App, aplicativo multiplataforma de gestão financeira pessoal, coleta, utiliza, armazena e protege seus dados.

## 1. Quais Dados Coletamos

O Curia App coleta apenas os dados necessários para o funcionamento das funcionalidades do aplicativo, minimizando ao máximo a coleta de dados pessoais.

### Dados Pessoais
- **Dados de autenticação**: quando o usuário realiza login via Google (Firebase Auth), coletamos o e-mail, nome e UID para identificação do usuário e vinculação às funcionalidades de finanças pessoais e compartilhadas (família).
- **Dados de membros de família**: ao criar ou gerenciar famílias/grupos, o app pode coletar e-mails ou UID de outros membros convidados para compartilhamento de finanças.

### Dados Financeiros
- **Receitas, despesas, investimentos e dívidas**: valores, datas, categorias, notas, lembretes de pagamento/cobrança, recorrência, histórico de lançamentos, saldo devedor, juros, evolução de financiamentos.
- **Categorias**: padrão ou personalizadas pelo usuário.
- **Dados extraídos de notas fiscais eletrônicas (NF-e/NFC-e) e boletos**: os dados são coletados via QR Code/código de barras e incluem valor, data, descrição, vencimento e informações relevantes para o gerenciamento financeiro.
- **Dashboard e relatórios**: dados agregados para visualização de gráficos e previsões, como balanço mensal, gastos por categoria, evolução de investimentos, financiamentos e dívidas.

### Dados de Configuração e Preferências
- Tema, moeda, preferências de lembretes, privacidade e notificações locais.

### Dados de Notificações Locais
- O Curia App agenda notificações locais no próprio dispositivo para lembretes de pagamentos ou cobranças, sem envio destes dados para servidores externos.

## 2. Como Utilizamos os Dados

- Para autenticação e acesso seguro ao aplicativo.
- Para funcionamento das funcionalidades principais: registro e controle de receitas, despesas, investimentos e dívidas.
- Para permitir compartilhamento de finanças entre membros de família/grupos.
- Para gerar dashboards, relatórios e previsões financeiras.
- Para agendamento de notificações locais de lembretes de pagamento/cobrança.
- Para leitura e processamento de notas fiscais/boletos via QR Code/código de barras.

## 3. Onde os Dados São Armazenados

- **Cloud Firestore (Firebase)**: dados financeiros, pessoais e de família são armazenados de forma segura e restrita por usuárioId/familiaId, conforme regras do Firestore.
- **No dispositivo**: notificações locais, caches temporários e preferências de configuração podem ser armazenados apenas localmente.
- **Firebase Storage** (futuro): caso anexos de comprovantes sejam implementados.

## 4. Compartilhamento de Dados

- Os dados armazenados no Firestore são acessíveis apenas ao próprio usuário e, quando aplicável, aos membros de sua família/grupo.
- Não compartilhamos dados com terceiros ou empresas externas.
- Não utilizamos dados para fins publicitários ou de monetização.

## 5. Segurança

- Utilizamos autenticação segura via Firebase Auth (Google).
- As regras de acesso ao banco de dados Firestore restringem leituras e escritas por usuárioId/familiaId, protegendo a privacidade dos dados.
- Buscamos minimizar a coleta de dados pessoais, mantendo apenas o essencial para funcionamento do app.

## 6. Telemetria e Coleta Futuras

- O Curia App **não coleta dados de telemetria** ou estatísticas de uso neste momento.
- Caso futuramente sejam coletados dados de uso para melhoria da experiência, o usuário será previamente informado e poderá consentir ou recusar a coleta.

## 7. Permissões

- Para leitura de notas fiscais/boletos é necessário acesso à câmera (QR/barcode scanner).
- Para notificações locais, pode ser solicitada permissão para enviar lembretes no dispositivo.

## 8. Futuras Integrações e Funcionalidades

- Implementações futuras podem incluir notificações push (Firebase Cloud Messaging), anexos de comprovantes (Firebase Storage), integração bancária (OFX/CSV), entre outros. Sempre que novas funcionalidades exigirem coleta ou uso adicional de dados, a política será atualizada e o usuário será notificado.

## 9. Direitos do Usuário

- O usuário pode solicitar a exclusão de seus dados a qualquer momento, diretamente no aplicativo ou via contato de suporte.
- O usuário pode editar, atualizar ou corrigir informações financeiras e pessoais sempre que desejar.

## 10. Dúvidas e Contato

Em caso de dúvidas sobre esta política, entre em contato pelo e-mail de suporte disponível na loja de aplicativos ou pelo repositório oficial no GitHub.

---

Data da última atualização: 11/10/2025
