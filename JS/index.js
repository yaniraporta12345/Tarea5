function calcularSueldo() {
    // Obtener los valores de los campos del formulario
    const horasTrabajadas = document.getElementById("horasTrabajadas").value;
    const categoria = document.getElementById("categoria").value;
    const anosServicio = document.getElementById("anosServicio").value;
  
    // Calcular el sueldo básico
    let tarifa;
    if (categoria === "A") {
      tarifa = 40;
    } else if (categoria === "B") {
      tarifa = 35;
    } else if (categoria === "C") {
      tarifa = 30;
    }
    const sueldoBasico = horasTrabajadas * tarifa;
  
    // Calcular la bonificación
    let bonificacion;
    if (anosServicio >= 1 && anosServicio <= 3) {
      bonificacion = sueldoBasico * 0.15;
    } else if (anosServicio >= 4 && anosServicio <= 7) {
      bonificacion = sueldoBasico * 0.20;
    } else if (anosServicio >= 8 && anosServicio <= 12) {
      bonificacion = sueldoBasico * 0.30;
    } else {
      bonificacion = sueldoBasico * 0.35;
    }
  
    // Calcular el sueldo neto
    const sueldoNeto = sueldoBasico + bonificacion;
  
    // Mostrar el resultado en una alerta
    alert(`Sueldo básico: S/. ${sueldoBasico}\nBonificación: S/. ${bonificacion}\nSueldo neto: S/. ${sueldoNeto}`);
  }