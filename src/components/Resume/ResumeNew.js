import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/../Assets/Resume_Ushani_Sanjana.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [loadedPages, setLoadedPages] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
        // If user scrolls to the bottom, load the next page
        if (
          scrollTop + clientHeight >= scrollHeight - 10 &&
          loadedPages < numPages
        ) {
          setLoadedPages((prev) => prev + 1);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loadedPages, numPages]);

  return (
    <Container
      fluid
      className="resume-section text-center"
      ref={containerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Row className="resume d-flex justify-content-center">
        <Document
          file={pdf}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(loadedPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={width > 786 ? 1.5 : 0.6}
            />
          ))}
        </Document>
      </Row>
    </Container>
  );
}

export default ResumeNew;
