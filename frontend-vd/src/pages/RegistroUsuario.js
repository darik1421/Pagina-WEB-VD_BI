import React, { useState,useEffect } from 'react';
import { Button, Container, Card, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useAsyncError } from 'react-router-dom/dist/umd/react-router-dom.development';

function Usuario() {
  const [nombre_Usuario, setNombre_Usuario] = useState('');
  const [segundo_Nombre,setSegundo_Nombre] = useState('');
  const [apellido_Usuario,setApellido_Usuario] = useState('');
  const [segundo_Apellido,setSegundo_Apellido] = useState('');
  const [genero,setGenero] = useState('');
  const [fecha_Nacimiento,setFecha_Nacimiento] = useState('');
  const [correo_Electronico, setCorreo_Electronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [rolUser, setRolUser] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [formErrors, setFormErrors] = useState({
    nombre_Usuario: '',
    segundo_Nombre: '',
    apellido_Usuario: '',
    segundo_Apellido: '',
    genero: '',
    fecha_Nacimiento: '',
    correo_Electronico: '',
    contrasena: '',
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



  const handleSubmit = async (e) => {
    e.preventDefault();

        // Validar campos vacíos
        const errors = {};

        if (!nombre_Usuario) {
          errors.nombre_Usuario = 'Ingrese un nombre de usuario';
        }

        if (!segundo_Nombre) {
          errors.segundo_Nombre = 'Ingrese su segundo nombre si tiene';
        }

        if (!apellido_Usuario) {
          errors.apellido_Usuario = 'Ingrese su apellido';
        }

        if (!segundo_Apellido) {
          errors.segundo_Apellido = 'Ingrese su segundo apellido si tiene';
        }

        if (!genero) {
          errors.genero = 'Seleccione su género';
        }

        if (!fecha_Nacimiento) {
          errors.fecha_Nacimiento = 'Seleccione su fecha de nacimiento';
        }
    
        if (!correo_Electronico) {
          errors.correo_Electronico = 'Ingrese un correo';
        }
    
        if (!contrasena) {
          errors.contrasena = 'Ingrese la contraseña';
        }
  
    
        // Actualizar el estado de los errores
        setFormErrors(errors);
    
        // Si hay errores, detener el envío del formulario
        if (Object.values(errors).some((error) => error !== '')) {
          return;
        }


 // Formatear la fecha al formato deseado ("1990-05-19")
 const formattedDate = formatDate(fecha_Nacimiento);
    

    const formData = {
      
      nombre_Usuario,
      segundo_Nombre,
      apellido_Usuario,
      segundo_Apellido,
      genero,
      fecha_Nacimiento: formattedDate,
      correo_Electronico,
      contrasena,
      rol: 'cliente',
    };

    try {
      const response = await fetch('http://localhost:5000/crud/createusuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        notifySuccess('Registro exitoso');
        setNombre_Usuario('');
        setSegundo_Nombre('');
        setApellido_Usuario('');
        setSegundo_Apellido('');
        setGenero('');
        setFecha_Nacimiento('');
        setCorreo_Electronico('');
        setContrasena('');
        setRolUser('');
      } else {
       notifyError('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud al servidor');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };
  
  



  return (
    <div>
     
      <ToastContainer/>
      <Container>
        <Card className="global-margin-top">
          <Card.Body>
            <Card.Title className="mb-3 title ">Registro de Usuario</Card.Title>
            <Form className="mt-3" onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col sm="6" md="6" lg="6">
                  <FloatingLabel controlId="nombre_Usuario" label="Nombre de Usuario">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el nombre de usuario"
                      value={nombre_Usuario}
                      onChange={(e) => setNombre_Usuario(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                      pattern="[a-zA-Z]+[a-zA-Z0-9_]*"
                      minLength="6"
                      maxLength="20"
                    />
                  </FloatingLabel>
                  {formErrors.nombre_Usuario && <div className="error-message">{formErrors.nombre_Usuario}</div>}
                </Col>


                <Col sm="6" md="6" lg="6">
                  <FloatingLabel controlId="contrasena" label="Contraseña">
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      title="Debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial."
                      placeholder="Ingrese una contraseña"
                      value={contrasena}
                      onChange={(e) => setContrasena(e.target.value)}
                    />
                    <Button
                        variant="link"
                        className="show-password-button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                      </Button>
                  </FloatingLabel>
                  {formErrors.contrasena && <div className="error-message">{formErrors.contrasena}</div>}
                </Col>

                <Col sm="6" md="6" lg="6">
                  <FloatingLabel controlId="segundo_Nombre" label="Segundo Nombre">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el segundo nombre"
                      value={segundo_Nombre}
                      onChange={(e) => setSegundo_Nombre(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                      pattern="[a-zA-Z]+[a-zA-Z0-9_]*"
                      minLength="6"
                      maxLength="20"
                    />
                  </FloatingLabel>
                  {formErrors.segundo_Nombre && <div className="error-message">{formErrors.segundo_Nombre}</div>}
                </Col>

                <Col sm="6" md="6" lg="6">
                  <FloatingLabel controlId="apellido_Usuario" label="Apellido de Usuario">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el apellido de usuario"
                      value={apellido_Usuario}
                      onChange={(e) => setApellido_Usuario(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                      pattern="[a-zA-Z]+[a-zA-Z0-9_]*"
                      minLength="2"
                      maxLength="20"
                    />
                  </FloatingLabel>
                  {formErrors.apellido_Usuario && <div className="error-message">{formErrors.apellido_Usuario}</div>}
                </Col>

                <Col sm="6" md="6" lg="6">
                  <FloatingLabel controlId="segundo_Apellido" label="Segundo Apellido">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el segundo apellido"
                      value={segundo_Apellido}
                      onChange={(e) => setSegundo_Apellido(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                      pattern="[a-zA-Z]+[a-zA-Z0-9_]*"
                      minLength="2"
                      maxLength="20"
                    />
                  </FloatingLabel>
                  {formErrors.segundo_Apellido && <div className="error-message">{formErrors.segundo_Apellido}</div>}
                </Col>

                <Col sm="6" md="6" lg="6">
                  <FloatingLabel controlId="genero" label="Género">
                    <Form.Select
                      aria-label="Género"
                      value={genero}
                      onChange={(e) => setGenero(e.target.value)}
                    >
                      <option value="">Seleccionar Género</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </Form.Select>
                  </FloatingLabel>
                  {formErrors.genero && <div className="error-message">{formErrors.genero}</div>}
                </Col>

                <Col sm="6" md="6" lg="6">
                  <FloatingLabel controlId="fecha_Nacimiento" label="Fecha de Nacimiento">
                    <Form.Control
                      type="date"
                      placeholder="Ingrese la fecha de nacimiento"
                      value={fecha_Nacimiento}
                      onChange={(e) => setFecha_Nacimiento(e.target.value)}
                    />
                  </FloatingLabel>
                  {formErrors.fecha_Nacimiento && <div className="error-message">{formErrors.fecha_Nacimiento}</div>}
                </Col>

                <Col sm="6" md="6" lg="6">
                  <FloatingLabel controlId="correo_Electronico" label="Correo">
                    <Form.Control
                      type="email"
                      placeholder="Ingrese el Correo"
                      value={correo_Electronico}
                      onChange={(e) => setCorreo_Electronico(e.target.value)}
                    />
                  </FloatingLabel>
                  {formErrors.correo_Electronico && <div className="error-message">{formErrors.correo_Electronico}</div>}
                </Col>

              </Row>
              <div className="center-button">
                <Button variant="primary" type="submit" className="mt-3 button-color" size="lg">
                  Registrar
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Usuario;
