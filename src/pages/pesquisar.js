import React, { useState, useEffect } from "react";
import Layout from '@theme/Layout';

export default function Pesquisar() {
	const [inputText, setInputText] = useState("");
	const [apiQuestoes, setApiQuestoes] = useState([]);
	const [apiArtigo, setApiArtigo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
		if (inputText != '') {
			const resposta = await fetch(`http://127.0.0.1/api/suma.php?q=${inputText}`);
			const dados = await resposta.json();
			setApiQuestoes(dados.questoes);
			setApiArtigo(dados.artigos);
		} else {
			setApiQuestoes([]);
			setApiArtigo([]);
		}
      } catch (erro) {
        console.error('Erro ao buscar dados da API:', erro);
      }
    };

    fetchData();
  }, [inputText]);

	const handleChange = (event) => {
    setInputText(event.target.value);
  };

	return (
		<Layout title='Pesquisa' description='Pesquisa na suma teologica'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '1100px',
					margin: '60px auto',
				}}>
					<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '60px',
						width: '100%',
						fontSize: '20px',
					}}>
						<input
							style={{
								appearance: 'none',
								background: '0 0',
								border: '0',
								flex: '1',
								fontSize: '1em',
								height: '100%',
								outline: '0',
								padding: '0 0 0 8px',
								width: '80%',
								border: '3px solid #242526',
								borderRadius: '16px',
								color: '#DDDDDD',
								padding: '8px 16px',
							}}
							placeholder='Pesquisar' type='search' value={inputText} onChange={handleChange} />
					</div>
					<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						fontSize: '20px',
					}}>
						<article class="margin-top--lg">
							<section class="row">
								{apiQuestoes.map((item) => (
									<article class="col col--6 margin-bottom--lg">
										<a class="card padding--lg" href={item.path}>
											<h2 class="text--truncate" style={{ color: '#DDDDDD' }} title={item.titulo}>
												🗃️ {item.titulo}
											</h2>
										</a>
									</article>
								))}
								{apiArtigo.map((item) => (
									<article class="col col--6 margin-bottom--lg">
										<a class="card padding--lg" href={item.path}>
											<h2 class="text--truncate" style={{ color: '#DDDDDD' }} title={item.titulo}>
												📄️ {item.titulo}
											</h2>
										</a>
									</article>
								))}
							</section>
						</article>
					</div>
			</div>
		</Layout>
	);
}