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
           <Header rol={rol}/>

            <Container className="margen-contenedor">
                <Row className="g-3">
                    <Col sm="12" md="12" lg="12">
                        <Card>
                            <Card.Body>
                                <Card.Title>Dashboard</Card.Title>
                                <div className="iframe-container mt-4"> {/* Agregamos la clase mt-4 para el margen */}
                                    <iframe
                                        title="REPORTE KARDEX"
                                        src="https://app.powerbi.com/view?r=eyJrIjoiMzM0Yjk0Y2UtM2IwMy00ZTRjLTljNWUtYzNjNWQ0YmM4ZDhlIiwidCI6ImU0NzY0NmZlLWRhMjctNDUxOC04NDM2LTVmOGIxNThiYTEyNyIsImMiOjR9"
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
