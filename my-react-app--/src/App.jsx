function app(){
  const name="Birds";
  let num1 = 32;
  let num2 = 44;
  let num = num1+num2; 
  let age=18;
  let userage=20;
  };
  return (
    <>
    <h2 style={{ backgroundColor:"aqua",color:"blueviolet"}}>page for {name}</h2>
    <div style={{display:"flex"}}>
    <img src="https://asset.gecdesigns.com/img/wallpapers/adorable-love-birds-iphone-wallpaper-with-soft-nature-background-sr22082508-cover.webp" alt="Birds" width="200" height="200"/>
    <p className="Avian" style={{backgroundColor:"lightgreen"}}>Birds are warm-blooded vertebrates characterized by feathers, beaks, and wings. With over 10,000 species worldwide, they range from the <b>{num}</b> bee hummingbird to the 2.7 m ostrich. Most birds are adapted for flight through lightweight, hollow bones, and specialized metabolic systems. They play vital ecological roles, including seed dispersal, plant pollination, and pest contro</p>
    </div>
    {
      (userage>age)?<p>user Logged In</p>:
      <p>Invalid age</p>
    }    
    <button onDoubleClick={() =>{
       alert("warning⚠️")
    }} style={{width:"fit-content"}}>Danger</button>
    </>
  );
}
export default app;
