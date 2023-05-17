import '../../App.css'

export const StartPage = () => {
  return (
    <div className='p-2'>
       <section style={{backgroundColor:"white"}} >        
       <div className="col row" style={{color:"white"}}>
        <div className="col-md-7 col-sm col-lg justify-content">
              <label htmlFor="" className='label'>¿Quien somos?</label>
              <br />
              <p className='div'>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
              </p>
          </div>

          <div className="col-5 divimg">
              <img src="../../../public/image/us.jpeg" alt="" className='img'/>
          </div>
       </div>
        </section> 
      <br />
       <section style={{
            height: "38vh"
       }}>
        <label htmlFor=""className='tools'>Herramientas que usamos</label>
        <div className='row'>
          <div className='col-3 mt-1'>
             <img src="../../../public/image/Node.png" alt="" className='img'/>
          </div>
          <div className='col-3'>
             <img src="../../../public/image/html5.png" alt="" className='img'/>
          </div>
          <div className='col-3'>
             <img src="../../../public/image/css.png" alt="" className='img'/>
          </div>
          <div className='col-3'>
             <img src="../../../public/image/csharp.png" alt="" className='img'/>
          </div>
        </div>
       </section>
       <br />
       
       <section className='sectioncontact'>
       <label htmlFor=""className='lblcontact'>Contactanos</label>
       </section>

    </div>
  )
}
