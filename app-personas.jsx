const { useState } = React;

function App() {
  const [personas, setPersonas] = useState([]);
  const [maxId, setMaxId] = useState(0);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    altura: "",
    peso: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.apellido || formData.altura <= 0 || formData.peso <= 0) return;

    // Calculo de IMC
    const alturaM = parseFloat(formData.altura);
    const pesoKg = parseFloat(formData.peso);
    const imc = (pesoKg / (alturaM * alturaM)).toFixed(2);

    const nuevaPersona = {
      id: maxId + 1,
      ...formData,
      imc: imc
    };

    setPersonas([...personas, nuevaPersona]);
    setMaxId(maxId + 1);
    
    setFormData({ nombre: "", apellido: "", edad: "", altura: "", peso: "" });
  };

  const eliminarPersona = (id) => {
    const nuevaLista = personas.filter(persona => persona.id !== id);
    setPersonas(nuevaLista);
  };

  return (
    <main>
      <h1>Registro de Personas (Con React)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: 
            <input name="nombre" value={formData.nombre} onChange={handleChange} required />
          </label>
          <label>Apellido: 
            <input name="apellido" value={formData.apellido} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>Edad: 
            <input type="number" name="edad" value={formData.edad} onChange={handleChange} min="0" required />
          </label>
          <label>Altura (m): 
            <input type="number" name="altura" value={formData.altura} onChange={handleChange} step="0.01" min="0.1" required />
          </label>
          <label>Peso (kg): 
            <input type="number" name="peso" value={formData.peso} onChange={handleChange} step="0.1" min="1" required />
          </label>
        </div>
        <button type="submit">Agregar Persona</button>
      </form>

      {personas.length === 0 ? (
        <p className="sin-registros">No hay personas registradas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Altura (m)</th>
              <th>Peso (kg)</th>
              <th>IMC</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((p) => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.edad}</td>
                <td>{p.altura}</td>
                <td>{p.peso}</td>
                <td>{p.imc}</td>
                <td>
                  <button className="btn-danger" onClick={() => eliminarPersona(p.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}