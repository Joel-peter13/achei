# Patches do system/ — Compatibilidade PHP 8.2+

Todos os patches abaixo resolvem o mesmo problema: PHP 8.2 deprecia a
criação de propriedades não declaradas ("dynamic properties"), e o
CI3 usa esse padrão como mecanismo central de funcionamento
(padrão Super-Objeto). Sem estes patches, a aplicação continua a
correr — mas enche o log de `Deprecated`, e no PHP 9 estas linhas
deixam de funcionar (erro fatal).

Correção aplicada em todos os casos: adicionar `#[\AllowDynamicProperties]`
imediatamente acima da declaração da classe. Este atributo é herdado por
subclasses — não precisa de ser repetido em MY_Controller, models
próprios, etc.

## Ficheiros alterados

| Ficheiro | Classe | Motivo confirmado |
|---|---|---|
| `system/core/Controller.php` | `CI_Controller` | `__construct()` faz `$this->$var = ...` para cada classe do bootstrap |
| `system/core/URI.php` | `CI_URI` | `__construct()` atribui `$this->config` |
| `system/core/Router.php` | `CI_Router` | `__construct()` atribui `$this->config`, `$this->uri` |
| `system/core/Loader.php` | `CI_Loader` | copia todas as propriedades do controller para si (linha ~932) |
| `system/database/DB_driver.php` | `CI_DB_driver` | `__construct()` atribui config de `database.php`, incl. `failover` (não declarada) |

## Como reaplicar numa atualização do CI3

1. Descarrega a nova versão do CI3.
2. `git apply patches/0001-....patch` a partir da raiz do projeto novo.
3. Se o apply falhar (ficheiro mudou de estrutura na nova versão), reaplica
   manualmente: encontra `class NomeDaClasse {` no ficheiro e adiciona
   `#[\AllowDynamicProperties]` na linha anterior.
4. Corre a app em `ENVIRONMENT = 'development'` e verifica o log —
   qualquer `Deprecated: Creation of dynamic property` que sobrar é um
   sítio novo a patchear.

## Como testar que continua a funcionar

Ver `application/controllers/Teste_php8.php` (não faz parte da app —
é só diagnóstico; recria-o se precisares de testar de novo).