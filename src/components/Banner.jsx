import img from "../assets/banner.webp"
export const Banner = () => {
  return (
    <div className="container">
      <header>
        <div className="headerText" style={{width:"inherit",objectFit:"cover"}}>
          <img style = {{objectFit:"cover",width:100+"%",height:"inherit",}} src = {img} alt ="banner" />
          {/* <h1>Enjoy Shopping</h1> */}
          {/* <p>Enjoy shopping</p> */}
        </div>
      </header>
    </div>
  );
};
