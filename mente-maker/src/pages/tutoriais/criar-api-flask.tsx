import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaPython } from 'react-icons/fa';
import Reader from '../../components/Reader';
export default function CriarApiFlask() {
  return (
    <Layout>
      <motion.div 
        className="container-responsive py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8"> {/* Padding ajustado para telas menores */}
              <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
                <FaPython className="text-3xl md:text-4xl text-blue-500" /> {/* Tamanho do ícone ajustado */}
                <h1 className="text-2xl md:text-4xl font-bold">Como Criar uma API RESTful com Flask</h1>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8"> {/* Flex wrap para telas menores */}
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                  Python
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                  Intermediário
                </span>
                 <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                  9 minutos (Aprox.)
                </span>
              </div>
              <Reader />
              <div className="prose max-w-none">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Introdução Detalhada</h2>
                 <p className="mb-4">
                  Este guia completo e detalhado tem como objetivo te conduzir pela criação de uma API RESTful utilizando o <strong className="font-bold">Flask</strong>, um microframework Python conhecido por sua leveza e flexibilidade. Ao longo deste tutorial, você não apenas aprenderá a construir uma API funcional, mas também a incorporar autenticação, documentação clara e boas práticas de desenvolvimento. Nosso foco é garantir que, mesmo sem experiência prévia, você consiga seguir cada passo e construir algo robusto e útil. O Flask, por ser um microframework, oferece uma grande liberdade para estruturar sua aplicação da maneira que melhor se adequa às suas necessidades, proporcionando uma excelente introdução ao desenvolvimento backend.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Pré-requisitos Essenciais</h2>
                  <p className="mb-4">
                     Antes de começarmos, é importante garantir que você tenha as seguintes ferramentas e conhecimentos em mãos. Isso assegurará um fluxo de aprendizado suave e eficiente:
                 </p>
                 <ul className="list-disc list-inside mb-4">
                  <li><strong className="font-semibold">Python 3.7+ Instalado:</strong> Certifique-se de ter uma versão recente do Python. Recomendamos a versão 3.7 ou superior. Você pode baixar em <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">python.org/downloads</a>.</li>
                   <li><strong className="font-semibold">Conhecimento Básico de Python:</strong> Compreensão básica da sintaxe Python (variáveis, estruturas de controle, funções, orientação a objetos). Se novo em Python, faça um curso introdutório.</li>
                  <li><strong className="font-semibold">Familiaridade com HTTP:</strong> Entender os métodos HTTP (GET, POST, PUT, DELETE) e códigos de status (200, 400, 404, 500).</li>
                 <li><strong className="font-semibold">Editor de Código:</strong> Use um editor de código como VS Code, Sublime Text, PyCharm ou Atom.</li>
                </ul>

                 <h2 className="text-xl md:text-2xl font-semibold mb-4">Configuração do Ambiente (Passo a Passo)</h2>
                  <p className="mb-4">
                      A configuração adequada do ambiente é um passo crucial para evitar conflitos de dependências e manter seu projeto organizado. Vamos criar um ambiente virtual e instalar as dependências necessárias:
                  </p>
                  <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-4"> {/* overflow-x-auto para scroll horizontal */}
                  <code className="block whitespace-pre-wrap">
{`# 1. Criar um ambiente virtual isolado para o projeto
python -m venv venv

# 2. Ativar o ambiente virtual
# No Windows:
venv\\Scripts\\activate

# No Linux/macOS:
source venv/bin/activate

# 3. Instalar as dependências necessárias
pip install flask flask-restful flask-sqlalchemy flask-jwt-extended

# (Opcional) Para verificar e salvar as dependências
# pip freeze > requirements.txt
`}
                  </code>
                </pre>

                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Estrutura Detalhada do Projeto</h2>
                  <p className="mb-4">
                     Uma estrutura de projeto bem definida é essencial para manter seu código organizado e escalável. Aqui está a estrutura que vamos usar:
                   </p>
                   <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-4">
                     <code className="block whitespace-pre-wrap">
{`api/  # Pasta raiz do projeto
  ├── app.py         # Arquivo principal da aplicação Flask
  ├── config.py      # Arquivo para configurações da aplicação
  ├── models/        # Pasta para os modelos do banco de dados
  │   └── user.py    # Modelo para a entidade User
  ├── resources/     # Pasta para os recursos da API (endpoints)
  │   └── user.py    # Recursos relacionados a usuários
  └── requirements.txt # Lista de dependências do projeto
`}
                    </code>
                    </pre>

                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Implementação da Aplicação Flask (app.py)</h2>
                   <p className="mb-4">
                     Vamos iniciar com a criação do arquivo principal `app.py`, onde inicializaremos a aplicação Flask e configuraremos o banco de dados:
                   </p>
                  <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-4">
                  <code className="block whitespace-pre-wrap">
{`# Importar as classes e funções necessárias do Flask e outras bibliotecas
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

# Inicializar a aplicação Flask
app = Flask(__name__)

# Configurar a URI do banco de dados SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'

# Desabilitar o rastreamento de modificações do SQLAlchemy
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configurar a chave secreta usada para assinar tokens
app.config['SECRET_KEY'] = 'sua-chave-secreta'

# Inicializar a extensão SQLAlchemy
db = SQLAlchemy(app)

# Inicializar a API Flask-RESTful
api = Api(app)

# Executar a aplicação Flask
if __name__ == '__main__':
    app.run(debug=True)
`}
                  </code>
                </pre>

                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Criando o Modelo de Usuário (models/user.py)</h2>
                  <p className="mb-4">
                    Agora, vamos criar o modelo para a entidade `User`, que representa um usuário no nosso sistema:
                  </p>
                  <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-4">
                  <code className="block whitespace-pre-wrap">
{`# Importar a instância do banco de dados
from app import db

# Definir a classe que representa o modelo de usuário
class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
`}
                  </code>
                </pre>

                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Implementando os Recursos da API (resources/user.py)</h2>
                   <p className="mb-4">
                    Aqui, vamos definir os endpoints da API para lidar com o registro de novos usuários:
                  </p>
                  <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-4">
                  <code className="block whitespace-pre-wrap">
{`# Importar as classes e funções necessárias
from flask_restful import Resource, reqparse
from models.user import UserModel

# Definir a classe UserRegister
class UserRegister(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('username',
        type=str,
        required=True,
        help="Campo obrigatório: Nome de usuário"
    )
    parser.add_argument('password',
        type=str,
        required=True,
        help="Campo obrigatório: Senha"
    )

    def post(self):
        data = UserRegister.parser.parse_args()

        if UserModel.query.filter_by(username=data['username']).first():
            return {"message": "Usuário já existe"}, 400

        user = UserModel(**data)
        user.save_to_db()

        return {"message": "Usuário criado com sucesso"}, 201
`}
                  </code>
                </pre>
                
               <h2 className="text-xl md:text-2xl font-semibold mb-4">Configurando os Recursos da API no `app.py`</h2>
                <p className="mb-4">
                  Após criar o recurso de usuário, precisamos importá-lo e registrá-lo na nossa API. Vamos modificar o arquivo `app.py` para adicionar o endpoint `/register`:
                 </p>
                <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-4">
                  <code className="block whitespace-pre-wrap">
{`# Importar as classes e funções necessárias
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
# Importar o recurso UserRegister que criamos
from resources.user import UserRegister

# Inicializar a aplicação Flask
app = Flask(__name__)

# Configurar a URI do banco de dados SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'

# Desabilitar o rastreamento de modificações do SQLAlchemy
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configurar a chave secreta usada para assinar tokens
app.config['SECRET_KEY'] = 'sua-chave-secreta'

# Inicializar a extensão SQLAlchemy
db = SQLAlchemy(app)

# Inicializar a API Flask-RESTful
api = Api(app)

# Adicionar o recurso UserRegister ao endpoint /register
api.add_resource(UserRegister, '/register')

# Executar a aplicação Flask
if __name__ == '__main__':
    app.run(debug=True)
`}
                  </code>
                </pre>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Testando a API Detalhadamente</h2>
                 <p className="mb-4">
                  Agora que temos nossa API básica funcionando, podemos testá-la usando `curl` ou uma ferramenta como Postman. Abaixo, mostramos como criar um novo usuário com curl:
                </p>
                <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-4">
                  <code className="block whitespace-pre-wrap">
{`# Requisição para criar um novo usuário com curl
curl -X POST http://localhost:5000/register \\
  -H "Content-Type: application/json" \\
  -d '{"username":"teste","password":"123456"}'
`}
                  </code>
                </pre>
                
                  <p className="mb-4">
                     <strong>Observação:</strong> O `\` é usado para quebrar o comando em várias linhas para melhor visualização. Ele não é necessário se você escrever o comando em uma única linha.
                   </p>
                    <p className="mb-4">
                       Ao executar este comando, um novo usuário com o nome de usuário `teste` e a senha `123456` será criado no banco de dados. A API deve retornar uma mensagem de sucesso e o código 201.
                     </p>

                 <h2 className="text-xl md:text-2xl font-semibold mb-4">Próximos Passos e Aprimoramentos</h2>
                <p className="mb-4">
                     Este tutorial apresentou uma base sólida para criar uma API com Flask. Para aprimorar ainda mais suas habilidades e construir APIs mais robustas, considere explorar os seguintes passos:
                 </p>
                <ul className="list-disc list-inside mb-6">
                  <li><strong className="font-semibold">Adicionar Autenticação JWT:</strong> Implemente a autenticação baseada em tokens JWT.</li>
                  <li><strong className="font-semibold">Implementar Mais Endpoints:</strong> Desenvolva mais endpoints para outras operações (buscar, atualizar, excluir).</li>
                   <li><strong className="font-semibold">Documentação com Swagger:</strong> Utilize o Swagger para documentar sua API.</li>
                   <li><strong className="font-semibold">Testes Unitários:</strong> Escreva testes unitários para cada componente da sua API.</li>
                </ul>
              </div>
{/*
              <div className="flex justify-center space-x-4 mt-6 md:mt-8">
                <motion.a
                  href="https://github.com/seu-usuario/flask-api-tutorial"
                  className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                > 
                  <FaGithub />
                  <span>Código no GitHub</span>
               </motion.a>
                <motion.a
                  href="/video-tutorial/flask-api"
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay />
                  <span>Ver Vídeo Tutorial</span>
                  
                </motion.a>
                
               
              </div>
*/}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}