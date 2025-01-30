import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendar,FaClock } from 'react-icons/fa';
import Link from 'next/link';
import FooterCompartilhamento from '../../components/FooterCompartilhamento';
import Reader from '../../components/Reader';
export default function FreelancerIniciantes() {
  // Verifica se estamos no lado do cliente
  const isClient = typeof window !== 'undefined';
  const currentUrl = isClient ? window.location.href : '';

  return (
    <Layout>
      <motion.main
        className="container-responsive py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <article className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">

          <div className="p-8">
            {/* Tags de categorização */}
            <div className="flex gap-2 mb-6 ignore-reader">
              {["Freelancer", "Carreira", "Iniciantes"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Título Principal */}
            <h1 className="text-4xl font-extrabold text-center mb-6 leading-tight text-gray-900">
              Onde encontrar trabalhos freelancer para iniciantes
            </h1>

             {/* Imagem principal */}
             <div className="relative h-[250px] mb-8">
                  <Image
                    src="/images/blog/freelancepost.png?q=80&w=1000"
                    alt="Freelancer Iniciante"
                    fill
                    className="object-cover rounded-lg"
                  />
            </div>

            {/* Metadados do Artigo */}
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-10 text-sm">
              <div className="flex items-center gap-1 ignore-reader">
                <FaCalendar className="text-gray-500" />
                <time dateTime="2024-03-10">10 de Março de 2024</time>
              </div>
              <div className="flex items-center gap-1 ignore-reader">
                <FaClock className="text-gray-500" />
                <span>5 minutos de leitura</span>
              </div>
            </div>
            <Reader />
            {/* Conteúdo do Artigo */}
            <div className="prose max-w-none text-gray-800 text-justify">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Introdução ao Freelancing</h2>
              <p className="mb-4">
                Trabalhar como freelancer pode ser uma excelente maneira de iniciar sua carreira em programação, ganhar experiência prática e construir um portfólio sólido.
              </p>
              <p className="mb-6">
                Como freelancer, você tem a flexibilidade de escolher seus projetos, trabalhar com diferentes tipos de clientes e aumentar sua renda de acordo com suas habilidades. No entanto, também existem desafios, como a necessidade de gerenciar seu próprio tempo e aprender a lidar com a administração do seu trabalho.
              </p>

               {/* Imagem ilustrativa */}
               <div className="relative h-[250px] mb-8">
                  <Image
                    src="/images/blog/bookkeeper.jpg?q=80&w=1000"
                    alt="Freelancer Iniciante"
                    fill
                    className="object-cover rounded-lg"
                  />
               </div>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Plataformas Recomendadas</h2>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Plataformas Internacionais</h3>
              <ul className="list-inside list-disc mb-6">
                <li className="mb-2">
                    <span className="font-semibold"> <Link href="https://www.upwork.com/"  target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Upwork</Link></span>
                      <ul className="list-inside list-disc ml-4 mt-2">
                          <li>Grande volume de projetos</li>
                           <li>Sistema de proteção ao freelancer</li>
                            <li>Perfil verificado</li>
                            <li>Pagamentos seguros</li>
                        </ul>
                   </li>
                   <li className="mb-4">
                      <span className="font-semibold"><Link href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Fiverr</Link></span>
                       <ul className="list-inside list-disc ml-4 mt-2">
                            <li>Bom para serviços específicos</li>
                           <li>Você define seus pacotes</li>
                           <li>Sistema de níveis</li>
                           <li>Marketing integrado</li>
                       </ul>
                  </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Plataformas Nacionais</h3>
               <ul className="list-inside list-disc mb-6">
                    <li className="mb-2">
                        <span className="font-semibold"><Link href="https://www.workana.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Workana</Link></span>
                       <ul className="list-inside list-disc ml-4 mt-2">
                            <li>Foco no mercado latino</li>
                           <li>Projetos em português</li>
                           <li>Pagamento em reais</li>
                      </ul>
                    </li>
                    <li className="mb-4">
                         <span className="font-semibold"><Link href="https://www.99freelas.com.br/" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:underline">99Freelas</Link></span>
                           <ul className="list-inside list-disc ml-4 mt-2">
                                <li>Mercado brasileiro</li>
                                 <li>Bom para iniciantes</li>
                               <li>Interface em português</li>
                           </ul>
                    </li>
              </ul>

               {/* Imagem ilustrativa */}
               <div className="relative h-[250px] mb-8">
                  <Image
                    src="/images/blog/money.jpg?q=80&w=1000"
                    alt="Freelancer Iniciante"
                    fill
                    className="object-cover rounded-lg"
                  />
               </div>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Como Se Destacar</h2>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Perfil Profissional</h3>
             <ul className="list-inside list-disc mb-6">
               <li>Foto profissional</li>
                 <li>Descrição clara e objetiva</li>
                <li>Portfólio atualizado</li>
                  <li>Habilidades relevantes</li>
                  <li>Assine sua identidade de marca</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Primeiros Projetos</h3>
               <ul className="list-inside list-disc mb-6">
                   <li>Comece com projetos menores</li>
                    <li>Cobre preços competitivos</li>
                   <li>Entregue antes do prazo</li>
                    <li>Peça avaliações</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Dicas de Precificação</h2>
              <p className="mb-4">
                Para iniciantes, recomenda-se:
              </p>
               <ul className="list-inside list-disc mb-6">
                <li>Pesquise preços do mercado</li>
                 <li>Comece com valores mais baixos</li>
                 <li>Aumente gradualmente conforme experiência</li>
                 <li>Considere a complexidade dos projetos</li>
                 <li>Inclua margem para revisões e alterações</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Gestão de Projetos</h2>
              <p className="mb-4">
                Gerenciar um projeto de freelancer pode ser desafiador. Além do trabalho em si, é importante saber como organizar seu tempo, manter a comunicação com o cliente e garantir que tudo seja entregue conforme o esperado. Aqui estão algumas dicas:
              </p>
              <ul className="list-inside list-disc mb-6">
                 <li>Use contratos claros e bem definidos</li>
                <li>Defina escopo detalhado e expectativas</li>
                 <li>Estabeleça prazos realistas e cumpra-os</li>
                 <li>Mantenha uma comunicação frequente e transparente</li>
                <li>Documente tudo: acordos, pagamentos, feedbacks</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Evitando Problemas</h2>
              <p className="mb-4">
                Evitar problemas durante a execução de projetos pode ser crucial para a construção de uma boa reputação como freelancer. Confira algumas estratégias:
              </p>
                <ul className="list-inside list-disc mb-6">
                    <li>Verifique o histórico e a reputação do cliente</li>
                    <li>Use sistemas de pagamento seguros, como PayPal ou TransferWise</li>
                    <li>Divida projetos grandes em etapas menores e entregáveis</li>
                    <li>Mantenha backups regulares do trabalho entregue</li>
                    <li>Tenha termos de serviço claros e detalhados</li>
               </ul>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Crescimento Profissional</h2>
              <p className="mb-4">
                Para evoluir como freelancer e se destacar no mercado, o aprendizado contínuo é essencial. Veja algumas dicas para o seu crescimento profissional:
              </p>
               <ul className="list-inside list-disc mb-6">
                 <li>Aprenda novas tecnologias constantemente</li>
                 <li>Construa uma rede de contatos sólida e busque parcerias</li>
                <li>Especialize-se em nichos de mercado que tenham alta demanda</li>
                 <li>Invista em marketing pessoal: portfólio, redes sociais, e conteúdo</li>
                 <li>Colete depoimentos de clientes satisfeitos</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Como Equilibrar Trabalho e Vida Pessoal</h2>
              <p className="mb-4">
                Como freelancer, é fácil cair na armadilha de trabalhar sem parar. A chave para uma carreira de longo prazo é o equilíbrio. Veja como fazer isso:
              </p>
              <ul className="list-inside list-disc mb-6">
                 <li>Defina uma rotina de trabalho diária e respeite os horários</li>
                <li>Crie um espaço de trabalho dedicado, longe de distrações</li>
                <li>Estabeleça limites com seus clientes para evitar sobrecarga</li>
                 <li>Tire pausas regulares para evitar o esgotamento</li>
                <li>Desconecte-se do trabalho ao final do dia para recarregar as energias</li>
             </ul>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Conclusão</h2>
              <p className="mb-4">
                O mercado freelancer oferece excelentes oportunidades para iniciantes, mas também exige dedicação e um planejamento cuidadoso. Ao seguir estas dicas e estratégias, você pode construir uma carreira sólida e bem-sucedida como freelancer.
              </p>
              <p className="mb-8">
                Não tenha medo de começar pequeno e aprender ao longo do caminho. A jornada para se tornar um freelancer bem-sucedido é um processo contínuo de aprendizagem e adaptação.
              </p>
                {/* Chamada para Ação */}
                 <div className="bg-blue-50 rounded-md p-6 text-center mb-8">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Pronto para começar sua jornada freelancer?</h3>
                        <p className="text-blue-700 mb-4">Explore as plataformas recomendadas, aprimore suas habilidades e construa uma carreira de sucesso!</p>
                      </div>
           </div>
              {/* Footer de Compartilhamento */}
               <FooterCompartilhamento currentUrl={currentUrl} />

          </div>
        </article>
      </motion.main>
    </Layout>
  );
}