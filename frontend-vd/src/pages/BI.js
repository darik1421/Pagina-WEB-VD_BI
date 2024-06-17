import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';  // Importa 'jspdf-autotable'
import Header from '../components/Header';
import Chart from 'chart.js/auto';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';

function BI({ rol }) {

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
            </div>
        );
    }

    export default BI;