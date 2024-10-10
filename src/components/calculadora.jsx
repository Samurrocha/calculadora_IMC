import React, { useState } from 'react';

function Calculadora() {
  // Estados para armazenar os valores do peso e altura
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');

  // Função para calcular o IMC
  const calcularIMC = () => {
    if (!peso || !altura) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Calculando o IMC
    const resultadoIMC = peso / (altura * altura);
    setImc(resultadoIMC.toFixed(2));

    // Determinando a categoria do IMC
    let categoriaIMC = '';
    if (resultadoIMC < 18.5) {
      categoriaIMC = 'Abaixo do peso';
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
      categoriaIMC = 'Peso normal';
    } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
      categoriaIMC = 'Sobrepeso';
    } else {
      categoriaIMC = 'Obesidade';
    }
    setCategoria(categoriaIMC);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', background: 'white' }}>
      <h1>Calculadora de IMC</h1>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Altura (m):
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 1.75"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <button onClick={calcularIMC} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer', background:'black'}}>
        Calcular IMC
      </button>

      {imc && (
        <div style={{ marginTop: '20px' }}>
          <h2>Resultado</h2>
          <p>IMC: {imc}</p>
          <p>Categoria: {categoria}</p>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
