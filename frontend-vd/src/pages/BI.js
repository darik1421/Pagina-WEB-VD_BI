import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';  // Importa 'jspdf-autotable'
import Header from '../components/Header';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';

function BI({ rol }) {

    const imprimirEstadisticas = () => {
        console.log("Imprimiendo estadísticas...");
    }

    return (
        <div>
           <Header rol={rol} style={{ paddingTop: '4rem' }} />

            <Container className="mt-4">
                <Row className="g-3">
                    <Col xs="12">
                        <Card>
                            <Card.Body>
                                <Card.Title>Estado del almacén</Card.Title>
                                <div className="iframe-container mt-4"> {/* Agregamos la clase mt-4 para el margen */}
                                    <iframe
                                        title="REPORTE KARDEX"
                                        src="https://app.powerbi.com/view?r=eyJrIjoiYzJhY2RhOTEtMGIzNy00ZjE2LWFlZGYtZTVmOThjNjY0Yzk2IiwidCI6ImU0NzY0NmZlLWRhMjctNDUxOC04NDM2LTVmOGIxNThiYTEyNyIsImMiOjR9"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <Button className="mt-3" onClick={imprimirEstadisticas}>
                                    Generar reporte con imagen
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-4">
                <Row className="g-3">
                    <Col xs="12">
                        <Card>
                            <Card.Body>
                                <Card.Title>Estado del almacén</Card.Title>
                                <div className="iframe-container">
                                    <iframe
                                        title="REPORTE KARDEX"
                                        src="https://app.powerbi.com/view?r=eyJrIjoiYzJhY2RhOTEtMGIzNy00ZjE2LWFlZGYtZTVmOThjNjY0Yzk2IiwidCI6ImU0NzY0NmZlLWRhMjctNDUxOC04NDM2LTVmOGIxNThiYTEyNyIsImMiOjR9"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <Button className="mt-3" onClick={imprimirEstadisticas}>
                                    Generar reporte con imagen
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-4">
                <Row className="g-3">
                    <Col xs="12">
                        <Card>
                            <Card.Body>
                                <Card.Title>Estado del almacén</Card.Title>
                                <div className="iframe-container">
                                    <iframe
                                        title="REPORTE KARDEX"
                                        src="https://app.powerbi.com/view?r=eyJrIjoiYzJhY2RhOTEtMGIzNy00ZjE2LWFlZGYtZTVmOThjNjY0Yzk2IiwidCI6ImU0NzY0NmZlLWRhMjctNDUxOC04NDM2LTVmOGIxNThiYTEyNyIsImMiOjR9"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <Button className="mt-3" onClick={imprimirEstadisticas}>
                                    Generar reporte con imagen
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-4 mb-4">
                <Row className="g-3">
                    <Col xs="12">
                        <Card>
                            <Card.Body>
                                <Card.Title>Estado del almacén</Card.Title>
                                <div className="iframe-container">
                                    <iframe
                                        title="REPORTE KARDEX"
                                        src="https://app.powerbi.com/view?r=eyJrIjoiYzJhY2RhOTEtMGIzNy00ZjE2LWFlZGYtZTVmOThjNjY0Yzk2IiwidCI6ImU0NzY0NmZlLWRhMjctNDUxOC04NDM2LTVmOGIxNThiYTEyNyIsImMiOjR9"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <Button className="mt-3" onClick={imprimirEstadisticas}>
                                    Generar reporte con imagen
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BI;
