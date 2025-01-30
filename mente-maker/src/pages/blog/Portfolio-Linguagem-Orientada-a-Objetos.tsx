import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock } from 'react-icons/fa';
import FooterCompartilhamento from '../../components/FooterCompartilhamento';
import Reader from '../../components/Reader';
export default function PortfolioLinguagemOrientadaObjetos() {
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
              {["Java", "Orientação a Objetos", "NetBeans", "Programação"].map((tag) => (
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
            Portfólio - Programação Orientada a Objetos
            </h1>

            {/* Informações adicionais */}
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8 text-sm">
              <div className="flex items-center gap-2 ignore-reader">
                <FaCalendar />
                <span>23 Mai 2024</span>
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
                Neste tutorial, vamos criar um portfólio em Java com NetBeans para praticar a programação orientada a objetos. O projeto será uma simulação de um sistema bancário, onde você poderá registrar clientes, consultar saldos e realizar depósitos e saques. Vamos começar!
              </p>

              <h2>Passo 1: Baixar e Instalar o NetBeans</h2>
              <h3>Baixe o NetBeans:</h3>
              <p>
                Acesse o site oficial do Apache NetBeans e baixe a versão mais recente compatível com seu sistema operacional.
              </p>
              <h3>Instale o NetBeans:</h3>
              <p>
                Execute o instalador e siga as instruções na tela para concluir a instalação.
              </p>

              <h2>Passo 2: Configurar o NetBeans para Java</h2>
              <h3>Instalar o JDK:</h3>
              <p>
                Certifique-se de que o JDK está instalado no seu sistema. Você pode baixar a versão mais recente do JDK no site oficial da Oracle.
              </p>
              <h3>Configurar o JDK no NetBeans:</h3>
              <p>
                No NetBeans, vá para <code>Tools - Java Platforms</code>, clique em <code>Add Platform</code> e selecione o Java Standard Edition. Navegue até a pasta onde o JDK está instalado e complete a configuração.
              </p>

              <h2>Passo 3: Criar e Configurar um Novo Projeto no NetBeans</h2>
              <h3>Criar um novo projeto:</h3>
              <p>
                No NetBeans, vá em <code>File - New Project</code>, selecione <code>Java - Java Application</code> e nomeie o projeto como <strong>GerenciaBanco</strong>.
              </p>

              <h3>Adicionar a classe ao projeto:</h3>
              <p>
                Crie uma nova classe Java chamada <strong>GerenciaBanco</strong> no projeto e cole o código fornecido abaixo:
              </p>

              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>
{`import java.util.Scanner;

class ContaBancaria {
    public String nome;
    public String sobrenome;
    public String cpf;
    public double saldo;

    public ContaBancaria(String nome, String sobrenome, String cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.saldo = 0.0;
    }

    public double consultarSaldo() {
        return saldo;
    }

    public void depositar(double valor) {
        saldo += valor;
        System.out.println("Depósito de R$ " + valor + " realizado com sucesso.");
    }

    public void sacar(double valor) {
        if (saldo >= valor) {
            saldo -= valor;
            System.out.println("Saque de R$ " + valor + " realizado com sucesso.");
        } else {
            System.out.println("Saldo insuficiente para realizar o saque.");
        }
    }

    public void exibirMenu() {
        Scanner scanner = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\n----- Menu -----");
            System.out.println("1. Consultar Saldo");
            System.out.println("2. Realizar Depósito");
            System.out.println("3. Realizar Saque");
            System.out.println("4. Encerrar");
            System.out.print("Qual a opção você deseja escolher: ");
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.println("Saldo: R$ " + consultarSaldo());
                    break;
                case 2:
                    System.out.print("Digite o valor do depósito: ");
                    double valorDeposito = scanner.nextDouble();
                    depositar(valorDeposito);
                    break;
                case 3:
                    System.out.print("Digite o valor do saque: ");
                    double valorSaque = scanner.nextDouble();
                    sacar(valorSaque);
                    break;
                case 4:
                    System.out.println("Encerrando...");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }
        } while (opcao != 4);

        scanner.close();
    }
}

public class GerenciaBanco {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Seja bem-vindo ao sistema bancário.");
        System.out.print("Qual seu nome: ");
        String nome = scanner.nextLine();
        System.out.print("Qual seu sobrenome: ");
        String sobrenome = scanner.nextLine();
        System.out.print("Qual seu CPF: ");
        String cpf = scanner.nextLine();

        ContaBancaria conta = new ContaBancaria(nome, sobrenome, cpf);
        conta.exibirMenu();

        System.out.println("Muito obrigado por utilizar nossos serviços. Até logo!");
        scanner.close();
    }
}
`}
                </code>
              </pre>

              <h2>Passo 4: Executar o Código</h2>
              <p>
                Compile e execute o código no NetBeans, clicando com o botão direito no projeto e selecionando <code>Run</code>. Siga as instruções para interagir com o sistema bancário.
              </p>

              <h2>Conclusão</h2>
              <p>
                Parabéns! Você agora configurou com sucesso o projeto Java no NetBeans e pode começar a explorar a programação orientada a objetos.
              </p>

              <h2 className="font-semibold text-xl text-blue-600 mt-12">Vídeo Tutorial</h2>
              <p className="text-lg mb-4 text-gray-700">
                Confira este vídeo no YouTube para uma explicação em vídeo sobre como configurar o ambiente de desenvolvimento para computação em nuvem com Java, NetBeans e CloudSim:
              </p>

              <div className="relative w-full pb-[56.25%] mb-8 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/7F4hyVL3XGc"
                  title="Tutorial de Computação em Nuvem"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Rodapé com informações de compartilhamento */}
            <FooterCompartilhamento currentUrl={currentUrl} />
          </div>
        </article>
      </motion.div>
    </Layout>
  );
}
