import logo from './logo.svg';
import './App.css';
import Test from './Test/Test';
import axios from "axios";
import { useEffect, useState , useRef } from 'react';
import Product from './components/Product/Product';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillCodeSandboxCircle } from "react-icons/ai";

function App() {
  /* start useState + fitch */
/*   const [name, setname] = useState("BMW Pencil from use state");
  const [Brand, setBrand] = useState("iphon");
  const [Id, setId] = useState(1);
  const TitleHundle = (event) =>{
    setname(event.target.value)
  }
  const BrandHundle = (event) =>{
    setBrand(event.target.value)
  }
  const IdHundle = (event) =>{
    setId(event.target.value)
  }
  const PutAPI = () =>{
    fetch(`https://dummyjson.com/products/${Id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: name,
        brand: Brand,
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    });
  }

  const GetAPI = () =>{
    fetch(`https://dummyjson.com/products/${Id}`)
    .then(res => res.json())
    .then(res => {
      setname(res.title)
      setBrand(res.brand)
    });
  } */

  /* end useState + fitch */


  /* start useEffect */
/*   const [count, setcount] = useState(1);
  const [products, setproducts] = useState([]);
  const [number, setnumber] = useState(0);
  const [start, setstart] = useState(false);
  const countHundle = () =>{
    setcount(prev =>prev+1)
  }
  const NumberHundle = (event) =>{
    setnumber(event.target.value)
  }
  const StartHundle = () =>{
    setstart(!start)
  }
  useEffect(() => {
    setTimeout(() => {
      axios.post(`https://dummyjson.com/products`,{},{}).then(res => res.data.products)
    .then(res => {setproducts(res);
    console.log(products)});
    }, 5000);
  }, []); */
/*   useEffect (()=>{
    setInterval(() => {
      setnumber(prev => prev -1)
    }, 1000);
  },[start]) */

  /* life cycle:
      mount -> update -> unmount*/
/*       console.log(number) */


      /* start useRef */
      const [next, setnext] = useState(0);
      const [click, setclick] = useState(false);

      const test = useRef()
      const n = useRef(0)
      useEffect(() => {
        n.current = n.current + 1;
      }, [next]);


/*       const lastSection = useRef()
      useEffect(() => {
        lastSection.current.scrollIntoView({
          behavior: "smooth",block: "center"
        })
      }, [click]); */
  return (
          <>
          {/* start useState + fitch */}
{/*           <input type="text" placeholder='the id for product' onChange={IdHundle} />
          <button onClick={GetAPI}> ready </button>
          <input type="text" onChange={TitleHundle} placeholder='title' value={name} />
          <input type="text" onChange={BrandHundle} placeholder='brand' value={Brand} />
          <button onClick={PutAPI}>click</button> */}
          {/* end useState + fitch */}
          {/* start useEffect */}
          {/* <Product info={product[0]} /> */}
         {/*  {products.map((product , index)=> <Product key={index} info={product} /> )} */}
{/*          <p>{number}</p>
         <input type="text" onChange={NumberHundle} placeholder='number' /> */}
          {/* <button onClick={countHundle}> next </button> */}
          {/* <button onClick={StartHundle}> start </button> */}
          {/* end useEffect */}

          {/* start useRef */}
          {/* <div ref={test}></div> */}
{/*           <button onClick={()=>{setnext(prev => prev+1)}}> click</button>
          <p>{n.current}</p> */}
{/*           <button onClick={()=>{setclick(!click)}}>go to last section</button>
          <section></section>
          <section></section>
          <section></section>
          <section ref={lastSection}></section> */}
          {/* end useRef */}

          {/* start bootstrap cdn */}
{/*           <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div> */}
          {/* end bootstrap cdn */}

          {/* start bootstrap component */}

          <Navbar expand="lg" className="bg-body-tertiary bg-aqua">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <AiFillCodeSandboxCircle />
          </>
  );
}

export default App;
