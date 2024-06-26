import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Row, Col, Form, Modal, FloatingLabel } from 'react-bootstrap';
import Header from '../components/Header';
import { FaSistrix, FaPencil, FaTrashCan } from 'react-icons/fa6';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Gestionproducto({ rol }) {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedproducto, setSelectedProducto] = useState({});
  const [formData, setFormData] = useState({
    nombre_Producto: '',
    presentacion: '',
    imagen: '',
    descripcion: '',
    precio_Venta: '',
    precio_Compra: '',
    cantidad_Disponible: '',
    id_Marca: '',
    id_Categoria: '',
  });

  

  const notifySuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 800, // Auto cerrar después de 3 segundos
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 800,
    });
  };



  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null); // Nuevo estado para el archivo de imagen

  
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [deleteProductoId, setDeleteProductoId] = useState(null);

  const handleNewFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const formData = new FormData();
      formData.append('nuevaImagen', file);

      try {
        const response = await axios.post('http://localhost:5000/upload2', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data.imageUrl) {
          // Obtén la URL de la imagen cargada y puedes guardarla en tu estado o donde sea necesario.
          const imageUrl = response.data.imageUrl;
          setImageUrl(imageUrl);
          notifySuccess('Carga de imagen exitosa');
        } else {
          notifyError('Error al cargar la nueva imagen');
        }
      } catch (error) {
        console.error('Error al cargar la nueva imagen:', error);
      }
    }
  };


  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducto = productos.filter((producto) => {
    const nombre_Producto = producto.nombre_Producto.toLowerCase();
    const presentacion = producto.presentacion.toLowerCase();
    const descripcion = producto.descripcion.toLowerCase();
    const marca = marcas.find((marca) => marca.id_Marca === producto.id_Marca)?.nombre_Marca.toLowerCase();
    const categoria = categorias.find((categoria) => categoria.id_Categoria === producto.id_Categoria)?.nombre_Categoria.toLowerCase();
    const search = searchQuery.toLowerCase();

    return (
      nombre_Producto.includes(search) ||
      presentacion.includes(search) ||
      descripcion.includes(search) ||
      marca.includes(search) ||
      categoria.includes(search)
    );
  });


  function formatearNumeroConComas(numero) {
    // Aplica toFixed para limitar los decimales a dos
    const numeroFormateado = Number(numero).toFixed(2);

    // Usa una expresión regular para agregar comas
    return numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const openModal = (producto) => {
    setSelectedProducto(producto);

    const selectedMarca = marcas.find((marca) => marca.id_Marca === producto.id_Marca);
    const selectedCategoria = categorias.find((categoria) => categoria.id_Categoria === producto.id_Categoria);

    setFormData({
      nombre_Producto: producto.nombre_Producto,
      presentacion: producto.presentacion,
      imagen: producto.imagen,
      descripcion: producto.descripcion,
      precio_Venta: producto.precio_Venta,
      precio_Compra: producto.precio_Compra,
      cantidad_Disponible: producto.cantidad_Disponible,
      id_Marca: producto.id_Marca,
      id_Categoria: producto.id_Categoria,
    });

    setSelectedBrand(selectedMarca);
    setSelectedCategory(selectedCategoria);


    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === 'id_Categoria' || name === 'id_Marca' || (name === 'cantidad' || name === 'precio') && !isNaN(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name !== 'cantidad' && name !== 'precio') {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const loadProducto = () => {
    fetch('http://localhost:5000/crud/readproducto')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al obtener los productos:', error));
  };

  const loadMarcas = () => {
    fetch('http://localhost:5000/crud/nombremarcas')
      .then((response) => response.json())
      .then((data) => setMarcas(data))
      .catch((error) => console.error('Error al obtener las marcas:', error));
  };

  const loadCategorias = () => {
    fetch('http://localhost:5000/crud/nombrecategorias')
      .then((response) => response.json())
      .then((data) => setCategorias(data))
      .catch((error) => console.error('Error al obtener las categorías:', error));
  };

  useEffect(() => {
    loadProducto();
    loadMarcas();
    loadCategorias();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append('nombre_Producto', formData.nombre_Producto);
    dataToSend.append('presentacion', formData.presentacion);

    // Si no se proporciona una nueva imagen, utiliza la imagen existente
    dataToSend.append('imagen', imageUrl ? imageUrl : formData.imagen);

    dataToSend.append('descripcion', formData.descripcion);
    dataToSend.append('precio_Venta', formData.precio_Venta);
    dataToSend.append('precio_Compra', formData.precio_Compra);
    dataToSend.append('cantidad_Disponible', formData.cantidad_Disponible);
    dataToSend.append('id_Marca', formData.id_Marca);
    dataToSend.append('id_Categoria', formData.id_Categoria);

    try {
      const response = await axios.put(`http://localhost:5000/crud/updateproducto/${selectedproducto.id_Producto}`, dataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.message === 'Registro actualizado con éxito') {
        notifySuccess('Actualización Exitosa');
        // Restablece los campos
        setFormData({
          nombre_Producto: '',
          presentacion: '',
          imagen: '',
          descripcion: '',
          precio_Venta: '',
          precio_Compra: '',
          cantidad_Disponible: '',
          id_Marca: '',
          id_Categoria: '',
        });
        setImageUrl('');
        setShowModal(false);
        loadProducto();
      } else {
        notifyError('Error al actualizar el producto');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud al servidor');
    }
  };


  const [warningMessage, setWarningMessage] = useState('');




  const handleDelete = (id_Producto) => {
    setDeleteProductoId(id_Producto);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Realiza la solicitud DELETE al servidor para eliminar el producto
    fetch(`http://localhost:5000/crud/deleteproducto/${deleteProductoId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          notifySuccess('Registro eliminado correctamente');
          // La eliminación fue exitosa, refresca la lista de productos
          loadProducto();
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.error) {
          setWarningMessage('No se puede eliminar este producto porque está vinculado a un detalle de compra.');
          setTimeout(() => {
            setWarningMessage('');
          }, 2000);
        }
      })
      .catch((error) => console.error('Error al eliminar el producto:', error))
      .finally(() => {
        setShowDeleteModal(false);
        setDeleteProductoId(null);
      });
  };
  

  const openCategoryModal = () => {
    setShowCategoryModal(true);
  };

  const closeCategoryModal = () => {
    setShowCategoryModal(false);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setFormData({
      ...formData,
      id_Categoria: category.id_Categoria,
    });
    closeCategoryModal();
  };

  const openBrandModal = () => {
    setShowBrandModal(true);
  };

  const closeBrandModal = () => {
    setShowBrandModal(false);
  };

  const selectBrand = (brand) => {
    setSelectedBrand(brand);
    setFormData({
      ...formData,
      id_Marca: brand.id_Marca,
    });
    closeBrandModal();
  };
  




  return (
    <div>

      <ToastContainer/>
      <Header rol={rol} />


      <Card className="global-margin-top">
        <Card.Body>
          <Card.Title className="mb-3 title ">Listado de Productos</Card.Title>

          <Row className="mb-3">
            <Col>
              <FloatingLabel controlId="search" label="Buscar">
                <Form.Control
                  type="text"
                  placeholder="Buscar"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </FloatingLabel>
            </Col>
          </Row>

          
      {warningMessage && (
  <Alert variant="warning" onClose={() => setWarningMessage('')} dismissible>
    {warningMessage}
  </Alert>
)}

          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr className='centrado'>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Presentación</th>
                  <th>Imagen</th>
                  <th>Descripción</th>
                  <th>Precio Venta</th>
                  <th>Precio Compra</th>
                  <th>Cantidad Disponible</th>
                  <th>Marca</th>
                  <th>Categoría</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducto.map((producto) => (
                  <tr className='centrado' key={producto.id_Producto}>
                    <td>{producto.id_Producto}</td>
                    <td>{producto.nombre_Producto}</td>
                    <td>{producto.presentacion}</td>
                    <td>
                      <img src={producto.imagen} alt="Imagen del producto" style={{ maxWidth: '80px' }} />

                    </td>
                    <td>{producto.descripcion}</td>
                    <td>C${formatearNumeroConComas(producto.precio_Venta)}</td>
                    <td>C${formatearNumeroConComas(producto.precio_Compra)}</td>
                    <td>{producto.cantidad_Disponible}</td>
                    <td>{marcas.find((marca) => marca.id_Marca === producto.id_Marca)?.nombre_Marca}</td>
                    <td>{categorias.find((categoria) => categoria.id_Categoria === producto.id_Categoria)?.nombre_Categoria}</td>
                    <td>
                      <div className="button-container">
                        <Button className='actualizar' variant="primary" onClick={() => openModal(producto)}>
                          <FaPencil />
                        </Button>
                        <Button className='eliminar' variant="danger" onClick={() => handleDelete(producto.id_Producto)}>
                          <FaTrashCan />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Actualizar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="mt-3">
            <Card.Body>
          
              <Form className="mt-3">
                <Row className="g-3">
                  <Col sm="6" md="6" lg="6">
                    <FloatingLabel controlId="nombre_Producto" label="Nombre">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre"
                        name="nombre_Producto"
                        value={formData.nombre_Producto}
                        onChange={handleFormChange}
                        onKeyDown={(e) => {
                          // Permitir solo letras, números y espacios
                          if (!((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z') || (e.key >= '0' && e.key <= '9') || e.key === ' ')) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col sm="6" md="6" lg="6">
                    <FloatingLabel controlId="presentacion" label="Presentación">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese la presentación"
                        name="presentacion"
                        value={formData.presentacion}
                        onChange={handleFormChange}
                        onKeyDown={(e) => {
                          // Permitir solo letras, números y espacios
                          if (!((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z') || (e.key >= '0' && e.key <= '9') || e.key === ' ')) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col sm="6" md="6" lg="6">
                    <Form.Group controlId="updatedFile" className="mb-3">
                      <Form.Label>Nueva Imagen</Form.Label>
                      <Form.Control
                        className="custom-file-input"
                        type="file"
                        accept=".jpg, .png, .jpeg"
                        onChange={handleNewFileChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="12">
                    <FloatingLabel controlId="descripcion" label="Descripción">
                      <Form.Control
                        as="textarea"
                        className="auto-expand-textarea" // Aplica la clase personalizada aquí
                        style={{ minHeight: '100px' }} // Establece la altura inicial aquí
                        placeholder="Ingrese la descripción"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={(e) => {
                          handleFormChange(e);
                          e.target.style.height = 'auto'; // Restablece la altura a 'auto' para calcular la nueva altura
                          e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta la altura automáticamente
                        }}
                        onKeyDown={(e) => {
                          // Permitir solo letras, números y espacios
                          if (!((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z') || (e.key >= '0' && e.key <= '9') || e.key === ' ')) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col sm="12" md="6" lg="6">
                    <FloatingLabel controlId="cantidad_Disponible" label="Cantidad">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese la cantidad"
                        name="cantidad_Disponible"
                        value={formData.cantidad_Disponible}
                        onChange={handleFormChange}
                        onKeyDown={(e) => {
                          // Permitir solo números (0-9), retroceso y teclas de flecha
                          if (
                            !(
                              (e.key >= '0' && e.key <= '9') ||
                              e.key === 'Backspace' ||
                              e.key === 'ArrowLeft' ||
                              e.key === 'ArrowRight'
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </FloatingLabel>
                  </Col>


                   <Col sm="12" md="6" lg="6">
        <FloatingLabel controlId="precioVenta" label="">
          <div className="input-group">
            <span className="input-group-text">C$ Venta</span>
            <Form.Control
              className="input-size"
              type="text"
              value={formData.precio_Venta}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*\.?\d*$/.test(value)) {
                  setFormData({ ...formData, precio_Venta: value });
                }
              }}
            />
          </div>
        </FloatingLabel>
      </Col>

      <Col sm="12" md="6" lg="6">
        <FloatingLabel controlId="precioCompra" label="">
          <div className="input-group">
            <span className="input-group-text">C$ Compra</span>
            <Form.Control
              className="input-size"
              type="text"
              value={formData.precio_Compra}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*\.?\d*$/.test(value)) {
                  setFormData({ ...formData, precio_Compra: value });
                }
              }}
            />
          </div>
        </FloatingLabel>
      </Col>

                  <Col sm="12" md="6" lg="6">
                    <FloatingLabel controlId="categoria" label="Categoría">
                      <Form.Control
                        type="text"
                        placeholder="Categoría seleccionada"
                        name="categoria"
                        value={selectedCategory ? selectedCategory.nombre_Categoria : ''}
                        readOnly
                      />
                      <Button className='show-button-modal' variant="primary" onClick={openCategoryModal}>
                        <FaSistrix />
                      </Button>
                    </FloatingLabel>
                  </Col>
                  <Col sm="12" md="6" lg="6">
                    <FloatingLabel controlId="marca" label="Marca">
                      <Form.Control
                        type="text"
                        placeholder="Marca seleccionada"
                        name="marca"
                        value={selectedBrand ? selectedBrand.nombre_Marca : ''}
                        readOnly
                      />
                      <Button className='show-button-modal' variant="primary" onClick={openBrandModal}>
                        <FaSistrix />
                      </Button>
                    </FloatingLabel>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary" className='button-color' onClick={handleUpdate}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCategoryModal} onHide={closeCategoryModal}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar Categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {categorias.map((category) => (
            <div className='Seleccion' key={category.id_Categoria} onClick={() => selectCategory(category)}>
              {category.nombre_Categoria}
            </div>
          ))}
        </Modal.Body>
      </Modal>
      <Modal show={showBrandModal} onHide={closeBrandModal}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar Marca</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {marcas.map((brand) => (
            <div className='Seleccion' key={brand.id_Marca} onClick={() => selectBrand(brand)}>
              {brand.nombre_Marca}
            </div>
          ))}
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirmar eliminación</Modal.Title>
  </Modal.Header>
  <Modal.Body className='center'>
    ¿Seguro que deseas eliminar este producto?
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
      Cancelar
    </Button>
    <Button variant="danger" onClick={confirmDelete}>
      Eliminar
    </Button>
  </Modal.Footer>
</Modal>
    </div>
  );
}

export default Gestionproducto;
