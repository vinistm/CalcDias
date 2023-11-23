function calcularDiferencaEntreDatas(data1, data2) {
  const diffEmMilissegundos = Math.abs(data2 - data1);
  const diffEmDias = Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));
  return diffEmDias;
}

function calcularDiferencas() {
  const date1 = new Date(document.getElementById('date0').value);

  const resultados = document.getElementById('resultados');
  resultados.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
      const dataAtual = new Date(document.getElementById(`date${i}`).value);
      const diff = calcularDiferencaEntreDatas(date1, dataAtual);
      resultados.innerHTML += `<p>Emissão - Parcela ${i}: ${diff} dias</p>`;
  }
}