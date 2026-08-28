async function buscarClima(cidade, apiKey) {
    // A URL DEVE iniciar com api.openweathermap.org/data/2.5/weather
    const url = `https://api.openweathermap.org{encodeURIComponent(cidade)}&units=metric&appid=${apiKey}&lang=pt_br`;
    //const url = `https://openweathermap.org{encodeURIComponent(cidade)}&units=metric&appid=${apiKey}&lang=pt_br`;

  
    try {
      const resposta = await fetch(url);
      
      if (!resposta.ok) {
        throw new Error(`Erro HTTP! Status: ${resposta.status}`);
      }
  
      const dados = await resposta.json();
      
      console.log(`🌍 Clima em ${dados.name}, ${dados.sys.country}:`);
      console.log(`🌡️ Temperatura: ${dados.main.temp}°C (Sensação: ${dados.main.feels_like}°C)`);
      console.log(`☁️ Condição: ${dados.weather[0].description}`);
      console.log(`💧 Umidade: ${dados.main.humidity}%`);
      
    } catch (erro) {
      console.error("❌ Erro ao buscar os dados:", erro.message);
      if (erro.cause) {
        console.error("🔍 Causa do problema:", erro.cause);
      }
    }
  }
  
  // --- CONFIGURAÇÃO DO TESTE ---
  const SUA_API_KEY = "42aca52c0c4bc56cdfa3bde22cfbc836"; 
  const CIDADE_TESTE = "Cascavel,PR,BR";
  
  // Executa o teste
  buscarClima(CIDADE_TESTE, SUA_API_KEY);
  