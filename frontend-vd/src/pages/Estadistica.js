import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';  // Importa 'jspdf-autotable'
import Header from '../components/Header'; 
import Chart from 'chart.js/auto';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';


function Estadisticas({ rol }) {
  const [compras, setCompras] = useState([]);
  const [myChart, setMyChart] = useState(null);
  const [myChart2, setMyChart2] = useState(null);
  const [categoryChart, setCategoryChart] = useState(null);
  const [productosPorCategoria, setProductosPorCategoria] = useState([]);
  const [ventasPorAnio,setVentasPorAnio] = useState([]);
  const [ventasPorAnioChart,setVentasPorAnioChart] = useState(null);
  const [ventasTotalesmesanio,setVentasTotalesmesanio] = useState([]);
  const [ventasTotalesmesanioChart,setVentasTotalesmesanioChart] = useState(null);
  const [ventasTotalesmesespecifico,setVentasTotalesmesespecifico] = useState([]);
  const [ventasTotalesmesespecificoChart,setVentasTotalesmesespecificoChart] = useState(null)
  const [ventasTotalesproducto,setVentasTotalesproducto] = useState([]);
  const [ventasTotalesproductoChart,setVentasTotalesproductoChart] = useState(null)
  const [ventasTotalescategoria,setVentasTotalescategoria] = useState([]);
  const [ventasTotalescategoriaChart,setVentasTotalescategoriaChart] = useState(null);
  const [ventasTotalestrimestre,setVentasTotalestrimestre] = useState([]);
  const [ventasTotalestrimestreChart,setVentasTotalestrimestreChart] = useState(null);
  const [ventasTotalespromedioproducto, setVentasTotalespromedioproducto] = useState([]);
  const [ventasTotalespromedioproductoChart, setVentasTotalespromedioproductoChart] = useState(null);
  const [ventasTotalesproductomes, setVentasTotalesproductomes] = useState([]);
  const [ventasTotalesproductomesChart, setVentasTotalesproductomesChart] = useState(null);
  const [ventasTotalestop5producto, setVentasTotalestop5producto] = useState([]);
  const [ventasTotalestop5productoChart, setVentasTotalestop5productoChart] = useState(null);
  function formatearNumeroConComas(numero) {
    const numeroFormateado = Number(numero).toFixed(2);
    return numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }  


  
    //Apartado de estadistica de pastel
  useEffect(()=> {
    fetch('http://localhost:5000/crud/productosPorCategoria')
    .then((response) => response.json())
    .then((data) => setProductosPorCategoria(data))
    .catch((error) => console.error('Error al obtener los productos por categorìa:', error));
  }, []);

  useEffect(() => {
    if (productosPorCategoria.length > 0) {
      const ctx = document.getElementById('myCategories');

      if (categoryChart !== null) {
        categoryChart.destroy();  // Destruye el gráfico existente antes de crear uno nuevo para evitar conflictos
      }

      const labels = productosPorCategoria.map((Categoria) => Categoria.nombre_Categoria); 
      const data = productosPorCategoria.map((Categoria) => Categoria.cantidad_Disponible);

      const categorias = new Chart(ctx,{
        type:'pie',
        data: {
          labels:labels,
          datasets: [{
            label:'Cantidad de productos por categoria',
            data: data,
            backgroundColor: [
              'rgba(255,99,132,0.5)',
              'rgba(54,162,235,0.5)',
              'rgba(255,206,86,0.5)',
              'rgba(75,192,192,0.5)',
              'rgba(153,102,255,0.5)',
              'rgba(255,159,64,0.5)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54,162,235,1)',
              'rgba(255,206,86,1)',
              'rgba(75,192,192,1)',
              'rgba(153,102,255,1)',
              'rgba(255,159,64,1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive:true,
          plugins:{
            legend:{
              position:'top',
            },
            title: {
              display:true,
              text:'Cantidad de productos por categoría'
            }
          }
        }
      });
      setCategoryChart(categorias); // Guarda la referencia al nuevo gráfico en el estado
    }
    
  }, [productosPorCategoria]);


  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesanio')
      .then((response) => response.json())
      .then((data) => setVentasPorAnio(data))
      .catch((error) => console.error('Error al obtener las ventas totales por año:', error));
  }, []);
  
  useEffect(() => {
    if (ventasPorAnio.length > 0) {
      const ctx = document.getElementById('ventasPorAnioChart');
  
      if (ventasPorAnioChart !== null) {
        ventasPorAnioChart.destroy();
      }
  
      const anios = ventasPorAnio.map((venta) => venta.anio);
      const ventasTotales = ventasPorAnio.map((venta) => venta.Ventas_totales);
  
      const ventas = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: anios,
          datasets: [{
            label: 'Ventas totales por año',
            data: ventasTotales,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasPorAnioChart(ventas);
    }
  }, [ventasPorAnio]);

  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesmesanio')
      .then((response) => response.json())
      .then((data) => setVentasTotalesmesanio(data))
      .catch((error) => console.error('Error al obtener las ventas totales por mes y año:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalesmesanio.length > 0) {
      const ctx = document.getElementById('ventasTotalesmesanioChart');
  
      if (ventasTotalesmesanioChart !== null) {
        ventasTotalesmesanioChart.destroy();
      }
  
      const dias = ventasTotalesmesanio.map((venta) => venta.dia);
      const ventasTotales = ventasTotalesmesanio.map((venta) => venta.Ventas_totales);
  
      const ventasMesAnio = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dias,
          datasets: [{
            label: 'Ventas totales por día',
            data: ventasTotales,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasTotalesmesanioChart(ventasMesAnio);
    }
  }, [ventasTotalesmesanio]);


  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesmesespecifico')
      .then((response) => response.json())
      .then((data) => setVentasTotalesmesespecifico(data))
      .catch((error) => console.error('Error al obtener las ventas totales por trimestre:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalesmesespecifico.length > 0) {
      const ctx = document.getElementById('ventasTotalesmesespecificoChart');
  
      if (ventasTotalesmesespecificoChart !== null) {
        ventasTotalesmesespecificoChart.destroy();
      }
  
      const trimestres = ventasTotalesmesespecifico.map((venta) => venta.trimestre);
      const ventasTotales = ventasTotalesmesespecifico.map((venta) => venta.Ventas_totales);
  
      const ventasTrimestre = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: trimestres,
          datasets: [{
            label: 'Ventas totales por trimestre',
            data: ventasTotales,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasTotalesmesespecificoChart(ventasTrimestre);
    }
  }, [ventasTotalesmesespecifico]);


  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesproducto')
      .then((response) => response.json())
      .then((data) => setVentasTotalesproducto(data))
      .catch((error) => console.error('Error al obtener las ventas totales por producto:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalesproducto.length > 0) {
      const ctx = document.getElementById('ventasTotalesproductoChart');
  
      if (ventasTotalesproductoChart !== null) {
        ventasTotalesproductoChart.destroy();
      }
  
      const productos = ventasTotalesproducto.map((venta) => venta.nombre_Producto);
      const ventasTotales = ventasTotalesproducto.map((venta) => venta.Ventas_totales);
  
      const ventasProducto = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: productos,
          datasets: [{
            label: 'Ventas totales por producto',
            data: ventasTotales,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasTotalesproductoChart(ventasProducto);
    }
  }, [ventasTotalesproducto]);



  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalescategoria')
      .then((response) => response.json())
      .then((data) => setVentasTotalescategoria(data))
      .catch((error) => console.error('Error al obtener las ventas totales por categoría:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalescategoria.length > 0) {
      const ctx = document.getElementById('ventasTotalescategoriaChart');
  
      if (ventasTotalescategoriaChart !== null) {
        ventasTotalescategoriaChart.destroy();
      }
  
      const categorias = ventasTotalescategoria.map((venta) => venta.nombre_Categoria);
      const ventasTotales = ventasTotalescategoria.map((venta) => venta.Ventas_Totales);
  
      const ventasCategoria = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: categorias,
          datasets: [{
            label: 'Ventas totales por categoría',
            data: ventasTotales,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasTotalescategoriaChart(ventasCategoria);
    }
  }, [ventasTotalescategoria]);


  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalestrimestre')
      .then((response) => response.json())
      .then((data) => setVentasTotalestrimestre(data))
      .catch((error) => console.error('Error al obtener las ventas totales por trimestre:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalestrimestre.length > 0) {
      const ctx = document.getElementById('ventasTotalestrimestreChart');
  
      if (ventasTotalestrimestreChart !== null) {
        ventasTotalestrimestreChart.destroy();
      }
  
      const trimestres = ventasTotalestrimestre.map((venta) => venta.trimestre);
      const ventasTotales = ventasTotalestrimestre.map((venta) => venta.Ventas_totales);
  
      const ventasTrimestre = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: trimestres,
          datasets: [{
            label: 'Ventas totales por trimestre',
            data: ventasTotales,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasTotalestrimestreChart(ventasTrimestre);
    }
  }, [ventasTotalestrimestre]);


  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalespromedioproducto')
      .then((response) => response.json())
      .then((data) => setVentasTotalespromedioproducto(data))
      .catch((error) => console.error('Error al obtener las ventas totales promedio por producto:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalespromedioproducto.length > 0) {
      const ctx = document.getElementById('ventasTotalespromedioproductoChart');
  
      if (ventasTotalespromedioproductoChart !== null) {
        ventasTotalespromedioproductoChart.destroy();
      }
  
      const productos = ventasTotalespromedioproducto.map((venta) => venta.nombre_Producto);
      const promediosVentas = ventasTotalespromedioproducto.map((venta) => venta.Promedio_Ventas);
  
      const ventasPromedioProducto = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: productos,
          datasets: [{
            label: 'Ventas totales promedio por producto',
            data: promediosVentas,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasTotalespromedioproductoChart(ventasPromedioProducto);
    }
  }, [ventasTotalespromedioproducto]);



  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesproductomes')
      .then((response) => response.json())
      .then((data) => setVentasTotalesproductomes(data))
      .catch((error) => console.error('Error al obtener las ventas totales por producto y mes:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalesproductomes.length > 0) {
      const ctx = document.getElementById('ventasTotalesproductomesChart');
  
      if (ventasTotalesproductomesChart !== null) {
        ventasTotalesproductomesChart.destroy();
      }
  
      const productosMes = ventasTotalesproductomes.map((venta) => `${venta.nombre_Producto} - ${venta.mes}/${venta.anio}`);
      const ventasTotales = ventasTotalesproductomes.map((venta) => venta.Ventas_Totales);
  
      const ventasProductoMes = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: productosMes,
          datasets: [{
            label: 'Ventas totales por producto y mes',
            data: ventasTotales,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasTotalesproductomesChart(ventasProductoMes);
    }
  }, [ventasTotalesproductomes]);



  useEffect(() => {
    fetch('http://localhost:5000/crudDb2/VentasTotalestop5producto')
      .then((response) => response.json())
      .then((data) => setVentasTotalestop5producto(data))
      .catch((error) => console.error('Error al obtener las ventas totales de los 5 productos más vendidos:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalestop5producto.length > 0) {
      const ctx = document.getElementById('ventasTotalestop5productoChart');
  
      if (ventasTotalestop5productoChart !== null) {
        ventasTotalestop5productoChart.destroy();
      }
  
      const productosTop5 = ventasTotalestop5producto.map((venta) => venta.nombre_Producto);
      const ventasTotalesTop5 = ventasTotalestop5producto.map((venta) => venta.Cantidad_Total_Vendida);
  
      const ventasTop5Productos = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: productosTop5,
          datasets: [{
            label: 'Ventas totales de los 5 productos más vendidos',
            data: ventasTotalesTop5,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasTotalestop5productoChart(ventasTop5Productos);
    }
  }, [ventasTotalestop5producto]);



  
  
  


  useEffect(() => {
    fetch('http://localhost:5000/crud/readDetalleVentas')
      .then((response) => response.json())
      .then((data) => setCompras(data))
      .catch((error) => console.error('Error al obtener los detalles de compra:', error));
  }, []);

  useEffect(() => {
    if (compras.length > 0) {
      const ctx = document.getElementById('myChart2');

      if (myChart2 !== null) {
        myChart2.destroy();
      }

      const nombresProductos = compras.map((compra) => compra.nombre_Producto);
      const cantidad = compras.map((compra) => compra.cantidad_Disponible);

      const almacen = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: nombresProductos,
          datasets: [{
            label: 'Cantidad de productos',
            data: cantidad,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setMyChart2(almacen);
    }
  }, [compras]);

 
  useEffect(() => {
    if (compras.length > 0) {
      const ctx = document.getElementById('myChart');

      if (myChart !== null) {
        myChart.destroy();
      }

      const nombresProductos = compras.map((compra) => compra.nombre_Producto);
      const totalcompra = compras.map((compra) => compra.total_Venta);

      const almacen = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: nombresProductos,
          datasets: [{
            label: 'Total de las compras',
            data: totalcompra,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setMyChart(almacen);
    }
  }, [compras]);
  

  const generarReporteCompras = () => {
    fetch('http://localhost:5000/crud/readDetalleVentas')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Estado de las ventas:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte de las ventas', 20, 10);
  
        const headers = ['Producto','Precio Venta', 'Precio Compra', 'Stock', 'Cantidad Vendida', 'Total Venta'];
        const data = detallesCompra.map((detalleCompra) => [
          detalleCompra.nombre_Producto,
          `C$ ${formatearNumeroConComas(detalleCompra.precio_Venta.toFixed(2))}`,
          `C$ ${formatearNumeroConComas(detalleCompra.precio_Compra.toFixed(2))}`,
          detalleCompra.cantidad_Disponible,
          detalleCompra.cantidad_Productos,
          `C$ ${detalleCompra.total_Venta.toFixed(2)}`,
        ]);
  
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
  
          doc.save('reporte_ventas.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };

  const generarReporteAlmacen = () => {
    fetch('http://localhost:5000/crud/readDetalleVentas')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Estado de almacen:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte de almacen', 20, 10);
      
        const headers = ['Producto', 'Precio', 'Stock'];
        const data = detallesCompra.map((detalleCompra) => [
          detalleCompra.nombre_Producto,
          `C$ ${formatearNumeroConComas(detalleCompra.precio_Venta)}`,
          detalleCompra.cantidad_Disponible,
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_productos.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };

  

  const generarReporteProductosPorCategoria = () => {
    fetch('http://localhost:5000/crud/productosPorCategoria')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas por categoria:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte cantidad producto por categoria', 20, 10);
      
        const headers = ['Categoria', 'Cantidad disponible'];
        const data = detallesCompra.map((detalleCompra) => [
         detalleCompra.nombre_Categoria,
          detalleCompra.cantidad_Disponible
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_VentaCategoria.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };

  

   const generarReporteVentasAño = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesanio')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas Totales Año:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte Ventas Año', 20, 10);
      
        const headers = ['Total Compra', 'Año'];
        const data = detallesCompra.map((detalleCompra) => [
          `C$ ${formatearNumeroConComas(detalleCompra.Ventas_totales)}`,
          (detalleCompra.anio)
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_VentaAño.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };

  const generarReporteVentasTotalesPorProducto = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesproducto')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas Totales Por Productos:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte Ventas Por productos', 20, 10);
      
        const headers = ['Producto', 'Total Venta'];
        const data = detallesCompra.map((detalleCompra) => [
          (detalleCompra.nombre_Producto),
          `C$ ${formatearNumeroConComas(detalleCompra.Ventas_totales)}`
         
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_VentaProducto.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };

  const generarReporteVentasTotalesTrismestre = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalestrimestre')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas Totales Año:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte Ventas Trimestre', 20, 10);
      
        const headers = ['Trimestre', 'Total Venta'];
        const data = detallesCompra.map((detalleCompra) => [
          (detalleCompra.trimestre),
          `C$ ${formatearNumeroConComas(detalleCompra.Ventas_totales)}`
         
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_VentaTrimestre.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };

  const generarReportePromedioVentasTotalesProducto = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalespromedioproducto')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Promedio Ventas Totales Por Producto:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte Promedio de ventas totales por producto ', 20, 10);
      
        const headers = ['Producto', 'Promedio'];
        const data = detallesCompra.map((detalleCompra) => [
          (detalleCompra.nombre_Producto),
          `% ${formatearNumeroConComas(detalleCompra.Promedio_Ventas)}`
         
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_PromedioVentas.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };

  const generarReporteVentasTotalesProductosPorMes = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesproductomes')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas Totales de Productos por Mes:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte de Ventas Totales de Productos por Mes ', 20, 10);
      
        const headers = ['Producto', 'Mes', 'Ventas'];
        const data = detallesCompra.map((detalleCompra) => [
          (detalleCompra.nombre_Producto),
          (detalleCompra.mes),
          `C$ ${formatearNumeroConComas(detalleCompra.Ventas_Totales)}`
         
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_VentasTotalesDeProductosPorMes.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };
 
  const generarReporteVentasTotalesTop5Productos = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalestop5producto')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas Totales Top 5 Productos:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte Ventas Totales de Top 5 productos ', 20, 10);
      
        const headers = ['Producto', 'Cantidad Vendida'];
        const data = detallesCompra.map((detalleCompra) => [
          (detalleCompra.nombre_Producto),
          (detalleCompra.Cantidad_Total_Vendida),
         
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_VentasTotalesTop5Productos.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };

  const generarReporteComprasImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('myChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte de las compras", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_compras_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  const generarReporteAlmacenImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('myChart2'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte del almacen", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_Almacen_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };
  const imprimirEstadisticas = () => {
    console.log("Imprimiendo estadísticas...");
  }

  return (
    <div>
      <Header rol={rol} />


      <Container className="margen-conten" responsive>

        <Row className="g-3">

          <Col sm="12" md="12" lg="12">
            <Card>
              <Card.Body>
                <Card.Title>Estado del almacen</Card.Title>

                <iframe title="REPORTE KARDEX" width="1024" height="804" src="https://app.powerbi.com/view?r=eyJrIjoiYzJhY2RhOTEtMGIzNy00ZjE2LWFlZGYtZTVmOThjNjY0Yzk2IiwidCI6ImU0NzY0NmZlLWRhMjctNDUxOC04NDM2LTVmOGIxNThiYTEyNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>

                <Button onClick={imprimirEstadisticas}>
                  Generar reporte con imagen
                </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>


      <Container className="mt-8">
        <Row className="global-margin-top-history">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Estados de las compras</Card.Title>
                <div style={{ margin: '20px 0' }}>
                  <canvas id="myChart" height="200"></canvas>
                </div>
              </Card.Body>

              <Card.Footer className="text-center">
                <Button variant="primary" className='buttom-right button-color' onClick={generarReporteCompras}>
                  Generar Reporte
                </Button>
                <Button className='buttom-left button-color' onClick={generarReporteComprasImg}>
                  Generar reporte con imagen
                </Button>
              </Card.Footer>
            </Card>
          </Col>


        

    
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Estados de Almacen</Card.Title>
                <div style={{ margin: '20px 0' }}>
                  <canvas id="myChart2" height="200"></canvas>
                </div>
              </Card.Body>

              <Card.Footer className="text-center">
                <Button variant="primary" className='buttom-right button-color' onClick={generarReporteAlmacen}>
                  Generar Reporte
                </Button>
                <Button className='buttom-left button-color' onClick={generarReporteAlmacenImg}>
                  Generar reporte con imagen
                </Button>
              </Card.Footer>
            </Card>
          </Col>


           <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Productos por Categorìa</Card.Title>
            <canvas id="myCategories" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteProductosPorCategoria}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>


  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales por año</Card.Title>
            <canvas id="ventasPorAnioChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteVentasAño}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>


  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales por mes</Card.Title>
            <canvas id="ventasTotalesmesanioChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteAlmacen}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>


  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales por mes especifico</Card.Title>
            <canvas id="ventasTotalesmesespecificoChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteAlmacen}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>


  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales por producto</Card.Title>
            <canvas id="ventasTotalesproductoChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteVentasTotalesPorProducto}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>


  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales por Categoria</Card.Title>
            <canvas id="ventasTotalescategoriaChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteAlmacen}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>

  
  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales por trimestre</Card.Title>
            <canvas id="ventasTotalestrimestreChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteVentasTotalesTrismestre}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>


  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales promedio productos</Card.Title>
            <canvas id="ventasTotalespromedioproductoChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReportePromedioVentasTotalesProducto}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>


  
  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales producto por mes</Card.Title>
            <canvas id="ventasTotalesproductomesChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteVentasTotalesProductosPorMes}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>



  
  <Col sm="6" md="6" lg="6">
        <Card>
          <Card.Body>
            <Card.Title>Ventas totales top 5 productos</Card.Title>
            <canvas id="ventasTotalestop5productoChart" height="120"></canvas>         
          </Card.Body>

          <Card.Body>
            <Button onClick={generarReporteVentasTotalesTop5Productos}>
              Generar PDF
            </Button>
          </Card.Body>
        </Card>
  </Col>
      
      
      

        </Row>
      </Container>

    
    </div>
  );
}

export default Estadisticas;
