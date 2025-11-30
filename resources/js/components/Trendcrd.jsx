// import brwaz from'../assets/brwaz.png'
function Trendcrd({name,image}) {

  return (
    <>
     <div className="crd col-8 row stcrd mb-5 ">
            <img src={image} className="col-6" alt=""/>
            <div className="col-6 text-center">
              <h3 className="z-3 position-relative he">{name}</h3>
              {/* <img src={brwaz} className="brwz z-1" alt=""/> */}
            </div>
          </div>
    <br/>
    </>
  )
}

export default Trendcrd