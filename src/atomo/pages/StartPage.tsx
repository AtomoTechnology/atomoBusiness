import "../../App.css";

export const StartPage = () => {
  return (
    <>
      <section className="section about-section gray-bg mt-2" id="us">
        <div className="container">
          <div className="row align-items-center justify-content-around flex-row-reverse">
            <div className="col-lg-5 text-center">
              <div className="about-img">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-text">
                <h3 className="dark-color">¿Quien somos?</h3>
                <h4 className="theme-color">
                  UI / UX Designer &amp; Web Developer
                </h4>
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
      <section className=" section about-section gray-bg mt-2">
        <h3 className="dark-color">Herramientas que usamos</h3>
        <div style={{ display: "flex" }}>
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
        </div>
      </section>
    </>
  );
};
