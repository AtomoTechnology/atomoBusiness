import "../../App.css";
import { Carousel } from 'primereact/carousel';
import { useState, useEffect } from 'react';
import { ProductService } from '../../atomo/service/ProductService';

export const StartPage = () => {

  const [products, setProducts] = useState([]);
  const responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

useEffect(() => {
    ProductService.getProductsSmall().then((data:any) => setProducts(data.slice(0, 9)));
}, []);

const productTemplate = (product:any) => {
  return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
          <div className="mb-3">
              <img src={`../../../public/image/${product.image}`} alt={product.name} className="w-6 shadow-2 w-100" />
          </div>
          <div>
              {/* <h4 className="mb-1">{product.name}</h4> */}
              {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
          </div>
      </div>
  );
};

  return (
    <>
      <section className="section about-section gray-bg " id="us">
        <div className="container">
          <div className="row align-items-center justify-content-around flex-row-reverse">
            <div className="col-lg-5 text-center d-flex justify-content-end">
              <div className="about-img">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-text">
                <h3 className="us">¿Quien somos?</h3>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores. My passion is to design digital
                  user experiences through the bold interface and meaningful
                  interactions.
                </p>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" section about-section gray-bg mt-2 section-h">
        <h3 className="dark-color p-3">Nuestros clientes</h3>     
        <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />       
      </section>
      <section className=" section about-section gray-bg mt-2 section-h">
        <h3 className="dark-color p-3">Tecnología</h3>
        {/* <div style={{ display: "flex" }}>
          <div className="col-sm-4">
            <div className="gal-detail thumb">
              <a href="#" className="image-popup" title="Screenshot-2">
                <img
                  src="https://www.bootdey.com/image/400x300/008B8B/00000"
                  className="thumb-img"
                  alt="work-thumbnail"
                />
              </a>
              <h4 className="text-center">Gallary Image</h4>
              <div className="ga-border"></div>
              <p className="text-muted text-center">
                <small>Photography</small>
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="gal-detail thumb">
              <a href="#" className="image-popup" title="Screenshot-2">
                <img
                  src="https://www.bootdey.com/image/400x300/FF7F50/00000"
                  className="thumb-img"
                  alt="work-thumbnail"
                />
              </a>
              <h4 className="text-center">Gallary Image</h4>
              <div className="ga-border"></div>
              <p className="text-muted text-center">
                <small>Photography</small>
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="gal-detail thumb">
              <a href="#" className="image-popup" title="Screenshot-2">
                <img
                  src="https://www.bootdey.com/image/400x300/6495ED/00000"
                  className="thumb-img"
                  alt="work-thumbnail"
                />
              </a>
              <h4 className="text-center">Gallary Image</h4>
              <div className="ga-border"></div>
              <p className="text-muted text-center">
                <small>Photography</small>
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="gal-detail thumb">
              <a href="#" className="image-popup" title="Screenshot-2">
                <img
                  src="https://www.bootdey.com/image/400x300/4169E1/00000"
                  className="thumb-img"
                  alt="work-thumbnail"
                />
              </a>
              <h4 className="text-center">Gallary Image</h4>
              <div className="ga-border"></div>
              <p className="text-muted text-center">
                <small>Photography</small>
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="gal-detail thumb">
              <a href="#" className="image-popup" title="Screenshot-2">
                <img
                  src="https://www.bootdey.com/image/400x300/B0E0E6/00000"
                  className="thumb-img"
                  alt="work-thumbnail"
                />
              </a>
              <h4 className="text-center">Gallary Image</h4>
              <div className="ga-border"></div>
              <p className="text-muted text-center">
                <small>Photography</small>
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="gal-detail thumb">
              <a href="#" className="image-popup" title="Screenshot-2">
                <img
                  src="https://www.bootdey.com/image/400x300/4169E1/00000"
                  className="thumb-img"
                  alt="work-thumbnail"
                />
              </a>
              <h4 className="text-center">Gallary Image</h4>
              <div className="ga-border"></div>
              <p className="text-muted text-center">
                <small>Photography</small>
              </p>
            </div>
          </div>
        </div> */}
        
         {/* <div className="card"> */}
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        {/* </div> */}
      </section>
    </>
  );
};
