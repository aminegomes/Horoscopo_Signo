function buscarHoroscopo() {
    const signo = document.getElementById('signo').value;
    const resultado = document.getElementById('resultado');
  
    if (!signo) {
      resultado.innerText = "Por favor, selecione um signo.";
      return;
    }
  
    resultado.innerText = "Carregando... 🔄";
  
    // Simulando uma API (você pode trocar por uma real depois)
    setTimeout(() => {
      const horoscopos = {
        aries: "Hoje é um bom dia para tomar decisões ousadas.",
        touro: "Foque em cuidar de si mesmo e da sua saúde mental.",
        gemeos: "Novas oportunidades podem surgir. Fique atento.",
        cancer: "Mostre seus sentimentos, não os esconda.",
        leao: "Você brilha naturalmente, use isso a seu favor.",
        virgem: "Organize sua mente antes de agir.",
        libra: "Busque equilíbrio nas relações pessoais.",
        escorpiao: "Sua intensidade pode abrir portas hoje.",
        sagitario: "Explore ideias novas, mesmo as estranhas.",
        capricornio: "Trabalho duro vai trazer frutos em breve.",
        aquario: "Ouça o inesperado. A resposta pode estar ali.",
        peixes: "Sua sensibilidade é seu maior poder hoje."
      };
  
      resultado.innerText = horoscopos[signo.toLowerCase()] || "Signo não encontrado.";
    }, 1000);
  }
  