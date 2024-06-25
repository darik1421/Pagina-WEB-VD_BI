import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';  // Importa 'jspdf-autotable'
import Header from '../components/Header'; 
import Chart from 'chart.js/auto';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import emailjs from 'emailjs-com';


function Estadisticas({ rol }) {
  const [compras, setCompras] = useState([]);
  const [compras2, setCompras2] = useState([]);
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

  const formatearVentas= (compras) => {
    return compras.map(compra => {
      return `Producto: ${compra.nombre_Producto} \nVentas: ${compra.total_Ventas}`;
    }).join('\n\n');
  };
  const enviarCorreo1 = () => {
    // Formateo de datos
    const ventasformateadas = formatearVentas(compras);
   // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: 'Cristhian',
      to_message: 'Esto es el estado de las ventas',
      title_message: 'Reporte de ventas',
      user_email: 'cristhiancesarvargas12@gmail.com',
      message: ventasformateadas,
    };
    // Envía el correo utilizando EmailJS
    emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
      .then((response) => {
        alert('Correo enviado.');
        console.log('Correo enviado.', response);
      })
      .catch((error) => {
        alert('Error al enviar el correo.');
        console.error('Error al enviar el correo:', error);
      });
  };


  
  const formatearEstadoAlmacen= (compras2) => {
    return compras2.map(disponible => {
      return `Producto: ${disponible.nombre_Producto} \Stock: ${disponible.cantidad_Disponible}`;
    }).join('\n\n');
  };  
  const enviarCorreo2 = () => {
    // Formateo de datos
    const EstadoAlmacenformateadas = formatearEstadoAlmacen(compras2);
   // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: 'Cristhian',
      to_message: 'Esto es el estado del Almacen',
      title_message: 'Reporte de Almacen',
      user_email: 'cristhiancesarvargas12@gmail.com',
      message: EstadoAlmacenformateadas,
    };
        // Envía el correo utilizando EmailJS
        emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
        .then((response) => {
          alert('Correo enviado.');
          console.log('Correo enviado.', response);
        })
        .catch((error) => {
          alert('Error al enviar el correo.');
          console.error('Error al enviar el correo:', error);
        });
    };

    const formatearProductoCate= (productosPorCategoria) => {
      return productosPorCategoria.map(Categoria => {
        return `Categoria: ${Categoria.nombre_Categoria} \Stock: ${Categoria.cantidad_Disponible}`;
      }).join('\n\n');
    };  
    const enviarCorreo3 = () => {
      // Formateo de datos
      const ProdcutoCateAlmacenformateadas = formatearProductoCate(productosPorCategoria);
     // Datos de ejemplo (reemplaza con tus datos reales)
      const data = {
        to_name: 'Cristhian',
        to_message: 'Esto es Ventas Totales de productos por categoria',
        title_message: 'Reporte de Ventas',
        user_email: 'cristhiancesarvargas12@gmail.com',
        message: ProdcutoCateAlmacenformateadas,
      };
          // Envía el correo utilizando EmailJS
          emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
          .then((response) => {
            alert('Correo enviado.');
            console.log('Correo enviado.', response);
          })
          .catch((error) => {
            alert('Error al enviar el correo.');
            console.error('Error al enviar el correo:', error);
          });
      };

      const formatearVentasTotalesMesEspe= (ventasTotalesmesespecifico) => {
        return ventasTotalesmesespecifico.map(venta => {
          return `Mes: ${venta.mes} \Ventas: ${venta.Ventas_totales}`;
        }).join('\n\n');
      };  
      const enviarCorreo4 = () => {
        // Formateo de datos
        const VentasTotalesMesespeformateadas = formatearVentasTotalesMesEspe(ventasTotalesmesespecifico);
       // Datos de ejemplo (reemplaza con tus datos reales)
        const data = {
          to_name: 'Cristhian',
          to_message: 'Esto son las ventas totales por mes especifico',
          title_message: 'Reporte de Ventas',
          user_email: 'cristhiancesarvargas12@gmail.com',
          message: VentasTotalesMesespeformateadas,
        };
            // Envía el correo utilizando EmailJS
            emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
            .then((response) => {
              alert('Correo enviado.');
              console.log('Correo enviado.', response);
            })
            .catch((error) => {
              alert('Error al enviar el correo.');
              console.error('Error al enviar el correo:', error);
            });
        };



        const formatearVentasTotalespordiames= (ventasTotalesmesanio) => {
          return ventasTotalesmesanio.map(venta => {
            return `Dia: ${venta.dia} \Ventas: ${venta.Ventas_totales}`;
          }).join('\n\n');
        };  
        const enviarCorreo5 = () => {
          // Formateo de datos
          const Ventaspordiaformateadas = formatearVentasTotalespordiames(ventasTotalesmesanio);
         // Datos de ejemplo (reemplaza con tus datos reales)
          const data = {
            to_name: 'Cristhian',
            to_message: 'Esto son las ventas por dia',
            title_message: 'Reporte de Ventas',
            user_email: 'cristhiancesarvargas12@gmail.com',
            message: Ventaspordiaformateadas,
          };
              // Envía el correo utilizando EmailJS
              emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
              .then((response) => {
                alert('Correo enviado.');
                console.log('Correo enviado.', response);
              })
              .catch((error) => {
                alert('Error al enviar el correo.');
                console.error('Error al enviar el correo:', error);
              });
          };


          
        const formatearVentasTotalesporanio= (ventasPorAnio) => {
          return ventasPorAnio.map(venta => {
            return `Año: ${venta.anio} \Ventas: ${venta.Ventas_totales}`;
          }).join('\n\n');
        };  
        const enviarCorreo6 = () => {
          // Formateo de datos
          const Ventasporanioformateadas = formatearVentasTotalesporanio(ventasPorAnio);
         // Datos de ejemplo (reemplaza con tus datos reales)
          const data = {
            to_name: 'Cristhian',
            to_message: 'Esto son las ventas por año',
            title_message: 'Reporte de Ventas',
            user_email: 'cristhiancesarvargas12@gmail.com',
            message: Ventasporanioformateadas,
          };
              // Envía el correo utilizando EmailJS
              emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
              .then((response) => {
                alert('Correo enviado.');
                console.log('Correo enviado.', response);
              })
              .catch((error) => {
                alert('Error al enviar el correo.');
                console.error('Error al enviar el correo:', error);
              });
          };


          const formatearVentasTotalesporproducto= (ventasTotalesproducto) => {
            return ventasTotalesproducto.map(venta => {
              return `Producto: ${venta.nombre_Producto} \Ventas: ${venta.Ventas_totales}`;
            }).join('\n\n');
          };  
          const enviarCorreo7 = () => {
            // Formateo de datos
            const ventasporproductoformateadas = formatearVentasTotalesporproducto(ventasTotalesproducto);
           // Datos de ejemplo (reemplaza con tus datos reales)
            const data = {
              to_name: 'Cristhian',
              to_message: 'Esto son las ventas por producto',
              title_message: 'Reporte de Ventas',
              user_email: 'cristhiancesarvargas12@gmail.com',
              message: ventasporproductoformateadas,
            };
                // Envía el correo utilizando EmailJS
                emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
                .then((response) => {
                  alert('Correo enviado.');
                  console.log('Correo enviado.', response);
                })
                .catch((error) => {
                  alert('Error al enviar el correo.');
                  console.error('Error al enviar el correo:', error);
                });
            };


            const formatearVentasTotalesporCate= (ventasTotalescategoria) => {
              return ventasTotalescategoria.map(venta => {
                return `Categoria: ${venta.nombre_Categoria} \Ventas: ${venta.Ventas_Totales}`;
              }).join('\n\n');
            };  
            const enviarCorreo8 = () => {
              // Formateo de datos
              const VentasCateformateadas = formatearVentasTotalesporCate(ventasTotalescategoria);
             // Datos de ejemplo (reemplaza con tus datos reales)
              const data = {
                to_name: 'Cristhian',
                to_message: 'Esto son las ventas por categoria',
                title_message: 'Reporte de Ventas',
                user_email: 'cristhiancesarvargas12@gmail.com',
                message: VentasCateformateadas,
              };
                  // Envía el correo utilizando EmailJS
                  emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
                  .then((response) => {
                    alert('Correo enviado.');
                    console.log('Correo enviado.', response);
                  })
                  .catch((error) => {
                    alert('Error al enviar el correo.');
                    console.error('Error al enviar el correo:', error);
                  });
              };


              const formatearVentasTotalesporTrimes= (ventasTotalestrimestre) => {
                return ventasTotalestrimestre.map(venta => {
                  return `Trimestre: ${venta.trimestre} \Ventas: ${venta.Ventas_totales}`;
                }).join('\n\n');
              };  
              const enviarCorreo9 = () => {
                // Formateo de datos
                const VentasTrimestreformateadas = formatearVentasTotalesporTrimes(ventasTotalestrimestre);
               // Datos de ejemplo (reemplaza con tus datos reales)
                const data = {
                  to_name: 'Cristhian',
                  to_message: 'Esto son las ventas por trimestre',
                  title_message: 'Reporte de Ventas',
                  user_email: 'cristhiancesarvargas12@gmail.com',
                  message: VentasTrimestreformateadas,
                };
                    // Envía el correo utilizando EmailJS
                    emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
                    .then((response) => {
                      alert('Correo enviado.');
                      console.log('Correo enviado.', response);
                    })
                    .catch((error) => {
                      alert('Error al enviar el correo.');
                      console.error('Error al enviar el correo:', error);
                    });
                };


                const formatearVentasTotalesporpromediopro= (ventasTotalespromedioproducto) => {
                  return ventasTotalespromedioproducto.map(venta => {
                    return `Producto: ${venta.nombre_Producto} \Promedio Ventas: ${venta.Promedio_Ventas}`;
                  }).join('\n\n');
                };  
                const enviarCorreo10 = () => {
                  // Formateo de datos
                  const VentaspromedioProducformateadas = formatearVentasTotalesporpromediopro(ventasTotalespromedioproducto);
                 // Datos de ejemplo (reemplaza con tus datos reales)
                  const data = {
                    to_name: 'Cristhian',
                    to_message: 'Esto son el promedio de ventas por producto',
                    title_message: 'Reporte de Ventas',
                    user_email: 'cristhiancesarvargas12@gmail.com',
                    message: VentaspromedioProducformateadas,
                  };
                      // Envía el correo utilizando EmailJS
                      emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
                      .then((response) => {
                        alert('Correo enviado.');
                        console.log('Correo enviado.', response);
                      })
                      .catch((error) => {
                        alert('Error al enviar el correo.');
                        console.error('Error al enviar el correo:', error);
                      });
                  };

                  const formatearVentasTotalesporproductomes= (ventasTotalesproductomes) => {
                    return ventasTotalesproductomes.map(venta => {
                      return `Producto: ${venta.nombre_Producto}  - ${venta.mes}/${venta.anio} \Ventas: ${venta.Ventas_Totales}`;
                    }).join('\n\n');
                  };  
                  const enviarCorreo11 = () => {
                    // Formateo de datos
                    const Ventasporproductomesformateadas = formatearVentasTotalesporproductomes(ventasTotalesproductomes);
                   // Datos de ejemplo (reemplaza con tus datos reales)
                    const data = {
                      to_name: 'Cristhian',
                      to_message: 'Esto son las ventas de producto mes',
                      title_message: 'Reporte de Ventas',
                      user_email: 'cristhiancesarvargas12@gmail.com',
                      message: Ventasporproductomesformateadas,
                    };
                        // Envía el correo utilizando EmailJS
                        emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
                        .then((response) => {
                          alert('Correo enviado.');
                          console.log('Correo enviado.', response);
                        })
                        .catch((error) => {
                          alert('Error al enviar el correo.');
                          console.error('Error al enviar el correo:', error);
                        });
                    };

                    const formatearVentasTotalesportop5produc= (ventasTotalestop5producto) => {
                      return ventasTotalestop5producto.map(venta => {
                        return `Producto: ${venta.nombre_Producto} \Cantidad Vendida: ${venta.Cantidad_Total_Vendida}`;
                      }).join('\n\n');
                    };  
                    const enviarCorreo12 = () => {
                      // Formateo de datos
                      const Ventastop5producformateadas = formatearVentasTotalesportop5produc(ventasTotalestop5producto);
                     // Datos de ejemplo (reemplaza con tus datos reales)
                      const data = {
                        to_name: 'Cristhian',
                        to_message: 'Esto son los 5 productos mas vendidos',
                        title_message: 'Reporte de Top 5 productos',
                        user_email: 'cristhiancesarvargas12@gmail.com',
                        message: Ventastop5producformateadas,
                      };
                          // Envía el correo utilizando EmailJS
                          emailjs.send('service_o0q441p', 'template_3dp5oap', data, 'khm0dhZwFelFqMnIv')
                          .then((response) => {
                            alert('Correo enviado.');
                            console.log('Correo enviado.', response);
                          })
                          .catch((error) => {
                            alert('Error al enviar el correo.');
                            console.error('Error al enviar el correo:', error);
                          });
                      };





  
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
      .catch((error) => console.error('Error al obtener las ventas totales por mes:', error));
  }, []);
  
  useEffect(() => {
    if (ventasTotalesmesespecifico.length > 0) {
      const ctx = document.getElementById('ventasTotalesmesespecificoChart');
      
      if (ventasTotalesmesespecificoChart !== null) {
        ventasTotalesmesespecificoChart.destroy();
      }
  
      const labels = ventasTotalesmesespecifico.map((venta) => venta.mes);
      const data = ventasTotalesmesespecifico.map((venta) => venta.Ventas_totales);
  
      const ventasMes = new Chart(ctx, {
        type:'pie',
        data: {
          labels:labels,
          datasets: [{
            label:'Ventas totales por mes',
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
              text:'Ventas  totales por un mes'
            }
          }
        }
      });
      setVentasTotalesmesespecificoChart(ventasMes);
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
    fetch('http://localhost:5000/crud/readStock')
      .then((response) => response.json())
      .then((data) => setCompras2(data))
      .catch((error) => console.error('Error al obtener los detalles de compra:', error));
  }, []);

  useEffect(() => {
    if (compras2.length > 0) {
      const ctx = document.getElementById('myChart2');

      if (myChart2 !== null) {
        myChart2.destroy();
      }

      const nombresProductos = compras2.map((disponible) => disponible.nombre_Producto);
      const cantidad = compras2.map((disponible) => disponible.cantidad_Disponible);

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
    fetch('http://localhost:5000/crud/readtop10ventas')
      .then((response) => response.json())
      .then((data) => setCompras(data))
      .catch((error) => console.error('Error al obtener los detalles de compra:', error));
  }, []);
  useEffect(() => {
    if (compras.length > 0) {
      const ctx = document.getElementById('myChart');

      if (myChart !== null) {
        myChart.destroy();
      }

      const nombresProductos = compras.map((compra) => compra.nombre_Producto);
      const totalcompra = compras.map((compra) => compra.total_Ventas);

      const almacen = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: nombresProductos,
          datasets: [{
            label: 'Total de las Ventas',
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

  const generarReporteVentasDia = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesmesanio')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas Totales Año:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte Ventas Dia', 20, 10);
      
        const headers = ['Total Venta', 'Dia'];
        const data = detallesCompra.map((detalleCompra) => [
          `C$ ${formatearNumeroConComas(detalleCompra.Ventas_totales)}`,
          (detalleCompra.dia)
        ]);
      
        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: 'striped',
            margin: { top: 15 },
          });
      
          doc.save('reporte_VentaDia.pdf');
          console.log('Documento PDF generado y descargado.');
        } catch (error) {
          console.error('Error al generar el PDF con autoTable:', error);
        }
      })
      .catch((error) => console.error('Error al obtener el stock:', error));      
  };


  const generarReporteVentasMesEspe = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalesmesespecifico')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas Totales Por Mes:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte Ventas por Mes', 20, 10);
      
        const headers = ['Mes', 'Total Venta'];
        const data = detallesCompra.map((detalleCompra) => [
         (detalleCompra.mes),
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
      
          doc.save('reporte_VentaPormes.pdf');
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

  const generarReporteCategoria = () => {
    fetch('http://localhost:5000/crudDb2/VentasTotalescategoria')
      .then((response) => response.json())
      .then((detallesCompra) => {
        console.log('Ventas Totales Por Categoria:', detallesCompra);
      
        const doc = new jsPDF();
        doc.text('Reporte Ventas por Categoria', 20, 10);
      
        const headers = ['Categoria', 'Total Venta'];
        const data = detallesCompra.map((detalleCompra) => [
         (detalleCompra.nombre_Categoria),
         `C$ ${formatearNumeroConComas(detalleCompra.Ventas_Totales)}`,
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

  const generarReporteVentadiaImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalesmesanioChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte de productos por categoria", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_ProductoCate.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  const generarReporteProductoCateImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('myCategories'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte de productos por categoria", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_ProductoCate.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  
  const generarReportePormesEspeImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalesmesespecificoChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte de productos por categoria", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_ProductoCate.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
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

  const generarReporteVentaAnioImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalesmesanioChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte del almacen", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_Almacen_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  const generarReporteVentaProductoImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalesproductoChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte del almacen", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_Almacen_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  const generarReporteVentaCateImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalescategoriaChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte del almacen", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_Almacen_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  const generarReporteVentaTrimestreImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalestrimestreChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte del almacen", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_Almacen_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  const generarReporteVentaPromedioImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalespromedioproductoChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte del almacen", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_Almacen_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };


  
  const generarReporteVentaProductomesImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalesproductomesChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte del almacen", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_Almacen_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  const generarReporteVentatopProductosImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('ventasTotalestop5productoChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte del almacen", 20, 10);
      pdf.addImage(imgData, 'PNG', 10, 20, 100, 100);
      pdf.save("reporte_Almacen_Imagen.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };



  
  
  
  
  return (
    <div>
      <Header rol={rol} />


     


      <Container className="mt-8">
  <Row className="global-margin-top-history">
    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Estados de las Ventas</Card.Title>
          <div className="my-4">
            <canvas id="myChart" height="200"></canvas>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary" className='mr-2' onClick={generarReporteCompras}>
            Generar Reporte
          </Button>
          <Button onClick={generarReporteComprasImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo1} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Estados de Almacen</Card.Title>
          <div className="my-4">
            <canvas id="myChart2" height="200"></canvas>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary" className='mr-2' onClick={generarReporteAlmacen}>
            Generar Reporte
          </Button>
          <Button onClick={generarReporteAlmacenImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo2} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Productos por Categorìa</Card.Title>
          <canvas id="myCategories" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteProductosPorCategoria}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteProductoCateImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo3} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales por mes especifico</Card.Title>
          <canvas id="ventasTotalesmesespecificoChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteVentasMesEspe}>
            Generar PDF
          </Button>
          <Button onClick={generarReportePormesEspeImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo4} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>


    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales por Dias de un mes especifico</Card.Title>
          <canvas id="ventasTotalesmesanioChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteVentasDia}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteVentadiaImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo5} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

  
    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales por año</Card.Title>
          <canvas id="ventasPorAnioChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteVentasAño}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteVentaAnioImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo6} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales por producto</Card.Title>
          <canvas id="ventasTotalesproductoChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteVentasTotalesPorProducto}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteVentaProductoImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo7} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales por Categoria</Card.Title>
          <canvas id="ventasTotalescategoriaChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteCategoria}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteVentaCateImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo8} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales por trimestre</Card.Title>
          <canvas id="ventasTotalestrimestreChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteVentasTotalesTrismestre}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteVentaTrimestreImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo9} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales promedio productos</Card.Title>
          <canvas id="ventasTotalespromedioproductoChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReportePromedioVentasTotalesProducto}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteVentaPromedioImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo10} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales producto por mes</Card.Title>
          <canvas id="ventasTotalesproductomesChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteVentasTotalesProductosPorMes}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteVentaProductomesImg}>
          Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo11} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>

    <Col sm={12} md={6} lg={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Ventas totales top 5 productos</Card.Title>
          <canvas id="ventasTotalestop5productoChart" height="120"></canvas>         
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={generarReporteVentasTotalesTop5Productos}>
            Generar PDF
          </Button>
          <Button onClick={generarReporteVentatopProductosImg}>
            Generar imagen
          </Button>
          <Button variant="secondary" onClick={enviarCorreo12} className="mt-2">
    Enviar por Correo
  </Button>
        </Card.Footer>
      </Card>
    </Col>
  </Row>
</Container>


    
    </div>
  );
}

export default Estadisticas;
