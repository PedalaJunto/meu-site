function calcularPegada() {
    const distancia = parseFloat(document.getElementById('distance').value);

    // Valores de exemplo (ajuste conforme necessário)
    const motoConsumo = 25;  // Consumo médio de combustível da moto em km/l
    const emissaoPorLitroCombustivel = 2.3;  // Emissões de CO2 por litro de combustível em kg CO2/l
    const eficienciaBicicleta = 50;  // Eficiência da bicicleta em km/caloria
    const emissaoPorCaloriaAlimento = 0.02;  // Emissões de CO2 associadas à produção de alimentos em kg CO2/caloria
    const emissaoIndiretaBicicleta = 0.5;  // Emissões indiretas da bicicleta em kg CO2

    // Emissões indiretas da produção e transporte da moto (ajuste conforme necessário)
    const emissaoIndiretaMoto = 10;  // Valor de exemplo (em kg CO2)

    // Calcula as emissões da moto com base na distância e no consumo de combustível
    const emissaoMoto = (distancia / motoConsumo) * emissaoPorLitroCombustivel;

    // Calcula as calorias queimadas na bicicleta com base na distância e eficiência da bicicleta
    const caloriasBicicleta = distancia / eficienciaBicicleta;

    // Calcula as emissões associadas à produção de alimentos para a bicicleta
    const emissaoAlimentos = caloriasBicicleta * emissaoPorCaloriaAlimento;

    // Calcula as emissões totais da bicicleta somando as emissões de alimentos e as emissões indiretas
    const emissaoBicicleta = emissaoAlimentos + emissaoIndiretaBicicleta;

    // Calcula as emissões totais da moto somando as emissões diretas e indiretas
    const emissaoTotalMoto = emissaoMoto + emissaoIndiretaMoto;

    // Obtém o elemento com o ID "result" para exibir o resultado
    const resultElement = document.getElementById('result');

    // Atualiza o conteúdo do elemento com os resultados formatados
    resultElement.innerHTML = `<p>Pegada de Carbono da Moto: ${emissaoTotalMoto.toFixed(2)} kg CO2</p>` +
                              `<p>Pegada de Carbono da Bicicleta: ${emissaoBicicleta.toFixed(2)} kg CO2</p>`;
}
