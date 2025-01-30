import Layout from '../components/Layout';
import Image from 'next/image';

export default function Sobre() {
  const content= "";
  return (
    <Layout>
  


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Sobre o Mente Maker</h1>
        <div className="prose lg:prose-xl max-w-none space-y-6">
          <div className="flex flex-col items-center mb-6">
            {/* Logo centralizada acima do texto */}
            <Image
              src="/logo.png" // Caminho para a logo
              alt="Logo Mente Maker"
              width={100}  // Largura ajustada para a logo
              height={100} // Altura ajustada para a logo
              className="rounded-full" // Torna a imagem arredondada
            />
            {/* Texto abaixo da imagem */}
            <p className="text-xl mt-4 text-center">
              O Mente Maker, idealizado por Junior Pereira, é um projeto dedicado a democratizar o acesso ao
              conhecimento em programação e tecnologia. Nossa missão é proporcionar educação de qualidade de forma
              gratuita, oferecendo uma ampla variedade de cursos e conteúdos para todos os níveis de aprendizado.
              Em nosso canal no YouTube, os iniciantes têm a oportunidade de dar os primeiros passos no mundo da
              programação, aprendendo desde os conceitos básicos até tópicos mais avançados.
            </p>
          </div>

          <p>
            Com uma abordagem didática e acessível, buscamos tornar o aprendizado de programação uma experiência
            prazerosa e enriquecedora para todos os nossos espectadores. Nosso conteúdo abrange uma vasta gama de
            temas, desde introdução à programação, passando por linguagens de programação populares como Python,
            JavaScript e Banco de Dados, até o desenvolvimento de aplicativos móveis e web. Além disso, oferecemos
            tutoriais, dicas práticas e projetos prontos para que os alunos possam colocar em prática o que aprenderam.
          </p>

          <p>
            Acreditamos que o conhecimento em programação é uma ferramenta poderosa para o desenvolvimento pessoal
            e profissional, e estamos empenhados em fornecer os recursos necessários para que nossos alunos
            alcancem seus objetivos. Com o Mente Maker, você está convidado a embarcar em uma jornada de aprendizado
            transformadora, onde o acesso ao conhecimento é livre e ilimitado. Venha fazer parte dessa comunidade de
            aprendizes e torne-se um mestre da tecnologia!
          </p>
        </div>
      </div>
   
    </Layout>
  );
}
