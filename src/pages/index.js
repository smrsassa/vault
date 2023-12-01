import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
          {/* <img src="img/pelicano.png" alt="pelicano" style={{width: "300px", height: "250px"}} /> */}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Suma Teológica é uma obra monumental escrita por São Tomás de Aquino, um teólogo e filósofo cristão do século XIII. É considerada uma das obras mais importantes e influentes da teologia e filosofia escolástica.

      A Suma Teológica busca apresentar uma sistematização abrangente da teologia cristã, abordando uma ampla gama de tópicos teológicos, filosóficos e morais. Ela foi escrita como um manual para estudantes de teologia e como uma resposta aos desafios intelectuais e teológicos de sua época.
      
      A obra está estruturada em forma de perguntas e respostas, seguindo a tradição escolástica. Cada questão é formulada como um problema ou tema a ser discutido, e é seguida por uma análise detalhada e argumentação por parte de São Tomás de Aquino. Essa estrutura organizada permite que a obra explore questões como a existência de Deus, a natureza divina, a criação, a moralidade humana, os sacramentos, a pessoa de Cristo e muito mais.
      
      A Suma Teológica é conhecida por sua abordagem filosófica e racional, combinada com uma forte base teológica e uma visão cristã da fé. Ela influenciou significativamente a teologia católica e continua sendo estudada e discutida até os dias de hoje. Sua importância reside não apenas em suas conclusões teológicas, mas também na metodologia e no rigor intelectual apresentados por São Tomás de Aquino.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
