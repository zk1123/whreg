function Citymincrd({name,image}) {
  return (
    <>
            <div class="card" style={{width: "18rem"}}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title" style={{color: "#b30000"}}>{name}</h5>  
  </div>
</div>
    </>
  )
}

export default Citymincrd
