import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Row, Col, Form, Modal, FloatingLabel } from 'react-bootstrap';
import Header from '../components/Header';
import { FaPencil, FaTrashCan} from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Gestionusuario({rol}) {
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedusuario, setSelectedUsuario] = useState({});
  const [formData, setFormData] = useState({
    nombre_Usuario: '',
    segundo_Nombre: '',
    apellido_Usuario: '',
    segundo_Apellido: '',
    genero: '',
    fecha_Nacimiento: '',
    correo_Electronico: '',
    contrasena: '', 

  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
const [deleteUserId, setDeleteUserId] = useState(null);


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


  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsuario = usuarios.filter((usuario) => {
    const nombre_Usuario = usuario.nombre_Usuario.toLowerCase();
    const segundo_Nombre = usuario.segundo_Apellido.toLowerCase(); 
    const apellido_Usuario = usuario.apellido_Usuario.toLowerCase(); 
    const segundo_Apellido  = usuario.segundo_Apellido.toLowerCase();
    const genero = usuario.genero.toLowerCase(); 
    const fecha_Nacimiento = usuario.fecha_Nacimiento.toLowerCase();
   const correo_Electronico = usuario.correo_Electronico.toLowerCase();
    const contraseña = usuario.contrasena.toLowerCase();
    const rol = usuario.rol.toLowerCase();
    const search = searchQuery.toLowerCase();

    return (
      nombre_Usuario.includes(search) ||
      correo_Electronico.includes(search) ||
      segundo_Nombre.includes(search) ||
      apellido_Usuario.includes(search) ||
      segundo_Apellido.includes(search) ||
      genero.includes(search) ||
      fecha_Nacimiento ||
      contraseña.includes(search) ||
      rol.includes(search) 
    );
  });



  // Función para abrir el modal y pasar los datos del producto seleccionado
  const openModal = (usuario) => {
    setSelectedUsuario(usuario);

    setFormData({
      nombre_Usuario: usuario.nombre_Usuario,
      segundo_Nombre: usuario.segundo_Nombre,
      apellido_Usuario: usuario.apellido_Usuario,
      segundo_Apellido: usuario.segundo_Apellido,
      genero: usuario.genero,
      fecha_Nacimiento: new Date(usuario.fecha_Nacimiento).toISOString().split('T')[0], // Format date as YYYY-MM-DD
      correo_Electronico: usuario.correo_Electronico,
      contrasena: usuario.contrasena,
    });
    setShowModal(true);
  };

  // Función para manejar cambios en el formulario
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loadUsuario = () => {
    fetch('http://localhost:5000/crud/readusuarios')
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error('Error al obtener los usuarios:', error));
  };
  // Realiza una solicitud GET al servidor para obtener los productos y cargar las marcas y categorías
  useEffect(() => {
    loadUsuario();
  }, []);

  // Función para enviar el formulario de actualización
  const handleUpdate = () => {
    // Realiza la solicitud PUT al servidor para actualizar el registro
    fetch(`http://localhost:5000/crud/updateusuario/${selectedusuario.id_Usuario}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          notifySuccess('El usuario ha sido actualizado')// La actualización fue exitosa, puedes cerrar el modal y refrescar la lista de productos
          setShowModal(false);
          loadUsuario(); // Cargar la lista de productos actualizada
        }
      })
      .catch((error) => console.error('Error al actualizar el registro:', error));
  };

  // Función para eliminar un producto
  const handleDelete = (id_Usuario) => {
    setDeleteUserId(id_Usuario);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Realiza la solicitud DELETE al servidor para eliminar el producto
    fetch(`http://localhost:5000/crud/deleteusuario/${deleteUserId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          notifySuccess('Registro eliminado correctamente');
          // La eliminación fue exitosa, refresca la lista de productos
          loadUsuario();
        }
      })
      .catch((error) => console.error('Error al eliminar el producto:', error))
      .finally(() => {
        setShowDeleteModal(false);
        setDeleteUserId(null);
      });
  };

  return (
    <div>
      <ToastContainer/>
      <Header rol={rol}/>

      <Card className="global-margin-top">
        <Card.Body>
          <Card.Title className="mb-3 title">Listado de Usuarios</Card.Title>

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

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Segundo nombre</th>
                <th>Apellido</th>
                <th>Segundo apellido</th>
                <th>Género</th>
                <th>Fecha nacimiento</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsuario.map((usuario) => (
                <tr key={usuario.id_Usuario}>
                  <td>{usuario.id_Usuario}</td>
                  <td>{usuario.nombre_Usuario}</td>
                  <td>{usuario.segundo_Nombre}</td>
                  <td>{usuario.apellido_Usuario}</td>
                  <td>{usuario.segundo_Apellido}</td>
                  <td>{usuario.genero}</td>
                  <td>{new Date(usuario.fecha_Nacimiento).toLocaleDateString('en-GB')}</td> {/* Format date as YYYY-MM-DD */}
                  <td>{usuario.correo_Electronico}</td>
                  <td>{usuario.contrasena}</td>
                  <td>
                    <div className='button-container'>
                    <Button className='actualizar' variant="primary" onClick={() => openModal(usuario)}><FaPencil/></Button>
                    <Button className='eliminar' variant="danger" onClick={() => handleDelete(usuario.id_Usuario)}><FaTrashCan/></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
                  <Col sm="6" md="6" lg="4">
                    <FloatingLabel controlId="nombre_Usuario" label="Nombre">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre"
                        name="nombre_Usuario"
                        value={formData.nombre_Usuario}
                        onChange={handleFormChange}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col sm="6" md="6" lg="4">
                    <FloatingLabel controlId="segundo_Nombre" label="Segundo nombre">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su segundo nombre"
                        name="segundo_Nombre"
                        value={formData.segundo_Nombre}
                        onChange={handleFormChange}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col sm="6" md="6" lg="4">
                    <FloatingLabel controlId="apellido_Usuario" label="Apellido">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su apellido"
                        name="apellido_Usuario"
                        value={formData.apellido_Usuario}
                        onChange={handleFormChange}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col sm="6" md="6" lg="4">
                    <FloatingLabel controlId="segundo_Apellido" label="Segundo apellido">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su segundo apellido"
                        name="segundo_Apellido"
                        value={formData.segundo_Apellido}
                        onChange={handleFormChange}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col sm="6" md="6" lg="4">
                    <FloatingLabel controlId="genero" label="Género">
                    <Form.Select
                        aria-label="Seleccionar Género"
                        name="genero"
                        value={formData.genero}
                        onChange={handleFormChange}
                        >
                        <option value="">Seleccionar Género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>

                        </Form.Select>
                        </FloatingLabel>
                      </Col>

                      <Col sm="6" md="6" lg="4">
                  <FloatingLabel controlId="fecha_Nacimiento" label="Fecha de Nacimiento">
                    <Form.Control
                      type="date"
                      placeholder="Ingrese la fecha de nacimiento"
                      name="fecha_Nacimiento"
                      value={formData.fecha_Nacimiento}
                      onChange={handleFormChange}
                    />
                  </FloatingLabel>
                </Col>


                  <Col sm="6" md="6" lg="4">
                    <FloatingLabel controlId="correo_Electronico" label="Correo">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese el correo"
                        name="correo_Electronico"
                        value={formData.correo_Electronico}
                        onChange={handleFormChange}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="contrasena" label="Contraseña">
                      <Form.Control
                        type="text"
                        placeholder="Ingrese la contraseña"
                        name="contrasena"
                        value={formData.contrasena}
                        onChange={handleFormChange}
                      />
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

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirmar eliminación</Modal.Title>
  </Modal.Header>
  <Modal.Body className='center'>
    ¿Seguro que deseas eliminar este usuario?
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

export default Gestionusuario;
