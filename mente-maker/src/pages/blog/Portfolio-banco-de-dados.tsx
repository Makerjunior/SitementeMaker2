import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock } from 'react-icons/fa';
import FooterCompartilhamento from '../../components/FooterCompartilhamento';
import Reader from '../../components/Reader';
export default function PortfolioBancoDeDados() {
  const isClient = typeof window !== 'undefined';
  const currentUrl = isClient ? window.location.href : '';

  return (
    <Layout>
      <motion.div
        className="container-responsive py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Tags de categorização */}
            <div className="flex flex-wrap justify-center gap-2 mb-4 ignore-reader">
              {["Banco de Dados", "SQL", "MySQL", "Modelagem de Dados"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Título principal */}
            <h1 className="text-4xl font-bold text-center mb-6 leading-tight">
              Portfólio - Programação em Banco de Dados
            </h1>

            {/* Informações adicionais */}
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8 text-sm">
              <div className="flex items-center gap-2 ignore-reader">
                <FaCalendar />
                <span>13 Mai 2024</span>
              </div>
              <div className="flex items-center gap-2 ignore-reader">
                <FaClock />
                <span>10 min de leitura</span>
              </div>
            </div>
            <Reader />
            {/* Corpo do artigo */}
            <div className="prose max-w-none text-justify space-y-6">
              <h2>Introdução</h2>
              <p>
                Olá, pessoal! Sejam bem-vindos à nossa live especial do canal Mente Maker, onde vamos explorar juntos o processo de construção de um portfólio de programação em banco de dados. Hoje, vamos mergulhar em um exemplo prático de como criar um banco de dados para gerenciar uma loja. Este código foi usado durante a nossa live e é uma excelente demonstração de como você pode aplicar seus conhecimentos em SQL para resolver problemas do mundo real.
              </p>

              <h2>Passo 1: Criando o Banco de Dados</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg">
                <code>
                  CREATE DATABASE IF NOT EXISTS Loja;<br />
                  USE Loja;
                </code>
              </pre>
              <p>
                Nesta etapa, estamos criando um banco de dados chamado “Loja”, ou usando-o se já existir. Isso nos permite ter um espaço dedicado para armazenar todas as informações relacionadas à nossa loja.
              </p>

              <h2>Passo 2: Definindo Tabelas para Estados e Municípios</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>
                  CREATE TABLE Estado (<br />
                    ID INT PRIMARY KEY AUTO_INCREMENT,<br />
                    Nome VARCHAR(100) NOT NULL,<br />
                    UF VARCHAR(2) NOT NULL<br />
                  );<br />
                  <br />
                  CREATE TABLE Municipio (<br />
                    ID INT PRIMARY KEY AUTO_INCREMENT,<br />
                    Fk_EstadoID INT NOT NULL,<br />
                    Nome VARCHAR(100) NOT NULL,<br />
                    CodIBGE INT NOT NULL,<br />
                    FOREIGN KEY (Fk_EstadoID) REFERENCES Estado(ID)<br />
                  );
                </code>
              </pre>
              <p>
                Aqui, estamos criando duas tabelas, “Estado” e “Municipio”, para armazenar informações sobre os estados e municípios onde nossa loja opera.
              </p>

              <h2>Passo 3: Criando uma Tabela para Clientes</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>
                  CREATE TABLE Cliente (<br />
                    ID INT PRIMARY KEY AUTO_INCREMENT,<br />
                    Nome VARCHAR(80) NOT NULL,<br />
                    CPF VARCHAR(11) NOT NULL,<br />
                    Celular VARCHAR(11) NOT NULL,<br />
                    EndLogradouro VARCHAR(100) NOT NULL,<br />
                    EndNumero VARCHAR(10) NOT NULL,<br />
                    EndMunicipio INT NOT NULL,<br />
                    EndCEP CHAR(8) NOT NULL,<br />
                    Fk_Municipio_ID INT NOT NULL,<br />
                    FOREIGN KEY (Fk_Municipio_ID) REFERENCES Municipio(ID)<br />
                  );
                </code>
              </pre>
              <p>
                A tabela “Cliente” armazenará informações sobre os clientes da nossa loja, como nome, CPF, endereço e outros detalhes.
              </p>

              <h2>Passo 4: Criando uma Tabela para Contas a Receber</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>
                  CREATE TABLE ContaReceber (<br />
                    ID INT PRIMARY KEY AUTO_INCREMENT,<br />
                    Fk_Cliente_ID INT NOT NULL,<br />
                    FaturaVendaID INT NOT NULL,<br />
                    DataConta DATE NOT NULL,<br />
                    DataVencimento DATE NOT NULL,<br />
                    Valor DECIMAL(18,2) NOT NULL,<br />
                    Situacao ENUM('1','2','3') NOT NULL,<br />
                    FOREIGN KEY (Fk_Cliente_ID) REFERENCES Cliente(ID)<br />
                  );
                </code>
              </pre>
              <p>
                A tabela “ContaReceber” registra todas as contas a receber da nossa loja, incluindo informações sobre o cliente, fatura de venda, datas e valores.
              </p>

              <h2>Passo 5: Inserindo Dados</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>
                  -- Inserindo estados e municípios<br />
                  INSERT INTO Estado (Nome, UF) VALUES<br />
                  ('São Paulo', 'SP'),<br />
                  ('Rio de Janeiro', 'RJ'),<br />
                  ('Minas Gerais', 'MG');<br />
                  <br />
                  INSERT INTO Municipio (Fk_EstadoID, Nome, CodIBGE) VALUES<br />
                  (1, 'São Luiz', 3550308),<br />
                  (2, 'São João', 3304557),<br />
                  (3, 'Santo Antonio', 3106200);<br />
                  <br />
                  -- Inserindo clientes<br />
                  INSERT INTO Cliente (Nome, CPF, Celular, EndLogradouro, EndNumero, EndMunicipio, Fk_Municipio_ID, EndCEP) VALUES<br />
                  ('Ana Silva', '98765432101', '9876543210', 'Rua A', '123', 1, 1, '98765432'),<br />
                  ('José Santos', '12345678910', '1234567890', 'Rua B', '456', 2, 2, '12345678'),<br />
                  ('Maria Oliveira', '45678912310', '4567891230', 'Rua C', '789', 3, 3, '45678912');<br />
                  <br />
                  -- Inserindo contas a receber<br />
                  INSERT INTO ContaReceber (Fk_Cliente_ID, FaturaVendaID, DataConta, DataVencimento, Valor, Situacao) VALUES<br />
                  (1, 105, '2024-08-06', '2025-05-15', 100.00, '1'),<br />
                  (2, 106, '2024-04-07', '2025-03-28', 200.00, '2'),<br />
                  (3, 107, '2024-06-25', '2025-04-20', 300.00, '3');
                </code>
              </pre>
              <p>
                Agora, vamos inserir alguns dados de exemplo para que possamos consultar e visualizar as informações do banco de dados.
              </p>

              <h2>Passo 6: Consultando os Dados</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>
                  SELECT * FROM Estado;<br />
                  SELECT * FROM Cliente;<br />
                  SELECT * FROM Municipio;
                </code>
              </pre>

              <h2>Passo 7: Criando uma Visualização das Contas Não Pagas</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>
                  CREATE VIEW ContasNaoPagas AS<br />
                  SELECT CR.ID AS 'ID da conta a receber',<br />
                         C.Nome AS 'Nome do Cliente',<br />
                         C.CPF AS 'CPF do Cliente',<br />
                         CR.DataVencimento AS 'Data de vencimento',<br />
                         CR.Valor AS 'Valor da conta'<br />
                  FROM ContaReceber CR<br />
                  JOIN Cliente C ON CR.Fk_Cliente_ID = C.ID<br />
                  WHERE CR.Situacao = '1';
                </code>
              </pre>

              <h2>Passo 8: Visualizando as Contas Não Pagas</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>
                  SELECT * FROM ContasNaoPagas;
                </code>
              </pre>

              <h2>Passo 9: Criando o Diagrama MER</h2>
              <p>
                O MySQL Workbench oferece uma ferramenta chamada "Reverse Engineering" para criar um modelo de banco de dados a partir de um banco de dados existente. Siga os passos abaixo para gerar o diagrama:
              </p>
              <ul className="list-inside list-decimal space-y-2">
                <li>Selecione a opção "Reverse Engineering" no MySQL Workbench.</li>
                <li>Siga as etapas de configuração até que o diagrama seja gerado automaticamente.</li>
                <li>Após a conclusão, você terá um diagrama visual de todo o banco de dados.</li>
              </ul>
            </div><br />
            <p className="text-lg mb-4 text-gray-700">
                Confira no YouTube para uma explicação detalhada:
              </p>
              <div className="relative w-full pb-[56.25%] mb-8 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Pp1HVfEyytw"
                  title="Tutorial de Computação em Nuvem"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

            {/* Rodapé com informações de compartilhamento */}
            <FooterCompartilhamento currentUrl={currentUrl} />
          </div>
        </article>
      </motion.div>
    </Layout>
  );
}
